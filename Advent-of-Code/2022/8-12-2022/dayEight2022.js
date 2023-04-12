/*
--- Day 8: Treetop Tree House ---
The expedition comes across a peculiar patch of tall trees all planted carefully in a grid. The Elves explain that a previous expedition planted these trees as a reforestation effort. Now, they're curious if this would be a good location for a tree house.

First, determine whether there is enough tree cover here to keep a tree house hidden. To do this, you need to count the number of trees that are visible from outside the grid when looking directly along a row or column.

The Elves have already launched a quadcopter to generate a map with the height of each tree (your puzzle input). For example:

30373
25512
65332
33549
35390
Each tree is represented as a single digit whose value is its height, where 0 is the shortest and 9 is the tallest.

A tree is visible if all of the other trees between it and an edge of the grid are shorter than it. Only consider trees in the same row or column; that is, only look up, down, left, or right from any given tree.

All of the trees around the edge of the grid are visible - since they are already on the edge, there are no trees to block the view. In this example, that only leaves the interior nine trees to consider:

The top-left 5 is visible from the left and top. (It isn't visible from the right or bottom since other trees of height 5 are in the way.)
The top-middle 5 is visible from the top and right.
The top-right 1 is not visible from any direction; for it to be visible, there would need to only be trees of height 0 between it and an edge.
The left-middle 5 is visible, but only from the right.
The center 3 is not visible from any direction; for it to be visible, there would need to be only trees of at most height 2 between it and an edge.
The right-middle 3 is visible from the right.
In the bottom row, the middle 5 is visible, but the 3 and 4 are not.
With 16 trees visible on the edge and another 5 visible in the interior, a total of 21 trees are visible in this arrangement.

Consider your map; how many trees are visible from outside the grid?

THINGS TO DO
1. Check and see if trees on one side (north, south, east or west) are the same or greater size >=. We do this because, if even one of them are, it doesn't matter if the others aren't, as long as we're on the same side(N, S, E, W) as we need only one tree to hide the target tree on that side. If the tree is seen from one direction, we don't have to do anymore work at all, the tree is seen and can be added to the total visible trees. This is the importance of a while loop: it allows us to lower the time complexity some.

2. Be sure to not count the trees in the logic of the loops on the outer edge as they are already seen, having no trees surrounding one side of them:
  a. first line and last line of the array
  b. or the beginning and end of each array element array[i][0] and array[i][array[i].length - 1]
  c. these numbers are computed at the arrayLength and arrayHeigth variables and added to the visible variable

3. This is simple matrix traversal with checks to short-circuit when a tree is hidden on one side(north, south, east or west) and then adding to the visible count when a tree is determined as not hidden.

Space and Time Complexity
I'm not storing anything outside the for loops that includes anything other than booleans, as variables are reassigned values, old values are lost, which puts the space complexity to just above O(1). I believe the time complexity is O(n^2) as we are using a nested for loop. It is likely slightly over that as there are also while loops, however, I don't know the precise calculations on that. 

My Considerations
I chose to go from the North and West first in each while loop since that's where the logical for loop usually starts, at least in my experience. This could be modified easily enough if we know that certain values are going to end up on one side or the other.

There is likely a better way to do this, possibly using a method of using two pointers instead of one, however, on my first time through, this was a challenge enough!

It took me around 5.5 hours to complete this through the course of three different sessions.
*/

const testArray = [
  '30373',
  '25512',
  '65332',
  '33549',
  '35390'
  ];

// Extract data
const fs = require('fs');

const input = fs.readFileSync("./input.txt", "utf-8");

const array = input.split("\n");

let arrayWidth = array[0].length * 2;
let arrayHeight = (array.length * 2) - 4;
// visible starts out at 16;
let visible = arrayWidth + arrayHeight;
// set visible variables globally
let northIsVisible;
let southIsVisible;
let westIsVisible;
let eastIsVisible;

for (let i = 1; i < array.length - 1; i++) {
  for (let j = 1; j < array[i].length - 1; j++) {
    let k = 0;
    northIsVisible = true;
    southIsVisible = false;
    // modified for loop for comparing vertical indices
    // for (let k = 0; k < array.length; k++)
    while(k < array.length) {
      // "north" of the j index
      if (k < i && northIsVisible) {
        if (array[k][j] >= array[i][j]) {
          northIsVisible = false;
        } else if (array[k][j] < array[i][j]) {
            northIsVisible = true;
          }
        }
      // "south" of the j index, but only if the target tree is hidden from the north
        if (k > i && !northIsVisible) {
          if (array[k][j] >= array[i][j]) {
            southIsVisible = false;
            k = array.length;
          } else if (array[k][j] < array[i][j]) {
            southIsVisible = true;
          }
        }
      k++;
    }
    let l = 0;
    westIsVisible = true;
    eastIsVisible = false;
    // modified for loop for comparing vertical indices
    // for (let k = 0; k < array.length; k++)
    while(l < array[i].length && !northIsVisible && !southIsVisible) {
      // "west" of the j index, but only if the target tree is hidden from both the north and south
      if (l < j && westIsVisible) {
        if (array[i][l] >= array[i][j]) {
          westIsVisible = false;
        } else if (array[i][l] < array[i][j]) {
            westIsVisible = true;
          }
        }
      // "east" of the j index, but we execute this line of code only if the tree is already hidden from the north, south, and west
        if (l > j && !westIsVisible) {
          if (array[i][l] >= array[i][j]) {
            eastIsVisible = false;
            l = array[i].length;
          } else if (array[i][l] < array[i][j]) {
            eastIsVisible = true;
          }
        }
      l++;
    }
    // we up the visible count only if the target tree was seen from one of the directions
    if (northIsVisible || southIsVisible || westIsVisible || eastIsVisible) {
      visible++;
    }
    console.log(`There are ${visible} trees that can be seen from outside the forest.`);
  }
}

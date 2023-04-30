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



// Extract data
const fs = require('fs');

const input = fs.readFileSync("./input.txt", "utf-8");

const array = input.split("\n");

// let arrayWidth = array[0].length * 2;
// let arrayHeight = (array.length * 2) - 4;
// // visible starts out at 16;
// let visible = arrayWidth + arrayHeight;
// // set visible variables globally
// let northIsVisible;
// let southIsVisible;
// let westIsVisible;
// let eastIsVisible;

// for (let i = 1; i < array.length - 1; i++) {
//   for (let j = 1; j < array[i].length - 1; j++) {
//     let k = 0;
//     northIsVisible = true;
//     southIsVisible = false;
//     // modified for loop for comparing vertical indices
//     // for (let k = 0; k < array.length; k++)
//     while(k < array.length) {
//       // "north" of the j index
//       if (k < i && northIsVisible) {
//         if (array[k][j] >= array[i][j]) {
//           northIsVisible = false;
//         } else if (array[k][j] < array[i][j]) {
//             northIsVisible = true;
//           }
//         }
//       // "south" of the j index, but only if the target tree is hidden from the north
//         if (k > i && !northIsVisible) {
//           if (array[k][j] >= array[i][j]) {
//             southIsVisible = false;
//             k = array.length;
//           } else if (array[k][j] < array[i][j]) {
//             southIsVisible = true;
//           }
//         }
//       k++;
//     }
//     let l = 0;
//     westIsVisible = true;
//     eastIsVisible = false;
//     // modified for loop for comparing vertical indices
//     // for (let k = 0; k < array.length; k++)
//     while(l < array[i].length && !northIsVisible && !southIsVisible) {
//       // "west" of the j index, but only if the target tree is hidden from both the north and south
//       if (l < j && westIsVisible) {
//         if (array[i][l] >= array[i][j]) {
//           westIsVisible = false;
//         } else if (array[i][l] < array[i][j]) {
//             westIsVisible = true;
//           }
//         }
//       // "east" of the j index, but we execute this line of code only if the tree is already hidden from the north, south, and west
//         if (l > j && !westIsVisible) {
//           if (array[i][l] >= array[i][j]) {
//             eastIsVisible = false;
//             l = array[i].length;
//           } else if (array[i][l] < array[i][j]) {
//             eastIsVisible = true;
//           }
//         }
//       l++;
//     }
//     // we up the visible count only if the target tree was seen from one of the directions
//     if (northIsVisible || southIsVisible || westIsVisible || eastIsVisible) {
//       visible++;
//     }
//     console.log(`There are ${visible} trees that can be seen from outside the forest.`);
//   }
// }

/*

--- Part Two ---
Content with the amount of tree cover available, the Elves just need to know the best spot to build their tree house: they would like to be able to see a lot of trees.

To measure the viewing distance from a given tree, look up, down, left, and right from that tree; stop if you reach an edge or at the first tree that is the same height or taller than the tree under consideration. (If a tree is right on the edge, at least one of its viewing distances will be zero.)

The Elves don't care about distant trees taller than those found by the rules above; the proposed tree house has large eaves to keep it dry, so they wouldn't be able to see higher than the tree house anyway.

In the example above, consider the middle 5 in the second row:

30373
25512
65332
33549
35390
Looking up, its view is not blocked; it can see 1 tree (of height 3).
Looking left, its view is blocked immediately; it can see only 1 tree (of height 5, right next to it).
Looking right, its view is not blocked; it can see 2 trees.
Looking down, its view is blocked eventually; it can see 2 trees (one of height 3, then the tree of height 5 that blocks its view).
A tree's scenic score is found by multiplying together its viewing distance in each of the four directions. For this tree, this is 4 (found by multiplying 1 * 1 * 2 * 2).

However, you can do even better: consider the tree of height 5 in the middle of the fourth row:

30373
25512
65332
33549
35390
Looking up, its view is blocked at 2 trees (by another tree with a height of 5).
Looking left, its view is not blocked; it can see 2 trees.
Looking down, its view is also not blocked; it can see 1 tree.
Looking right, its view is blocked at 2 trees (by a massive tree of height 9).
This tree's scenic score is 8 (2 * 2 * 1 * 2); this is the ideal spot for the tree house.

Consider each tree on your map. What is the highest scenic score possible for any tree?


APPROACH
The simplest approach is to look at any one tree and go above and below it in the column [j] and then to go horizontally in the row [i]. We could use a [k] index to start at [i] and move upwards until [i][k] is greater than [i][j]. At that point we can take the difference of [i][j] and [k][j] is by first seeing if k > i (the value of the index that we're starting from or [i][j]), if it isn't, we make this operation i - k and get value A for the column above [i][j]. If k > i, we make the operation k - i; that's value B. We effectively do the same thing for the horizontal measurements but this time using [l] to compare to [j].

THINGS TO DO 

1. Start a nested for loop to go through the entire matrix. Both loops should go through the entirety of numbers, not leaving out any rows or columns.
2. Create a for loop for the comparators, k for the lower column, l for the higher column, m for the left part of the row, and n for the right part of the row.
3. Inside the for loops, we check if the point (indices) we are currently on are lower. If they are, we increment the counter for that particular area; kValue, lValue, mValue, and nValue.
4. We multiple the values and if the result is higher than the particular one we update those values. Keep in mind we still need the [i][j] location.

*/

const testArray = [
  '30373',
  '25512',
  '65332',
  '33549',
  '35390'
  ];
  
let bestTree = {
  iLoc: 0,
  jLoc: 0,
  viewLength: 0,
};

for (let i = 0; i < array.length; i++) {
  console.log("** I = " + i + " **");
  for (let j = 0; j < array[i].length; j++) {
   
    // vertical check for lower indices such as i-1, i-2... up to -1 or out of range
    let vertLowIndexValue = 0;
    if (i != 0) {
      for (let k = i - 1; k >= 0; k--) {
        let vLTreeToCompare = array[k][j];
        console.log(`k: ${k} || j: ${j}`);
        console.log("Tree to compare: " + vLTreeToCompare);
        if (vLTreeToCompare >= array[i][j]) {
          vertLowIndexValue++;
          k = -1;
        } else {
          vertLowIndexValue++;
        } 
      } 
    }
    
    // vertical check for higher indices such as i+1, i+2... up to array.length or out of range
    let vertHighIndexValue = 0;
    if (i < array.length - 2) {
      for (let l = i + 1; l < array.length; l++) {
        let vHTreeToCompare = array[l][j];
        if (vHTreeToCompare >= array[i][j]) {
          vertHighIndexValue++;
          l = array.length + 1;
        } else {
          vertHighIndexValue++;
        }
      }
    }
    
    // horizontal check for lower indices such as j-1, j-2... up to -1 or out of range
    let horLowIndexValue = 0;
    if (j != 0) {
      for (let m = j - 1; m >= 0; m--) {
        let hLTreeToCompare = array[i][m];
        if (hLTreeToCompare >= array[i][j]) {
          horLowIndexValue++;
          m = -1;
        } else {
          horLowIndexValue++;
        }
      }
    }
    
    // horizontal check for higher indices such as j+1, j+2... up to array[i].length + 1 or out of range
    let horHighIndexValue = 0;
    if (j < array[i].length - 2) {
      for (let n = j + 1; n < array[i].length; n++) {
        let hHTreeToCompare = array[i][n];
        if (hHTreeToCompare >= array[i][j]){
          horHighIndexValue++;
          n = array[i].length + 1;
        } else {
          horHighIndexValue++;
        }
      }
    }
    
    console.log(`i: ${i} || j: ${j}`);
    console.log("Prior to removing 0s:")
    console.log(`verHighVal: ${vertHighIndexValue} || vertLowVal: ${vertLowIndexValue} || horHighVal: ${horHighIndexValue} || horLowVal: ${horLowIndexValue}`);
    
    if(vertHighIndexValue == 0) vertHighIndexValue = 1;
    if(vertLowIndexValue == 0) vertLowIndexValue = 1;
    if(horHighIndexValue == 0) horHighIndexValue = 1;
    if(horLowIndexValue == 0) horLowIndexValue = 1;
    
    console.log("After removing 0s:")
    console.log(`verHighVal: ${vertHighIndexValue} || vertLowVal: ${vertLowIndexValue} || horHighVal: ${horHighIndexValue} || horLowVal: ${horLowIndexValue}`);
    
    let result = vertHighIndexValue * vertLowIndexValue * horHighIndexValue * horLowIndexValue;
    console.log("Result: " + result);
    console.log(" ");
    
    if (result >= bestTree.viewLength) {
      bestTree.iLoc = i;
      bestTree.jLoc = j;
      bestTree.viewLength = result;
    }
    
  }
}

console.log(bestTree);

// all but horLowVal is coming up one too many or +1
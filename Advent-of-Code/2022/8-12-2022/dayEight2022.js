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
*/

// Extract data
const fs = require('fs');

const input = fs.readFileSync("./input.txt", "utf-8");

const inputToArray = input.split("\n");

// console.log(inputToArray.length);

// THINGS TO DO
// change each string in the array to an array of numbers? '123456' to [1,2,3,4,5,6], etc.? Maybe not, strings can be iterated over, can they be compared correctly?
// const line = '123456'; 
// console.log(line.length); // length works
// console.log('1' < '5'); //looks like we can as this is true
// Check and see if trees on either side are the same or greater size >=, if all of them are, then the tree isn't seen on that side
// be sure to not count the trees on the outer edge as they are already seen, having no trees surrounding one side of them:
// first line, 0th index at the beginning on the total array or beginning of each array
// last line, or n-1th index at the end on the total array or the end of each array/string

const testArray = [
  '110120112111001131321041300301301303441234124551121322251330313143000402010402222102132100122022010',
  '102022211221313002214040003422200133214443443344513144525425414312301403121303234303302002320112112',
  '210010213122220022044234043143210343153522554535142243154212251531131301322100210101210220021120002',
  '102121023302220201244401343001244152321314335555225552452235435142424222400201243131033233132300012',
  '000111230312012203122030310412244414125415343124153241254535545413214132223113434142202210123003200',
  '200000202333110340220332420035514312151535342225553245343445434132251555330340100104010231010021300B'
];

const array = [
  '30373',
  '25512',
  '65332',
  '33549',
  '35390'
  ];

// for(let i = 1; i < array.length - 1; i++) {
//   for(let j = 1; j < array[i].length - 1; j++) {
//     // in the same xAxis, one to the left so as to shortcircuit
//     if(array[i][j] > array[i][j-1]) {
//       console.log(`${array[i][j]} is taller than ${array[i][j - 1]}: this tree is seen!`)
//     } else {
//       console.log(`${array[i][j]} is shorter than or the same height as ${array[i][j - 1]}: this tree is hidden!`)
//     }
//   }
// }

let visible = 0;

for (let i = 1; i < array.length - 1; i++) {
  for (let j = 1; j < array[i].length - 1; j++) {
    for (let k = 0; k < array[i].length; k++) {
      // vertical check
      if (array[k][j] <= array[i][j] && k !== i) {
        console.log(`${array[k][j]} is smaller or equal to ${array[i][j]}`)
        visible++;
        break;
      } else {
        console.log(`${array[k][j]} is taller than ${array[i][j]}`)
      }
    }
      // for (let l = 0; l < array[i].length; l++) {
      //   // horizontal check
      //   if (array[i][l] <= array[i][j] && l !== j) {
      //     visible++;
      //   }
      //   break;
      // }
  }
}
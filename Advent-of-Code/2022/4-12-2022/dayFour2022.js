/*
--- Day 4: Camp Cleanup ---
Space needs to be cleared before the last supplies can be unloaded from the ships, and so several Elves have been assigned the job of cleaning up sections of the camp. Every section has a unique ID number, and each Elf is assigned a range of section IDs.

However, as some of the Elves compare their section assignments with each other, they've noticed that many of the assignments overlap. To try to quickly find overlaps and reduce duplicated effort, the Elves pair up and make a big list of the section assignments for each pair (your puzzle input).

For example, consider the following list of section assignment pairs:

2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
For the first few pairs, this list means:

Within the first pair of Elves, the first Elf was assigned sections 2-4 (sections 2, 3, and 4), while the second Elf was assigned sections 6-8 (sections 6, 7, 8).
The Elves in the second pair were each assigned two sections.
The Elves in the third pair were each assigned three sections: one got sections 5, 6, and 7, while the other also got 7, plus 8 and 9.
This example list uses single-digit section IDs to make it easier to draw; your actual list might contain larger numbers. Visually, these pairs of section assignments look like this:

.234.....  2-4
.....678.  6-8

.23......  2-3
...45....  4-5

....567..  5-7
......789  7-9

.2345678.  2-8
..34567..  3-7

.....6...  6-6
...456...  4-6

.23456...  2-6
...45678.  4-8
Some of the pairs have noticed that one of their assignments fully contains the other. For example, 2-8 fully contains 3-7, and 6-6 is fully contained by 4-6. In pairs where one assignment fully contains the other, one Elf in the pair would be exclusively cleaning sections their partner will already be cleaning, so these seem like the most in need of reconsideration. In this example, there are 2 such pairs.

In how many assignment pairs does one range fully contain the other?


*****METHODOLOGY*****

1. Translate the input into two arrays using 
*/


//**********************************
// EXTRACTING DATA
const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8')

const inputToArray = input.split("\n")
//**********************************


function assignmentOverlap (arr) {
  let total = 0
  
  for (let i = 0; i < arr.length; i++) {
    let groupAssignment = arr[i]
    // find index of comma so as to separate the assignments
    let findComma = groupAssignment.indexOf(",")
    // use comma location to separate 1st assignment from 2nd using slice
    let firstAssignment = groupAssignment.slice(0, findComma)
    // use dash to separate 1st number in range from the 2nd
    let findDash = firstAssignment.indexOf("-")
    // separation is made using slice
    let firstAssign1stEl = firstAssignment.slice(0, findDash)
    // turn the string into a number for later use
    let firstAssign1stNum = parseInt(firstAssign1stEl)
    // use dash to separate 2nd number in range from the first using slice
    // we have to +1 due to the need to skip the dash, that isn't a part of a number
    let firstAssign2ndEl = firstAssignment.slice(findDash + 1)
    // turn it into a number using parseInt, no second arg needed for radix 10
    let firstAssign2ndNum = parseInt(firstAssign2ndEl)
    // separate using slice with the comma location to get 2nd assignment
    let secondAssignment = groupAssignment.slice(findComma + 1)
    // use dash to separate 1st number in range from the 2nd
    let findDash2 = secondAssignment.indexOf("-")
    // separate using slice for the 1st number in the range
    let secondAssign1stEl = secondAssignment.slice(0, findDash2)
    // turn it into a number
    let secondAssign1stNum = parseInt(secondAssign1stEl)
    // separate using slice for the 2nd number in the range
    let secondAssign2ndEl = secondAssignment.slice(findDash2 + 1)
    // turn it into a number
    let secondAssign2ndNum = parseInt(secondAssign2ndEl)
    
    if(firstAssign1stNum <= secondAssign1stNum && firstAssign2ndNum >= secondAssign2ndNum) {
      total += 1
    }
    
    if(secondAssign1stNum <= firstAssign1stNum && secondAssign2ndNum >= firstAssign2ndNum) {
      total += 1
    }
  }
  return total
}

console.log(assignmentOverlap(inputToArray)) 

//console.log(assignmentOverlap(firstFiveOfInputArray))

// console.log(assignmentOverlap(inputToArray))
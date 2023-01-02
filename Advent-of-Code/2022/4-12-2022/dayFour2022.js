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



const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8')

const inputToArray = input.split("\n")

const firstFiveOfInputArray = inputToArray.splice(0,5)

// const lines = input.split('\n') // this creates an array of strings

// console.log(firstFiveOfInputArray)

/*

20-45,13-44   ==> neither does NOT fully contain the other
7-8,8-28      ==> neither does NOT fully contain the other
3-39,14-97    ==> neither does NOT fully contain the other
35-99,35-98   ==> the first FULLY contains the other
18-49,17-19   ==> neither does NOT fully contain the other

output of this input should equal '1'
*/


function assignmentOverlap (arr) {
  
  for (let i = 0; i < arr.length; i++) {
    let groupAssignment = arr[i]
    //console.log(groupAssignment)
    let findComma = groupAssignment.indexOf(",")
    //console.log(`idx of comma: ${findComma}`)
    
    let firstAssignment = groupAssignment.slice(0, findComma)
    //console.log(`1st assignment: ${firstAssignment}`)
    let findDash = firstAssignment.indexOf("-")
    //console.log(`1st dash idx: ${findDash}`)
    let firstAssignment1stElToArray = firstAssignment.slice(0, findDash)
    console.log(`1st assignment El to array: ${firstAssignment1stElToArray}`)
    let firstAssignment2ndElToArray = firstAssignment.slice(findDash + 1)
    console.log(`2nd assignment El to array: ${firstAssignment2ndElToArray}`)
    
    
    let secondAssignment = groupAssignment.slice(findComma + 1)
    //console.log(`2nd assignment: ${secondAssignment}`)
    let findDash2 = secondAssignment.indexOf("-")
    //console.log(`2nd dash idx: ${findDash2}`)
    let secondAssignment1stElToArray = secondAssignment.slice(0, findDash)
    console.log(`2nd assignment El to array: ${typeof secondAssignment1stElToArray}`)
    let secondAssignment2ndElToArray = secondAssignment.slice(findDash2 + 1)
    console.log(`1st assignment El to array: ${secondAssignment2ndElToArray}`)
  }
}

assignmentOverlap(firstFiveOfInputArray)
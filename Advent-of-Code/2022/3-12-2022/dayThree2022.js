/*
--- Day 3: Rucksack Reorganization ---
One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
The fourth rucksack's compartments only share item type v.
The fifth rucksack's compartments only share item type t.
The sixth rucksack's compartments only share item type s.
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
*/


/*
  METHODOLOGY
  
  1. Since there's two compartments, lets cut the str into two using str.length and then slice it into two pieces: arr1, arr2.
  
  2. Once we have the two pieces, we can iterate through the arr1, storing the first time a letter shows up in the string into a hashmap. We only do this once because the data has duplicates of the shared letter.

  3. Then we iterate through arr2 and, for each element, we take away one instance of the element from the hasmap. This should leave us with only one key that has a value of 0.
  
  4. We can push this to another array, iterate over it, and, by using the guide of values given, we can give each element a value and add that value to the total. Return total.
  
*/

// SETUP DATA - get it, put it into an array

const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8')

//const lines = input.split('\n') // this creates an array of strings

const inputToArray = input.split("\n")
// console.log(inputToArray)
// console.log(Array.isArray(inputToArray))

// test data before using the 300 lines of actual input 
const lines = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  ]
  
  
function sumOfPriorities(arr){
  
  let total = 0
  
  for (let i = 0; i < arr.length; i++) {
  
    // cut the string into two pieces
    let mid = Math.floor(arr[i].length / 2)
    let left = arr[i].slice(0, mid)
    let right = arr[i].slice(mid)
    let leftArr = left.split("")
    let rightArr = right.split("")
  
    // make a hash map to store the keys for the letter and the value of 1 if letter is present
    let hashTable = {}
    // iterate through left arr and store to hash table
    for(let j = 0; j < leftArr.length; j++){
      let leftChar = leftArr[j]
      if(!hashTable[leftChar]) hashTable[leftChar] = 1
    }
    //iterate through right arr and subtract values from hash table, this should leave one with a value of 0
    for(let k = 0; k < rightArr.length; k++){
      let rightChar = rightArr[k]
      if(hashTable[rightChar]) hashTable[rightChar] -= 1
    }
    // find the key in the object that has a 0 zero value and store it in letter
    let letter = Object.keys(hashTable).find(key => hashTable[key] === 0)
    // get the value of the letter in the utf-16 code with charCodeAt method
    let letterValue = letter.charCodeAt(0)
    // we have to check if the letter is uppercase or lowercase using the utf-16 character table
    // if it is equal to or above 97, it is lowercase and has a -96 adjustment to its value
    if(letterValue >= 97){
      total += letterValue - 96
    } 
    // if it is equal to or less than 90, it is uppercase and has a -38 adjustment to its value
    if(letterValue <= 90){
      total += letterValue - 38
    }
  }
  return total
} 

// console.log(sumOfPriorities(lines)) // => 96
// console.log(sumOfPriorities(inputToArray))

/*
--- Part Two ---
As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
And the second group's rucksacks are the next three lines:

wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?
*/

/*
  METHODOLOGY
  
  1. First, we need to cut the array into smaller arrays of lengths of three. Use array.slice(start,end) the end arg is exclusive, meaning it will not be included in the subarray
  
  2. Use a for loop to loop through the entire input as such:
      for(let i = 0; i < input.length; i+3){
        let elfGroupArr = input.slice(i, (i + 3))
      }
      
  3. Use another for loop similar to the one in the first section where we use k as such:
      for(let j = 0; j < elfGroupArr.length; j++){
        let char = elfGroupArr[j]
        if(!hashmap[char]) hashmap[char] = 1
        if(hashmap[char]) hashmap[char] += 1
      }
      This uses a hashmap to store the letters in each elfGroupArr. We would have to initialize the hashmap in a global instance within the function. Since there is only one letter in common amongst the group of elves, as noted in their elfGroupArr, whichever key has a value of 3, that is the group's badge. We can use this letter in the next step.
      
  4. The hashmap should be full at this time and we can now go and grab the letter that has a value of 3 inside by using the following code:
      let letter = Object.keys(hashTable).find(key => hashTable[key] === 0)
     This was used in the first part of today's problem, so we can just follow the rest of the code from the first part, but I will describe what it does as I go along with the methodology.
  
  5. Get the value of the letter in the utf-16 code with charCodeAt method
    let letterValue = letter.charCodeAt(0)
  
  6. We adjust the score due to the difference between the value set in this problem vs the value set in the utf-16 character table. We then add to the total the translated value of the character.
    We have to check if the letter is uppercase or lowercase using the utf-16 character table
    If it is equal to or above 97, it is lowercase and has a -96 adjustment to its value
    if(letterValue >= 97){
      total += letterValue - 96
    } 
    If it is equal to or less than 90, it is uppercase and has a -38 adjustment to its value
    if(letterValue <= 90){
      total += letterValue - 38
    }
  }
  return total
  
*/


function getElfGroupBadgeTotal (arr) {
  let total = 0
  // go through the entire input array and make smaller arrays to represent the group of elves
  for (let i = 0; i < arr.length; i + 3) {
    let elfGroupArr = arr.slice(i, i + 3)
    // go through the elfGroup, an array of length 3, so that we can iterate through each string
    for (let j = 0; j < elfGroupArr.length; j++) {
      // initialize an empty hashmap
      let elfHashmap = {}
      let elfBag = elfGroupArr[j]
      for(let k = 0; k < elfBag.length; k++) {
        let char = elfBag[k]
        if (!elfHashmap[char]) elfHashmap[char] = 1
        if (elfHashmap[char]) elfHashmap[char] += 1
      }
      console.log(elfHashmap)
      let letter = Object.keys(elfHashmap).find(key => elfHashmap[key] === 3)
      let letterValue = letter.charCodeAt(0)
      if (letterValue >= 97) {
        total += letterValue - 96
      } 
      if (letterValue <= 90) {
        total += letterValue - 38
      }
    }
  }
  return total
}

let testArr = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
  ]
  
  console.log(getElfGroupBadgeTotal(testArr))
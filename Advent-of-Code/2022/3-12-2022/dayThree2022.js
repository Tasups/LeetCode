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
console.log(inputToArray)
console.log(Array.isArray(inputToArray))

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
    //iterate through right arr and subtract values from hash table, this should leave one with a valuof 0
    for(let k = 0; k < rightArr.length; k++){
      let rightChar = rightArr[k]
      if(hashTable[rightChar]) hashTable[rightChar] -= 1
    }
    // find the key in the object that has a 0 zero value and store it in letter
    let letter = Object.keys(hashTable).find(key => hashTable[key] === 0)
    // get the value of the letter in the utf-16 code with charCodeAt method
    let letterValue = letter.charCodeAt(0)
    // we have to check if the letter is uppercase or lowercase
    // if it is equal to or above 97, it is lowercase and has a -70 adjustment to its value
    if(letterValue >= 97){
      total += letterValue - 96
    } 
    // if it is equal to or less than 90, it is uppercase and has a -64 adjustment to its value
    if(letterValue <= 90){
      total += letterValue - 38
    }
  }
  return total
} 

console.log(sumOfPriorities(lines)) // => 96
console.log(sumOfPriorities(inputToArray))



// this should work to find the key

// function getObjKey(obj, value) {
//   return Object.keys(obj).find(key => obj[key] === value);
// }

// const obj = {country: 'Chile', city: 'Santiago'};

// console.log(getObjKey(obj, 'Chile')); // 👉️ "country"

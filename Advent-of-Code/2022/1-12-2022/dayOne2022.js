const fs = require('fs')

// Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows.

// To supply enough magical energy, the expedition needs to retrieve a minimum of fifty stars by December 25th. Although the Elves assure you that the grove has plenty of fruit, you decide to grab any fruit you see along the way, just in case.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input).

// The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.

// For example, suppose the Elves finish writing their items' Calories and end up with the following list:

// 1000
// 2000
// 3000

// 4000

// 5000
// 6000

// 7000
// 8000
// 9000

// 10000
// This list represents the Calories of the food carried by five Elves:

// The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
// The second Elf is carrying one food item with 4000 Calories.
// The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
// The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
// The fifth Elf is carrying one food item with 10000 Calories.
// In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

//***********************************************************************************************

// MY SOLUTION

/* 
We want to make sure to get the input into a form that we can use. Finding the right method to do 
this shouldn't be too hard, but it is essential. We essentially want to use the form of the input
translated into a string, as this is actually one of the easiest types to translate into other forms, 
such as an array, so that we can use the type(string) and keep the empty spaces as a way to separate
the information into each elves' inventory.

2nd - transform string into 
*/

// first we want to grab the text file and put it into a string
const input = fs.readFileSync('./input.txt', 'utf-8')

// second we want to make it into either substrings

// const grouped = input.split("\n\n")

// const groupSums = grouped.map((group) => {

//   const numbers = group.split("\n").map((s) => parseInt(s, 10))

//   return numbers.reduce((a, b) => a + b, 0)
// })

// const max = Math.max(...groupSums)

// console.log(max)

const eachElf = input.split("\n\n")
  let elfArray = []
  const groupSums = eachElf.map((group) => {
  const numbers = group.split("\n").map((s) => parseInt(s, 10))
  // console.log(Array.isArray(numbers)) true, it is an array
  const thing = numbers.reduce((a, b) => a + b, 0)
  elfArray.push(thing)
})

const sortElfArray = elfArray

//console.log(`this is one line 83: ${elfArray}`)

const max = Math.max(...groupSums)

//console.log(max)

function merge(arr1, arr2) {
  let result = []
  let i = 0
  let j = 0
  while(i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while(j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

const sortedElfArray = mergeSort(elfArray)
const highToLow = sortedElfArray.reverse()
const highest = highToLow[0]
const secondHighest = highToLow[1]
const thirdHighest = highToLow[2]
const totalResult = highest + secondHighest + thirdHighest
console.log(totalResult)
const result = `The total number of calories of the top three elves is ${totalResult}`
console.log(result)
//console.log(highToLow)
console.log(`this is one line 123: ${mergeSort(elfArray)}`)


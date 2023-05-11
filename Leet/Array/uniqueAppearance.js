/*

1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
    let container = {};
    
    for (let i = 0; i < arr.length; i++) {
      if (container[arr[i]] == null) {
        container[arr[i]] = 1;
      } else {
        container[arr[i]]++;
      }
    }
    
  let isUnique = Object.values(container);
  
  let result = true;
  
    for (let j = 0; j < isUnique.length; j++) {
      for (let k = 0; k < isUnique.length; k++) {
        if (k == j) continue;
        else if (isUnique[k] == isUnique[j]) result = false;
        else if (isUnique[k] !== isUnique[j]) continue;
      }
    }
    
    return result;
    
};

// let firstArr = [1,2,2,1,1,3]
// console.log(uniqueOccurrences(firstArr)) // -> Output: true

// let secondArr = [1,2]
// console.log(uniqueOccurrences(secondArr)) // -> Output: false

// let thirdArr = [-3,0,1,-3,1,1,1,-3,10,0]
// console.log(uniqueOccurrences(thirdArr)) // -> Output: true

let fourthArr = [4,6,4,-8,0,-7,5,7]
console.log(uniqueOccurrences(fourthArr))
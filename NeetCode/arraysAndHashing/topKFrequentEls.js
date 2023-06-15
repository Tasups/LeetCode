// /*
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Find the top k numbers in an array. So, k=1 would be the most frequent whereas k=3 would be the top 3 highest frequent numbers
// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
// */

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */

function areThereDuplicates() {

  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]]
      ? (collection[arguments[val]] += 1)
      : (collection[arguments[val]] = 1);
  }
  for (let key in collection) {
    if (collection[key] > 1) {
      console.log(`There are duplicates in the arguments provided!`)
      return true
    }
  }
  console.log(`There are not duplicates in the arguments provided!`)
  return false
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

var topKFrequent = function(nums, k) {
    if (nums.length <= 0) return undefined;
    let container = {};
    for (let i = 0; i < nums.length; i++) {
        if (!container[nums[i]]) container[nums[i]] = 1;
        else if (container[nums[i]]) container[nums[i]]++;
    }
    
    let containerEntries = Object.entries(container);
    let containArray = [];
    for (let j = 0; j < containerEntries.length; j++){
        
    } 
    
    console.log(container);
    console.log(containerEntries);
};


// // Example 1:
// // Input: nums = [1,1,1,2,2,3], k = 2
// // Output: [1,2]
// topKFrequent([1,1,1,2,2,3], 2);

// // Example 2:
// // Input: nums = [1], k = 1
// // Output: [1]
// topKFrequent([1,], 1);
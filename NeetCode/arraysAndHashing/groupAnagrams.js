/**
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

// const groupAnagrams = function (strs) {
//     let resultArr = [];
//     let visited = [];
//     for (let i = 0; i < strs.length; i++) {
//         let storeArr = [strs[i]];
//         let sortedWord = strs[i].split('').sort().join('');
//         for (let j = 0; j < strs.length; j++) {
//             if (i !== j && strs[i].length === strs[j].length) {
//                 let sortedComp = strs[j].split('').sort().join('');
//                 if (sortedWord === sortedComp && !visited.includes(sortedComp)) {
//                     storeArr.push(strs[j]);
//                 }
//             }
//         }
//         if (!visited.includes(sortedWord)) resultArr.push(storeArr);
//         visited.push(sortedWord);
//     }
//     console.log(resultArr);
//     return resultArr;
// };
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function (words, map = new Map()) {
    if (!words.length) return [];
    groupWords(words, map);
    console.log(map.values());
    return [...map.values()];
}

const groupWords = (words, map) => {
  for (const original of words) {
    const sorted = reorder(original);
    const values = map.get(sorted) || [];

    values.push(original);
    map.set(sorted, values);
  }
};

const reorder = (str) => {
  return str.split("").sort().join("");
};

// Example 1:
const strs1 = ["eat","tea","tan","ate","nat","bat"]
groupAnagrams(strs1); // => [["bat"],["nat","tan"],["ate","eat","tea"]]

//Example 2:
const strs2 = [""]
groupAnagrams(strs2); // => [[""]]

// Example 3:
const strs3 = ["a"]
groupAnagrams(strs3); // =>[["a"]]

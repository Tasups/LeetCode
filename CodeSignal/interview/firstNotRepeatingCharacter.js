/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
solution(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.
*/

// const timer = ms => new Promise(res => setTimeout(res, ms))

// async function solution(s) {
//   let container = {};
//   for(let i = 0; i < s.length; i++) {
//     await timer(1);
//     if (!container[s[i]]) {
//       container[s[i]] = {
//         qty: 1,
//         date: Date().now
//       }
//     } else if (container[s[i]]) {
//       container[s[i]].qty++;
//     }
//   }
//   return container;
// }


function solution(s) {
  let container = {};
  for(let i = 0; i < s.length; i++) {
      if (!container[s[i]]) {
        container[s[i]] = 1;
      } else if (container[s[i]]) {
        container[s[i]]++;
      }
  }
  
  let letter = "";
  
  for (const [key, value] of Object.entries(container)) {
    if (value === 1) {
      letter = key;
      break;
    } 
  }
  
  if (letter === "") {
    return '_';
  }
  
  return letter;
  
}

let s1 = "abacabad";
console.log(solution(s1)); //the output should be solution(s) = 'c'.

let s2 = "azbacabayabacaba";
console.log(solution(s2)); // the output should be solution(s) = '_'. as there isn't a non-repeating character.


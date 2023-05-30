/**
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.
*/

// function solution(inputArray) {
//     let result = Number.MIN_VALUE;
//     for (let i = 0; i < inputArray.length; i++) {
//         const firstNum = inputArray[i];
//         let secondNum = 0;
//         if (i >= inputArray.length) {
//             return;
//         } else {
//             secondNum = inputArray[i + 1];
//         }
//         const product = firstNum * secondNum;
//         if (product > result) {
//             result = product;
//         }
//     }
//     console.log(result)
//     return result;
// }

// solution([3, 6, -2, -5, 7, 3]);
// solution([-23, 4, -3, 8, -12]);
 /**
  * Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.



Example

For n = 2, the output should be
solution(n) = 5;
For n = 3, the output should be
solution(n) = 13.
Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer n

Guaranteed constraints:
1 ≤ n < 104.

[output] integer

The area of the n-interesting polygon.
  * 
  * @param {*} n 
  * @returns 
  * 
  */
function solution(n) {
//  let result = 1;
//    let recursiveAdditive = (n - 2)
//   if (n >= 3) {
//     result = 4 * (n - 2) + 4 * (n - 1) + 1;
//   } else if (n === 2) {
//     result = 4;
//   } else if (n === 1) {
//     result = 1;
//   }
    
    

// return result;
}

function recurAdd(x) {
    let count = x;
    let result = 0;
    console.log(count)
    while (count - 2 >= 3) {
        console.log("result: " + result)
        result = result + (4 * (x - 2));
        console.log("count: " + count)
        count--;
    }
    return result;
}
    
// console.log(recurAdd(2)); // -> 0
console.log(recurAdd(3)); // -> 4
console.log(recurAdd(4)); // -> 12
console.log(recurAdd(5)); // -> 24
console.log(recurAdd(6)); // -> 40

// console.log(solution(1)); // -> 1
// console.log(solution(2)); // -> 5
// console.log(solution(3)); // -> 13
// console.log(solution(4)); // -> 25
// console.log(solution(5)); // -> 41

// let arms = 4(n - 1);
// let center = 1;
// let webbing = 
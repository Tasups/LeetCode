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


// function solution(n) {
//     let result = 0;
//     if (n >= 3) {
//         let cross = 4 * (n - 1) + 1;
//         let count = n;
//         let total = 0;
//         while(count >= 3) {
//             console.log("count: " + count);
//             let web = 4 * (count - 2);
//             console.log("web: " + web);
//             total = total + web;
//             console.log("total: " + total);
//             count--;
//         }
//         result += total + cross;
//     } else if (n === 2) {
//         result = 5;
//     } else if (n === 1) {
//         result = 1;
//     }
    
//     return result
// }

// console.log(solution(1)); // 1
// console.log(solution(2)); // 5
// console.log(solution(3)); // 13
// console.log(solution(4)); // 25
// console.log(solution(5)); // 41

/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
*/

function solution (statues) {
    const sortedStatues = statues.sort();
    const revSortStatues = sortedStatues.reverse();
    let toFill = 0;
    for (let i = 0; i < revSortStatues.length; i++) {
        if (revSortStatues[i + 1] < revSortStatues.length) {
            toFill += (revSortStatues[i] - revSortStatues[i + 1]) - 1;
        }
    }
    console.log(toFill);
    return toFill;
}


let statOne = [6, 2, 3, 8] // => 3.
solution(statOne);
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

// this solution is close, consider logging the elements to figure out what is going on
// function solution (statues) {
//     let toFill = 0;
//     if (statues.length === 1) {
//         console.log(toFill);
//         return toFill;
//     }
//     const sortedStatues = statues.sort(function(a, b){return a - b});
//     const revSortStatues = sortedStatues.reverse();
//     //console.log(revSortStatues)
//     for (let i = 0; i < revSortStatues.length - 1; i++) {
//         //console.log("i: " + i)
//         let result = revSortStatues[i] - revSortStatues[i + 1] - 1;
//         //console.log("result: " + revSortStatues[i] + " - " + revSortStatues[i + 1] + " - 1 = " + result);
//         toFill += result;
//     }
//     console.log(toFill);
//     return toFill;
// }


// let statOne = [6, 2, 3, 8] 
// solution(statOne); // => 3.
// let statTwo = [8, 1, 0, 4, 7];
// solution(statTwo); // => 4.
// let statThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //*********
// solution(statThree); // => 1.
// let statFour = [10];
// solution(statFour); // => 0.
// let statFive = [4, 2, 7, 18]; //**********
// solution(statFive); // => 13.
// let statSix = [4, 2, 9];
// solution(statSix); // => 5.

/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/

function solution(sequence) {
    let array = sequence;
    let count = 0;
    if (array[0] >= array[1]) {
        array = array.slice(1);
        count++;
    }
    for(let i = 0; i < array.length - 1; i++) {
        if (count > 1) return false;
        if (array[i] >= array[i + 1] && count > 1) {
            return false;
        } else if (array[i] >= array[i + 1]) {
            count++;
        }
    }
    return true;
}

console.log(solution([1, 3, 2]));

console.log(solution([1, 2, 1, 2]));
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

function solution(inputArray) {
    let result = Number.MIN_VALUE;
    for (let i = 0; i < inputArray.length; i++) {
        const firstNum = inputArray[i];
        let secondNum = 0;
        if (i >= inputArray.length) {
            return;
        } else {
            secondNum = inputArray[i + 1];
        }
        const product = firstNum * secondNum;
        if (product > result) {
            result = product;
        }
    }
    console.log(result)
    return result;
}

solution([3, 6, -2, -5, 7, 3]);
solution([-23, 4, -3, 8, -12]);
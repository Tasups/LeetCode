/*

54. Spiral Matrix

Amazon
Microsoft
Apple

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 
Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

ToDo:

1. Likely need to setup some directional switcher to represent left to right (LtoR), right to left (RtoL), up to down (UtoD), and down to up (DtoU). This could be a four digit number, 0 - 3 or 1 - 4, and we could assign each number with a direction.
2. We need something to tell index tracker, where the iteration is at, when it has gotten to the end of the array, whether that be the external or internal. This could be defined by bounds such as upper, lower, left, right. When we get to the end of a certain array on our first iteration, let's say the outer, we then set the lower bound to equal arr.length - 1 to array.length - 2. The subtrahend, the amount we subtract from the whole array length, should likely be made dynamic and incremented as we move along each direction.
3. Effectively, do each of the above and when the bound is met, change directions, increment or decrement the bounds, based on whether we are at the end of an array (array.length - 1 or array[array.length - 1 - i].length), in which case we would decrement or at the beginning (array[i] or array.length) in which we'd increment.

*/

function spiralMatrix(mat) {
  
  // bounds
  let top = 0;
  let bottom = mat.length - 1;
  let left = 0; 
  let right = mat[0].length - 1;
  
  // 0 = left to right; 1 = top to bottom; 2 = right to left; 3 = bottom to top
  let direction = 0;
  // storage array
  let resultArr = [];
  
  while(top <= bottom && left <= right) {
    // moving left to right
    if (direction == 0) {
      for (let i = left; i <= right; i++) {
        console.log(`left to right | top: ${top} | i: ${i}\n`);
        resultArr.push(mat[top][i]);
      }
      top++;
      direction++;
    } else if (direction == 1) {
      for (let i = top; i <= bottom; i++) {
        
        console.log(`top to bottom | i: ${i} | right: ${right}\n`);
        resultArr.push(mat[i][right]);
      }
      right--;
      direction++;
    } else if (direction == 2) {
      for (let i = right; i >= left; i--) {
        console.log(`right to left | bottom: ${bottom} | i: ${i}\n`);
        resultArr.push(mat[bottom][i])
      }
      bottom--;
      direction++;
    } else if (direction == 3) {
      for (let i = bottom; i >= top; i--) {
        console.log(`bottom to top | i: ${i} | left: ${left}\n`);
        resultArr.push(mat[i][left]);
      }
      left++;
      direction = 0;
    }
  }
  
  console.log(resultArr);
  return resultArr;
  
}

// TEST CASES

let firstMatrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
  ];
  
spiralMatrix(firstMatrix); // -> Output: [1,2,3,6,9,8,7,4,5];


let secondMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
  ];
  
spiralMatrix(secondMatrix); // -> Output: [1,2,3,4,8,12,11,10,9,5,6,7]
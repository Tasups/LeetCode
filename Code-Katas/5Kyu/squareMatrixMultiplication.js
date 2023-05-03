/*
Write a function that accepts two square (NxN) matrices (two dimensional arrays), and returns the product of the two. Only square matrices will be given.

How to multiply two square matrices:
We are given two matrices, A and B, of size 2x2 (note: tests are not limited to 2x2). Matrix C, the solution, will be equal to the product of A and B. To fill in cell [0][0] of matrix C, you need to compute: A[0][0] * B[0][0] + A[0][1] * B[1][0].
More general: To fill in cell [n][m] of matrix C, you need to first multiply the elements in the nth row of matrix A by the elements in the mth column of matrix B, then take the sum of all those products. This will give you the value for cell [m][n] in matrix C.

Example
  A         B          C
|1 2|  x  |3 2|  =  | 5 4|
|3 2|     |1 1|     |11 8|
Detailed calculation:

C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] = 1*3 + 2*1 =  5
C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] = 1*2 + 2*1 =  4
C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] = 3*3 + 2*1 = 11
C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] = 3*2 + 2*1 =  8
Link to Wikipedia explaining matrix multiplication (look at the square matrix example): http://en.wikipedia.org/wiki/Matrix_multiplication

This is a bad link
A more visual explanation of matrix multiplication: http://matrixmultiplication.xyz

Here's a better one: https://youtu.be/2spTnAiQg4M

* MY NOTES *********************************************************************

There were somethings missing in the above, I did some research on matrix multiplication and found information that, while helpful, may not be needed here as we will be working only with square matrices. However, working through a few examples on paper actually made this process easier to understand. 

THINGS TO DO: 

1. First thing is that we will start with a checker to make sure that both nested arrays, or matrices, aren't empty. Simple enough.
2. Next thing is to measure out how big the resulting product matrix will be. This is easy since we should be getting square matrices as the resulting matrix would be the same size. So, starting an empty array and then pushing an empty array into that array for the length of the first matrix should suffice. We will use a for loop such as:
    for (i = 0; i < arrayA.length; i++) {
      arrayC.push([]);
    }
3. Use a nested for loop. We will start with arrayA and look at its first row and then go into arrayB and iterate over it's columns such as:
    for (i = 0; i < arrayA.length; i++) {
      for (j = 0; j < arrayB[0].length; j++) {
        
      }
    }
4. Now that we are iterating correctly, we need to multiply each item in arrayA[0] to each item in each row in arrayB at the zeroth index and then increment up until we get to the length of arrayB[0] row. 

*/


  
function matrixMultiplication(arrayA, arrayB) {
  // initialize array C, this will be the product matrix' shell
  let arrayC = [];
    
  // create the inner arrays of the product matrix, this will hold the actual values of the matrix. We have to use arrayA[0].length due to the fact that when multiplying matrices, you have to make sure that the first array has a row value equal to that of the column value of the second matrix. Thus, we know that if the matrices are validated to be able to be multiplied, the length of the first array in the first array shell, or matrix, will be the exact number of rows needed for the product matrix or array of arrays.
  for (let i = 0; i < arrayA[0].length; i++) {
    arrayC.push([]);
  }
  
  // initialize the index value
  let indexTotal = 0;
  
  // iterate through the outer array
  for (let i = 0; i < arrayA.length; i++) {
    // iterate through the inner arrays. This will result in out of bounds or bad values and throw an error unless you delimit the bounds with something like using the modulus operator, which is used here to allow a value of arrayA[0].length * arrayB.length; Why those particular values? 
    for (let j = 0; j < arrayA[0].length * arrayB.length; j++) {
      // we multiply the appropriate values in the arrays
      let product = arrayA[i][j % arrayB.length] * arrayB[j % arrayB.length][Math.floor(j / arrayB[0].length)];
      // we increment the total 
      indexTotal += product;
      // now, once we get to the last element in the arrayB iteration at a particular i index, we push that total to the product array, arrayC, and reset the total
      if (j % arrayB.length == (arrayB.length - 1)) {
        arrayC[i].push(indexTotal);
        indexTotal = 0;
      }
    }
  }

console.log(arrayC);
}


// Test Arrays

// TEST ONE
let arrayA = [
  [1, 5, 9],
  [8, 3, 2],
  [7, 4, 6],
  ];
  
let arrayB = [
  [9, 4, 1],
  [7, 2, 6],
  [3, 8, 5],
  ];
  

matrixMultiplication(arrayA, arrayB);
// this should equal [ [ 71, 86, 76 ], [ 99, 54, 36 ], [ 109, 84, 61 ] ]

// TEST TWO
let testArrayOne = [
  [1, 2], 
  [3, 2]
  ]; 

let testArrayTwo = [
  [3, 2], 
  [1, 1]
  ];

matrixMultiplication(testArrayOne, testArrayTwo);
// this should equal [ [5, 4], [11, 8] ]

// TEST THREE
let arrayONE = [
  [1, 2, 3, 4], 
  [5, 6, 7, 8],
  [9, 0, 1, 2],
  [3, 4, 5, 6]
  ];
  
let arrayTwo = [
  [1, 2, 3, 4], 
  [5, 6, 7, 8],
  [9, 0, 1, 2],
  [3, 4, 5, 6]
  ];

matrixMultiplication(arrayONE, arrayTwo);
// this should equal [ [50, 30, 40, 50], [122, 78, 104, 130], [24, 26, 38, 50], [86, 54, 72, 90] ];

// TEST THREE
// let arrayBruceBanner = [
//   [3, 1, 4]
//   ];

// let arrayHulk = [
//   [4, 3],
//   [2, 5],
//   [6, 8],
//   ];
  
// matrixMultiplication(arrayBruceBanner, arrayHulk);
// // this should equal [38,46];


// // TEST FOUR
// let anotherArray = [
//   [1, 3, 4, 1, 7],
//   [4, 6, 8, 5, 9],
//   [7, 5, 4, 3, 4],
//   [9, 8, 1, 2, 5],
//   ];
  
// let yesOneMoreArray = [
//   [2, 4, 6, 8, 2, 4, 7],
//   [1, 8, 2, 3, 4, 8, 9],
//   [3, 9, 5, 4, 5, 2, 1],
//   [4, 1, 9, 7, 9, 7, 3],
//   [7, 6, 1, 9, 1, 3, 6],
//   ];
  
// matrixMultiplication(anotherArray, yesOneMoreArray);
// // this should equal [ [70, 107, 48, 103, 50, 64, 83], [121, 195, 130, 198, 126, 142, 159], [71, 131, 103, 144, 85, 109, 131], [72, 141, 98, 159, 78, 131, 172] ];
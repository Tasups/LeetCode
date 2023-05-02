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
  
let arrayC = [];
  
for (let i = 0; i < arrayA.length; i++) {
  arrayC.push([]);
}

// console.log(arrayC);

let indexTotal = 0;

for (let i = 0; i < arrayA.length; i++) {
  console.log("i INCREMENTS")
  
  for (let j = 0; j < arrayA[0].length * arrayB.length; j++) {
    console.log("\ni:" + i + " j:" + j);
    console.log("Actual j:" + j % arrayB.length)
    let product = arrayA[i][j % arrayB.length] * arrayB[j % arrayB[0].length][Math.floor(j / arrayB[0].length)]; //Math.floor(j / arrayB[0].length)
    console.log(arrayA[i][j % arrayB.length] + " times " + arrayB[i][j % arrayB[0].length] + " equals: " +  product)
    
    indexTotal += product;
    
    console.log("total: " + indexTotal)
    if (j % arrayB.length == 2) {
      console.log("push " + indexTotal + " into C array")
      arrayC[i].push(indexTotal);
      indexTotal = 0;
    }
    // for (let k = 0; k < arrayB.length; k++) {
    //   indexTotal += product;
    // }
    
    //console.log(product);
    //container[j] = product;
  }
  //console.log(container);
}

console.log(arrayC);


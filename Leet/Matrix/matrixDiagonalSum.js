/*

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

1. We can find the middle of the matrix, which may be useful for finding the middle of the matrix, given that, if it is even, we will be collecting the middle rounded down and the pluse one of that configuration.
2. What is the best way to iterate over the diagonals? 



@param {number[][]} mat
@return {number}

 */

function matDiagSum (mat) {
  let count = 0;
  let total = 0;
  
  while(count !== Math.floor(mat.length / 2) && count !== Math.ceil(mat.length / 2)) {
    total += mat[count][count];
    total += mat[count][mat[count].length - (count + 1)];
    total += mat[mat.length - count - 1][count];
    total += mat[mat.length - count - 1][mat[count].length - count - 1];
    count++;
  }
  
  if (mat.length % 2 !== 0) {
    total += mat[Math.floor(mat.length / 2)][Math.floor(mat[Math.floor(mat.length / 2)].length / 2)];
  }
  
  console.log(total);
  return total;
}

const oneTestMat = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
  ];
  
matDiagSum(oneTestMat);
// should return 25
  
const twoTestMat = [
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]
  ];

matDiagSum(twoTestMat);
// should return 8
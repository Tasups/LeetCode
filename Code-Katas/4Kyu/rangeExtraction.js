/*

A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

*/

let array = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
let array2 = [-10, -5, -1, 0, 1, 2, 4, 8, 9, 10, 15];
console.log(array2.length + "\n");

let holdingArray = [];
let result = "";

for (let i = 0; i < array.length; i++) {
  // START OF ARRAY AND NEXT ISN'T A +1
  if (i == 0 && array[i + 1] !== array[i] + 1) {
   result += `${array[i]},`;
  }
  if (array[i + 1] == array[i] + 1 && array[i + 2] == array[i + 2]) {
    holdingArray.push(array[i], array[i + 1], array[i + 2]);
    i += 3;
  } 
  if (array[i + 1])
  
  
  
  // END OF ARRAY AND PREV ISN'T A -1
  if (i == array.length - 1 && array[i - 1] !== array[i] - 1) {
    // IF THE HOLDING ARRAY IS EMPTY
    if (holdingArray.length == 0) {
      result += `${array[i]}`;
      // IF THE HOLDING ARRAY ISN'T EMPTY
    } else if (holdingArray.length == 2) {
      for (let j = 0; j < holdingArray.length; j++) {
        result += `${holdingArray[j]},`;
      }
      result += `${array[i]},`;
      holdingArray = [];
    } else {
      let rangeOfInts = `${holdingArray[0]}-${holdingArray[holdingArray.length - 1]},`;
      result += rangeOfInts;
      result += `${array[i]}`;
      holdingArray = [];
    }
  }
  let array3 = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
  // IS THERE A GAP? IF SO...
  if (array[i - 1] !== array[i] - 1 || array[i + 1] !== array[i] + 1) {
    // if there is a gap, then the element at i shouldn't be put into the holding array and the holding array should be transformed into a string and put into the result.
    if (holdingArray.length !== 0) {
      let rangeOfInts = `${holdingArray[0]}-${holdingArray[holdingArray.length - 1]},`;
      result += rangeOfInts;
      // then clear the holding array so that we can do this again for each range of integers
      holdingArray = [];
      // if there is a gap, push array[i] into the result array transformed into a string
      result += `${array[i]},`;  
    }
    
  } else {
    // if there isn't a gap, push the value into the holding array
    holdingArray.push(array[i]);
  }
  
  if (array[i + 1] == array[i] + 1 && array[i + 2] == array[i] + 2){
    result += `${array[i]},${array[i + 1]},${array[i + 2]},`;
  }
  
  
}

console.log(result);



let array3 = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];


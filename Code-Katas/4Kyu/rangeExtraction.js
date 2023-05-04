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

let holdingArray = [];
let result = "";

for (let i = 0; i < array.length; i++) {
  // check if there's a gap
  if (array[i - 1] !== array[i] - 1) {
    // if there is a gap, then the element at i shouldn't be put into the holding array and the holding array should be transformed into a string and put into the result.
    let rangeOfInts = `${holdingArray[0]}-${holdingArray[holdingArray.length - 1]},`;
    result += rangeOfInts;
    // then clear the holding array so that we can do this again for each range of integers
    holdingArray = [];
    // if there is a gap, push array[i] into the result array transformed into a string
    result += `${array[i]},`;
  } else {
    // if there isn't a gap, push the value into the holdingArray
    holdingArray.push(array[i]);
  }
}

console.log(result);


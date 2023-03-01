/*
There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
*/

// let arrayOne = trips1[0]

// for(let i = 1; i < trips1.length; i++) {
//   for(let j = 0; j < trips1[i].length; j++) {
//     if(arrayOne.includes(trips1[i][j])){
//       let index = arrayOne.indexOf(trips1[i][j])
//       console.log(index)
//       console.log(arrayOne)
//       arrayOne.splice(index, 0, trips1[i][j])
//       console.log(arrayOne)
//     }
//   }
// }

const trips1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
] //==> "whatisup"

const trips2 = [
  [ 't', 's', 'f' ], [ 'a', 's', 'u' ],
  [ 'm', 'a', 'f' ], [ 'a', 'i', 'n' ],
  [ 's', 'u', 'n' ], [ 'm', 'f', 'u' ],
  [ 'a', 't', 'h' ], [ 't', 'h', 'i' ],
  [ 'h', 'i', 'f' ], [ 'm', 'h', 'f' ],
  [ 'a', 'u', 'n' ], [ 'm', 'a', 't' ],
  [ 'f', 'u', 'n' ], [ 'h', 's', 'n' ],
  [ 'a', 'i', 's' ], [ 'm', 's', 'n' ],
  [ 'm', 's', 'u' ]
] // ==> "mathisfun"

function decipher(arr) {
  let arrayOne = arr[0]

  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arrayOne.includes(arr[i][j]) && arr[i][j + 1] !== undefined && !arrayOne.includes(arr[i][j + 1])){
        console.log("after: " + i + "," + j)
        let index = arrayOne.indexOf(arr[i][j]) + 1
        console.log(arrayOne)
        arrayOne.splice(index, 0, arr[i][j + 1])
        console.log(arrayOne)
      } else if(arrayOne.includes(arr[i][j]) && arr[i][j - 1] !== undefined && !arrayOne.includes(arr[i][j - 1])){
        console.log("before: " + i + "," + j)
        let index = arrayOne.indexOf(arr[i][j]) - 1
        if(index < 0) index++
        console.log("index: " + index)
        console.log(arrayOne)
        arrayOne.splice(index, 0, arr[i][j - 1])
        console.log(arrayOne)
      }
    }
  }
  let result = arrayOne.join("")
  console.log(result)
  return result
}

decipher(trips2)
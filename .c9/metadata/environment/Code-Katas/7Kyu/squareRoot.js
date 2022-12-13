{"filter":false,"title":"squareRoot.js","tooltip":"/Code-Katas/7Kyu/squareRoot.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["","// COMPLETED","","var isSquare = function (n) {","  const squareRoot = Math.sqrt(n)","  if(n < 0) {","    return false","  } else if (!Number.isInteger(squareRoot)) {","    return false","  }","  return true","}","","","  console.log(isSquare(-1)) //returns false, \"-1: Negative numbers cannot be square numbers\");","  console.log(isSquare( 0)) //returns true, \"0 is a square number (0 * 0)\");","  console.log(isSquare(3)) //returns false, \"3 is not a square number\");","  console.log(isSquare( 4)) //returns true, \"4 is a square number (2 * 2)\");","  console.log(isSquare(25)) //returns true, \"25 is a square number (5 * 5)\");","  console.log(isSquare(26)) //returns false, \"26 is not a square number\");","  ","  /*","Given an integral number, determine if it's a square number:","","In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.","","The tests will always use some integral number, so don't worry about that in dynamic typed languages.","","Examples","-1  =>  false"," 0  =>  true"," 3  =>  false"," 4  =>  true","25  =>  true","26  =>  false","  ","  */",""],"id":1}]]},"ace":{"folds":[],"scrolltop":113,"scrollleft":0,"selection":{"start":{"row":37,"column":0},"end":{"row":37,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":4,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1670965409218,"hash":"b4c0e707d77da0f6784f19c79609e62da1faaf5a"}
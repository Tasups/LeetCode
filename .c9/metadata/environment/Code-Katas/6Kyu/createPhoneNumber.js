{"filter":false,"title":"createPhoneNumber.js","tooltip":"/Code-Katas/6Kyu/createPhoneNumber.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["","// COMPLETED","","function createPhoneNumber(numbers) {","  const areaCodeNums = numbers.slice(0,3);","  const areaCodeToString = areaCodeNums.toString();","  const areaCodeReplaceCommas = areaCodeToString.replace(/,/g, \"\"); ","  const areaCodeResult = `(${areaCodeReplaceCommas}) `","  //console.log(areaCodeResult)","  const prefixNums = numbers.slice(3,6);","  const prefixNumstoString = prefixNums.toString()","  const prefixNumsReplaceCommas = prefixNumstoString.replace(/,/g, \"\")","  //console.log(prefixNumsReplaceCommas)","  const phoneEndNums = numbers.slice(6,10);","  const phoneEndtoString = phoneEndNums.toString()","  const phoneEndReplaceCommas = phoneEndtoString.replace(/,/g, \"\")","  //console.log(phoneEndReplaceCommas)","  console.log(`${areaCodeResult}${prefixNumsReplaceCommas}-${phoneEndReplaceCommas}`)","  return `${areaCodeResult}${prefixNumsReplaceCommas}-${phoneEndReplaceCommas}`","}","","/* ","probably a better solution!!!!","function createPhoneNumber(numbers){","  numbers = numbers.join('');","  return '(' + numbers.substring(0, 3) + ') ' ","      + numbers.substring(3, 6) ","      + '-' ","      + numbers.substring(6);","}","*/","","","createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // returns \"(123) 456-7890\");","createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // returns \"(111) 111-1111\");","createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // returns \"(123) 456-7890\");","","","/*","Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.","","Example","createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns \"(123) 456-7890\"","The returned format must be correct in order to complete this challenge.","Don't forget the space after the closing parentheses!","*/"],"id":1}]]},"ace":{"folds":[],"scrolltop":265,"scrollleft":0,"selection":{"start":{"row":45,"column":2},"end":{"row":45,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":12,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1670952345295,"hash":"6eb977167b25e451498f283ea32da12ce614a735"}
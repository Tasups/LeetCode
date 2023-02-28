// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// CODEWARS LINK https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript

function toPascalCase(str){
  let lowerCase = []
  let count = 0
  if(typeof str === 'number'){
    const numToString = str.toString()
    console.log(numToString)
    return numToString
  }
  for (let i = 0; i < str.length; i++){
    console.log(str[i])
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      let lowercase = str[i].toLowerCase()
      if(count !== 0) {
        lowerCase.push("_")
      }
      lowerCase.push(lowercase)
      count++
    } else {
      lowerCase.push(str[i])
    }
  }
  const result = lowerCase.join("")
  console.log(result)
  return result
}

toPascalCase("TestController")
toPascalCase("MoviesAndBooks")
toPascalCase(1)
toPascalCase("App7Test")


// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"
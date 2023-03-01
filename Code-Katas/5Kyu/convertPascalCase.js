// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// CODEWARS LINK https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript

function toPascalCase(str){
  let lowerCase = []
  if(typeof str === 'number'){
    const numToString = str.toString()
    console.log(numToString)
    return numToString
  }
  for (let i = 0; i < str.length; i++){
    //console.log(str[i])
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      let lowercase = str[i].toLowerCase()
      if(i !== 0) {
        lowerCase.push("_")
      }
      lowerCase.push(lowercase)
    } else {
      lowerCase.push(str[i])
    }
  }
  const result = lowerCase.join("")
  console.log(result)
  return result
}

toPascalCase("Test7Welt")   //=> "test7_welt"
toPascalCase("TestWelt")    //=> "test_welt"
toPascalCase("test7welt")   //=> "test7welt"
toPascalCase("helloWelt")   //=> "hello_welt"
toPascalCase(1)             //=> "1"

// Test.expect(boolean, [optional] message) 
// Test.assertEquals(actual, expected, [optional] message)
// Test.assertSimilar(actual, expected, [optional] message)
// Test.assertNotEquals(actual, expected, [optional] message) 
// Test.assertEquals(toUnderscore("Test7Welt"), "test7_welt", "Failed Test7Welt")
// Test.assertEquals(toUnderscore("TestWelt"), "test_welt", "Failed TestWelt")
// Test.assertEquals(toUnderscore("test7welt"), "test7welt", "Failed test7welt")
// Test.assertEquals(toUnderscore("helloWelt"), "hello_welt", "Failed helloWelt")
// Test.assertEquals(toUnderscore(1), "1", "Failed number")
// Test.assertEquals(toUnderscore(null), "null", "Failed null")


// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"
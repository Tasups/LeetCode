/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function countCharacters(str) {
  let container = {};

  if (str.length == 0) return container;

  for (let i = 0; i  < str.length; i++) {
    if (container[str[i]] == null) container[str[i]] = 1;
    else container[str[i]]++;
  }
  
  console.log(container);
}

countCharacters("aba");
countCharacters("Jason Heath Whisnant");
countCharacters("");
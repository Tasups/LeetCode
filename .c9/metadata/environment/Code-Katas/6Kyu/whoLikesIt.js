{"filter":false,"title":"whoLikesIt.js","tooltip":"/Code-Katas/6Kyu/whoLikesIt.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":36,"column":4},"action":"insert","lines":["function likes(names) {","  if(names.length === 0) {","    console.log('no one likes this')","    return 'no one likes this'","  } else if(names.length === 1) {","    console.log(`${names[0]} likes this`)","    return `${names[0]} likes this` ","  } else if(names.length === 2) {","    console.log(`${names[0]} and ${names[1]} like this`)","    return `${names[0]} and ${names[1]} like this`","  } else if(names.length === 3) {","    console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`)","    return `${names[0]}, ${names[1]} and ${names[2]} like this`","  }","  console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`)","  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`","}","","  likes([]) //returns 'no one likes this'","  likes(['Peter']) //returns 'Peter likes this'","  likes(['Jacob', 'Alex']) //returns 'Jacob and Alex like this'","  likes(['Max', 'John', 'Mark']) //returns 'Max, John and Mark like this'","  likes(['Alex', 'Jacob', 'Mark', 'Max']) //returns 'Alex, Jacob and 2 others like this'","  ","  /*","  ","  You probably know the \"like\" system from Facebook and other pages. People can \"like\" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.","","Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:","","[]                                -->  \"no one likes this\"","[\"Peter\"]                         -->  \"Peter likes this\"","[\"Jacob\", \"Alex\"]                 -->  \"Jacob and Alex like this\"","[\"Max\", \"John\", \"Mark\"]           -->  \"Max, John and Mark like this\"","[\"Alex\", \"Jacob\", \"Mark\", \"Max\"]  -->  \"Alex, Jacob and 2 others like this\"","  ","  */"],"id":1}]]},"ace":{"folds":[],"scrolltop":94,"scrollleft":0,"selection":{"start":{"row":36,"column":4},"end":{"row":36,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1670952405349,"hash":"ab14bc55ce680a4b7e68f24e61e958b7c3c9430e"}
{"filter":false,"title":"creditCardMask.js","tooltip":"/Code-Katas/7Kyu/creditCardMask.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":49,"column":2},"action":"insert","lines":["","// COMPLETED","","// const str = 'KobiyashiMaru';","// // figure out what to unmask","// const startUnmask = str.length - 4;","// const endUnmask = str.length;","// const unmaskedPart = str.substring(startUnmask, endUnmask);","// const numToMask = str.length - unmaskedPart.length;","// const star = \"*\"","// const mask = star.repeat(numToMask)","// console.log(`${mask}${unmaskedPart}`)","","function maskify(cc) {","  const startUnmask = cc.length - 4;","  const endUnmask = cc.length;","  const unmaskedPart = cc.substring(startUnmask, endUnmask);","  const numToMask = cc.length - unmaskedPart.length;","  const hash = \"#\"","  const mask = hash.repeat(numToMask)","  console.log(`${mask}${unmaskedPart}`)","  return `${mask}${unmaskedPart}`","}","","const problemChild = maskify('4556364607935616') // returns '############5616'","maskify('1') // returns '1'","maskify('11111') // returns '#1111'","","","/*","","Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.","","Your task is to write a function maskify, which changes all but the last four characters into '#'.","","Examples","\"4556364607935616\" --> \"############5616\"","     \"64607935616\" -->      \"#######5616\"","               \"1\" -->                \"1\"","                \"\" -->                 \"\"","","// \"What was the name of your first pet?\"","","\"Skippy\" --> \"##ippy\"","","\"Nananananananananananananananana Batman!\"","-->","\"####################################man!\"","","*/"],"id":1}]]},"ace":{"folds":[],"scrolltop":341,"scrollleft":0,"selection":{"start":{"row":34,"column":0},"end":{"row":34,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1670965335140,"hash":"56914f16018972a2b4d8a2bbd0f673342da4bd2e"}
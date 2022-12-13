{"changed":true,"filter":false,"title":"dayOne2022.js","tooltip":"/Advent-of-Code/1-12-2022/dayOne2022.js","value":"// Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows.\n\n// To supply enough magical energy, the expedition needs to retrieve a minimum of fifty stars by December 25th. Although the Elves assure you that the grove has plenty of fruit, you decide to grab any fruit you see along the way, just in case.\n\n// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!\n\n// The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input).\n\n// The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.\n\n// For example, suppose the Elves finish writing their items' Calories and end up with the following list:\n\n// 1000\n// 2000\n// 3000\n\n// 4000\n\n// 5000\n// 6000\n\n// 7000\n// 8000\n// 9000\n\n// 10000\n// This list represents the Calories of the food carried by five Elves:\n\n// The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.\n// The second Elf is carrying one food item with 4000 Calories.\n// The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.\n// The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.\n// The fifth Elf is carrying one food item with 10000 Calories.\n// In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).\n\n// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?\n\nlet testArr = [1000, 2000, 3000, \"\", 4000, \"\", 5000, 6000, \"\", 7000, 8000, 9000, \"\", 10000]\n\nfunction elfMaxCalories (arr) {\n  arr\n}","undoManager":{"mark":2,"position":51,"stack":[[{"start":{"row":0,"column":0},"end":{"row":35,"column":86},"action":"insert","lines":["Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows.","","To supply enough magical energy, the expedition needs to retrieve a minimum of fifty stars by December 25th. Although the Elves assure you that the grove has plenty of fruit, you decide to grab any fruit you see along the way, just in case.","","Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!","","The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input).","","The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.","","For example, suppose the Elves finish writing their items' Calories and end up with the following list:","","1000","2000","3000","","4000","","5000","6000","","7000","8000","9000","","10000","This list represents the Calories of the food carried by five Elves:","","The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.","The second Elf is carrying one food item with 4000 Calories.","The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.","The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.","The fifth Elf is carrying one food item with 10000 Calories.","In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).","","Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":2},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["// "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":3},"action":"insert","lines":["// "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":3},"action":"insert","lines":["// "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["// "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["// "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":3},"action":"insert","lines":["// "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":3},"action":"insert","lines":["// "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":3},"action":"insert","lines":["// "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":3},"action":"insert","lines":["// "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":3},"action":"insert","lines":["// "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":3},"action":"insert","lines":["// "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["// "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["// "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["// "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":35,"column":89},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":37,"column":0},"end":{"row":37,"column":1},"action":"insert","lines":["f"],"id":4},{"start":{"row":37,"column":1},"end":{"row":37,"column":2},"action":"insert","lines":["u"]},{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"insert","lines":["n"]},{"start":{"row":37,"column":3},"end":{"row":37,"column":4},"action":"insert","lines":["c"]},{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"insert","lines":["t"]},{"start":{"row":37,"column":5},"end":{"row":37,"column":6},"action":"insert","lines":["i"]},{"start":{"row":37,"column":6},"end":{"row":37,"column":7},"action":"insert","lines":["o"]},{"start":{"row":37,"column":7},"end":{"row":37,"column":8},"action":"insert","lines":["n"]}],[{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"insert","lines":["f"],"id":6},{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":["i"]},{"start":{"row":37,"column":11},"end":{"row":37,"column":12},"action":"insert","lines":["n"]},{"start":{"row":37,"column":12},"end":{"row":37,"column":13},"action":"insert","lines":["d"]},{"start":{"row":37,"column":13},"end":{"row":37,"column":14},"action":"insert","lines":["E"]},{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"insert","lines":["l"]},{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"insert","lines":["f"]}],[{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"remove","lines":["f"],"id":7},{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"remove","lines":["l"]},{"start":{"row":37,"column":13},"end":{"row":37,"column":14},"action":"remove","lines":["E"]},{"start":{"row":37,"column":12},"end":{"row":37,"column":13},"action":"remove","lines":["d"]},{"start":{"row":37,"column":11},"end":{"row":37,"column":12},"action":"remove","lines":["n"]},{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"remove","lines":["i"]},{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"remove","lines":["f"]}],[{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"insert","lines":["w"],"id":8},{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":["l"]},{"start":{"row":37,"column":11},"end":{"row":37,"column":12},"action":"insert","lines":["f"]}],[{"start":{"row":37,"column":11},"end":{"row":37,"column":12},"action":"remove","lines":["f"],"id":9},{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"remove","lines":["l"]},{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"remove","lines":["w"]}],[{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"insert","lines":["e"],"id":10},{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":["l"]},{"start":{"row":37,"column":11},"end":{"row":37,"column":12},"action":"insert","lines":["f"]},{"start":{"row":37,"column":12},"end":{"row":37,"column":13},"action":"insert","lines":["M"]},{"start":{"row":37,"column":13},"end":{"row":37,"column":14},"action":"insert","lines":["a"]},{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"insert","lines":["x"]},{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"insert","lines":["C"]},{"start":{"row":37,"column":16},"end":{"row":37,"column":17},"action":"insert","lines":["a"]},{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"insert","lines":["l"]}],[{"start":{"row":37,"column":18},"end":{"row":37,"column":19},"action":"insert","lines":["o"],"id":11},{"start":{"row":37,"column":19},"end":{"row":37,"column":20},"action":"insert","lines":["r"]},{"start":{"row":37,"column":20},"end":{"row":37,"column":21},"action":"insert","lines":["i"]},{"start":{"row":37,"column":21},"end":{"row":37,"column":22},"action":"insert","lines":["e"]},{"start":{"row":37,"column":22},"end":{"row":37,"column":23},"action":"insert","lines":["s"]}],[{"start":{"row":37,"column":23},"end":{"row":37,"column":25},"action":"insert","lines":["()"],"id":12}],[{"start":{"row":37,"column":25},"end":{"row":37,"column":26},"action":"insert","lines":["{"],"id":13}],[{"start":{"row":37,"column":26},"end":{"row":39,"column":1},"action":"insert","lines":["","    ","}"],"id":14}],[{"start":{"row":37,"column":23},"end":{"row":37,"column":24},"action":"insert","lines":[" "],"id":15}],[{"start":{"row":37,"column":26},"end":{"row":37,"column":27},"action":"insert","lines":[" "],"id":16}],[{"start":{"row":37,"column":25},"end":{"row":37,"column":26},"action":"insert","lines":["a"],"id":17},{"start":{"row":37,"column":26},"end":{"row":37,"column":27},"action":"insert","lines":["r"]},{"start":{"row":37,"column":27},"end":{"row":37,"column":28},"action":"insert","lines":["r"]}],[{"start":{"row":38,"column":2},"end":{"row":38,"column":4},"action":"remove","lines":["  "],"id":18},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"remove","lines":["  "]},{"start":{"row":37,"column":31},"end":{"row":38,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":37,"column":31},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":19},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":38,"column":2},"end":{"row":38,"column":3},"action":"insert","lines":["a"],"id":20},{"start":{"row":38,"column":3},"end":{"row":38,"column":4},"action":"insert","lines":["r"]},{"start":{"row":38,"column":4},"end":{"row":38,"column":5},"action":"insert","lines":["r"]}],[{"start":{"row":35,"column":89},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":1},"action":"insert","lines":["l"]},{"start":{"row":37,"column":1},"end":{"row":37,"column":2},"action":"insert","lines":["e"]},{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":37,"column":3},"end":{"row":37,"column":4},"action":"insert","lines":[" "],"id":22},{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"insert","lines":["t"]},{"start":{"row":37,"column":5},"end":{"row":37,"column":6},"action":"insert","lines":["e"]},{"start":{"row":37,"column":6},"end":{"row":37,"column":7},"action":"insert","lines":["s"]},{"start":{"row":37,"column":7},"end":{"row":37,"column":8},"action":"insert","lines":["t"]},{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"insert","lines":["A"]},{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"insert","lines":["r"]},{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":37,"column":11},"end":{"row":37,"column":12},"action":"insert","lines":[" "],"id":23},{"start":{"row":37,"column":12},"end":{"row":37,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":37,"column":13},"end":{"row":37,"column":14},"action":"insert","lines":[" "],"id":24}],[{"start":{"row":37,"column":14},"end":{"row":37,"column":16},"action":"insert","lines":["[]"],"id":25}],[{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"insert","lines":["1"],"id":26},{"start":{"row":37,"column":16},"end":{"row":37,"column":17},"action":"insert","lines":["0"]},{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"insert","lines":["0"]},{"start":{"row":37,"column":18},"end":{"row":37,"column":19},"action":"insert","lines":["0"]}],[{"start":{"row":37,"column":19},"end":{"row":37,"column":20},"action":"insert","lines":[","],"id":27}],[{"start":{"row":37,"column":20},"end":{"row":37,"column":21},"action":"insert","lines":[" "],"id":28},{"start":{"row":37,"column":21},"end":{"row":37,"column":22},"action":"insert","lines":["2"]},{"start":{"row":37,"column":22},"end":{"row":37,"column":23},"action":"insert","lines":["0"]},{"start":{"row":37,"column":23},"end":{"row":37,"column":24},"action":"insert","lines":["0"]},{"start":{"row":37,"column":24},"end":{"row":37,"column":25},"action":"insert","lines":["0"]},{"start":{"row":37,"column":25},"end":{"row":37,"column":26},"action":"insert","lines":[","]}],[{"start":{"row":37,"column":26},"end":{"row":37,"column":27},"action":"insert","lines":[" "],"id":29},{"start":{"row":37,"column":27},"end":{"row":37,"column":28},"action":"insert","lines":["3"]},{"start":{"row":37,"column":28},"end":{"row":37,"column":29},"action":"insert","lines":["0"]},{"start":{"row":37,"column":29},"end":{"row":37,"column":30},"action":"insert","lines":["0"]},{"start":{"row":37,"column":30},"end":{"row":37,"column":31},"action":"insert","lines":["0"]},{"start":{"row":37,"column":31},"end":{"row":37,"column":32},"action":"insert","lines":[","]}],[{"start":{"row":37,"column":32},"end":{"row":37,"column":33},"action":"insert","lines":[" "],"id":30}],[{"start":{"row":37,"column":33},"end":{"row":37,"column":35},"action":"insert","lines":["\"\""],"id":31}],[{"start":{"row":37,"column":35},"end":{"row":37,"column":36},"action":"insert","lines":[","],"id":32}],[{"start":{"row":37,"column":36},"end":{"row":37,"column":37},"action":"insert","lines":[" "],"id":33},{"start":{"row":37,"column":37},"end":{"row":37,"column":38},"action":"insert","lines":["4"]},{"start":{"row":37,"column":38},"end":{"row":37,"column":39},"action":"insert","lines":["0"]},{"start":{"row":37,"column":39},"end":{"row":37,"column":40},"action":"insert","lines":["0"]}],[{"start":{"row":37,"column":40},"end":{"row":37,"column":41},"action":"insert","lines":["0"],"id":34},{"start":{"row":37,"column":41},"end":{"row":37,"column":42},"action":"insert","lines":[","]}],[{"start":{"row":37,"column":42},"end":{"row":37,"column":43},"action":"insert","lines":[" "],"id":35}],[{"start":{"row":37,"column":43},"end":{"row":37,"column":45},"action":"insert","lines":["\"\""],"id":36}],[{"start":{"row":37,"column":44},"end":{"row":37,"column":45},"action":"insert","lines":["5"],"id":37},{"start":{"row":37,"column":45},"end":{"row":37,"column":46},"action":"insert","lines":["0"]},{"start":{"row":37,"column":46},"end":{"row":37,"column":47},"action":"insert","lines":["0"]}],[{"start":{"row":37,"column":46},"end":{"row":37,"column":47},"action":"remove","lines":["0"],"id":38},{"start":{"row":37,"column":45},"end":{"row":37,"column":46},"action":"remove","lines":["0"]},{"start":{"row":37,"column":44},"end":{"row":37,"column":45},"action":"remove","lines":["5"]}],[{"start":{"row":37,"column":45},"end":{"row":37,"column":46},"action":"insert","lines":[","],"id":39}],[{"start":{"row":37,"column":46},"end":{"row":37,"column":47},"action":"insert","lines":[" "],"id":40},{"start":{"row":37,"column":47},"end":{"row":37,"column":48},"action":"insert","lines":["5"]},{"start":{"row":37,"column":48},"end":{"row":37,"column":49},"action":"insert","lines":["0"]},{"start":{"row":37,"column":49},"end":{"row":37,"column":50},"action":"insert","lines":["0"]},{"start":{"row":37,"column":50},"end":{"row":37,"column":51},"action":"insert","lines":["0"]}],[{"start":{"row":37,"column":51},"end":{"row":37,"column":52},"action":"insert","lines":[","],"id":41}],[{"start":{"row":37,"column":52},"end":{"row":37,"column":53},"action":"insert","lines":[" "],"id":42},{"start":{"row":37,"column":53},"end":{"row":37,"column":54},"action":"insert","lines":["6"]},{"start":{"row":37,"column":54},"end":{"row":37,"column":55},"action":"insert","lines":["0"]},{"start":{"row":37,"column":55},"end":{"row":37,"column":56},"action":"insert","lines":["0"]},{"start":{"row":37,"column":56},"end":{"row":37,"column":57},"action":"insert","lines":["0"]},{"start":{"row":37,"column":57},"end":{"row":37,"column":58},"action":"insert","lines":[","]}],[{"start":{"row":37,"column":58},"end":{"row":37,"column":59},"action":"insert","lines":[" "],"id":43}],[{"start":{"row":37,"column":59},"end":{"row":37,"column":61},"action":"insert","lines":["\"\""],"id":44}],[{"start":{"row":37,"column":61},"end":{"row":37,"column":62},"action":"insert","lines":[","],"id":45}],[{"start":{"row":37,"column":62},"end":{"row":37,"column":63},"action":"insert","lines":[" "],"id":46},{"start":{"row":37,"column":63},"end":{"row":37,"column":64},"action":"insert","lines":["7"]},{"start":{"row":37,"column":64},"end":{"row":37,"column":65},"action":"insert","lines":["0"]},{"start":{"row":37,"column":65},"end":{"row":37,"column":66},"action":"insert","lines":["0"]},{"start":{"row":37,"column":66},"end":{"row":37,"column":67},"action":"insert","lines":["0"]},{"start":{"row":37,"column":67},"end":{"row":37,"column":68},"action":"insert","lines":[","]}],[{"start":{"row":37,"column":68},"end":{"row":37,"column":69},"action":"insert","lines":[" "],"id":47},{"start":{"row":37,"column":69},"end":{"row":37,"column":70},"action":"insert","lines":["8"]},{"start":{"row":37,"column":70},"end":{"row":37,"column":71},"action":"insert","lines":["0"]},{"start":{"row":37,"column":71},"end":{"row":37,"column":72},"action":"insert","lines":["0"]},{"start":{"row":37,"column":72},"end":{"row":37,"column":73},"action":"insert","lines":["0"]},{"start":{"row":37,"column":73},"end":{"row":37,"column":74},"action":"insert","lines":[","]}],[{"start":{"row":37,"column":74},"end":{"row":37,"column":75},"action":"insert","lines":[" "],"id":48},{"start":{"row":37,"column":75},"end":{"row":37,"column":76},"action":"insert","lines":["9"]},{"start":{"row":37,"column":76},"end":{"row":37,"column":77},"action":"insert","lines":["0"]},{"start":{"row":37,"column":77},"end":{"row":37,"column":78},"action":"insert","lines":["0"]},{"start":{"row":37,"column":78},"end":{"row":37,"column":79},"action":"insert","lines":["0"]},{"start":{"row":37,"column":79},"end":{"row":37,"column":80},"action":"insert","lines":[","]}],[{"start":{"row":37,"column":80},"end":{"row":37,"column":81},"action":"insert","lines":[" "],"id":49}],[{"start":{"row":37,"column":81},"end":{"row":37,"column":83},"action":"insert","lines":["\"\""],"id":50}],[{"start":{"row":37,"column":83},"end":{"row":37,"column":84},"action":"insert","lines":[","],"id":51}],[{"start":{"row":37,"column":84},"end":{"row":37,"column":85},"action":"insert","lines":[" "],"id":52},{"start":{"row":37,"column":85},"end":{"row":37,"column":86},"action":"insert","lines":["1"]},{"start":{"row":37,"column":86},"end":{"row":37,"column":87},"action":"insert","lines":["0"]},{"start":{"row":37,"column":87},"end":{"row":37,"column":88},"action":"insert","lines":["0"]},{"start":{"row":37,"column":88},"end":{"row":37,"column":89},"action":"insert","lines":["0"]},{"start":{"row":37,"column":89},"end":{"row":37,"column":90},"action":"insert","lines":["0"]}]]},"ace":{"folds":[],"scrolltop":359,"scrollleft":0,"selection":{"start":{"row":40,"column":5},"end":{"row":40,"column":5},"isBackwards":false},"options":{"tabSize":2,"useSoftTabs":true,"guessTabSize":false,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":17,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1670939888075}
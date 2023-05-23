/**
 * You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
 * 
 */

function updateLight(current) {
    // switch (current) {
    //     case 'green':
    //         console.log('yellow');
    //         return 'yellow';
    //     case 'yellow':
    //         console.log('red');
    //         return 'red';
    //     case 'red':
    //         console.log('green');
    //         return 'green';
    //     default:
    //         break;
    // }

    if (current === "green") return "yellow";
    if (current === "yellow") return "red";
    if (current === "red") return "green";
}

console.log(updateLight("yellow")); // => red
console.log(updateLight('green'));  // => yellow
console.log(updateLight("red")); // => green
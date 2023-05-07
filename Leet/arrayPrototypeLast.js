Array.prototype.last = function() {
    if (this.length == 0) return -1;
    else return this[this.length - 1];
};

let arrayONE = [1,2,3];
let nullArray = [];

console.log(arrayONE.last());
console.log(nullArray.last())
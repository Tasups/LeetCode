 class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }
 }
 
 class BinarySearchTree {
    constructor() {
        this.root = null;
    }
     
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (current.value === value) return undefined;
                if (value < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    } 
    
    // we need to use a binary search algorithm in cutting up the array passed in to smaller pieces and then assigning the left into the left position and recurring until there is nothing left in the array
    
    insertUnorderedArray(array) {
        // check if array is empty, if so return 
        if (array.length <= 0) return undefined;
        // sort the array, so that we can grab the middle and use that as the root of the BST
        const sortedArray = array.sort((a, b) => a - b);
        const mid = sortedArray.splice(Math.floor(sortedArray.length / 2), 1)[0];
        console.log("mid: " + mid)
        // make the root the midpoint of the array to make a BST actually possible
        let newRoot = new Node(mid);
        this.root = newRoot;
        // make current the root so that we can then move along the branches of the tree and start inserting things
        let current = this.root;
        // if the array had only one element in it, there's nothing left to do, so return the tree
        if (sortedArray.length <= 0) return this;
        // loop over the remainder of the sortedArray
        console.log(sortedArray);
        for (let i = 0; i < sortedArray.length; i++) {
            console.log(i);
            let newNode = new Node(sortedArray[i]);
            console.log(newNode)
            while (true) {
                if (sortedArray[i] < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (sortedArray[i] > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
            console.log(this);
            current = this.root;
        }
        return this;
    }
    
    DFSInorder() {
        if (!this.root) return undefined;
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }    
 }
 
const tree = new BinarySearchTree();

const array = [15, 10, 20, 8, 12, 16, 25];

tree.insertUnorderedArray(array);

// console.log(tree.DFSInorder());
console.log(tree)


// function insertUnorderedArray(array) {
//     if (array.length <= 0) return undefined;
//     const sortedArray = array.sort((a, b) => a - b);
//     const mid = sortedArray.splice(Math.floor(sortedArray.length / 2), 1);
//     let newRoot = new Node(mid);
//     this.root = newRoot;
//     let current = this.root;
//     if (sortedArray.length <= 0) return undefined;
//     for (let i = 0; i < sortedArray; i++) {
//         let newNode = new Node(sortedArray[i]);
//         while (true) {
//             if (sortedArray[i] < current.value) {
//                 if (current.left === null) {
//                     current.left = sortedArray[i];
//                 } else {
//                     current = current.left;
//                 }
//             } else if (sortedArray[i] > current.value) {
//                 if (current.right === null) {
//                     current.right = sortedArray[i];
//                 } else {
//                     current = current.right;
//                 }
//             }
//         }
//     }
//     return this;
// }
// console.log(array.sort((a, b) => a - b));
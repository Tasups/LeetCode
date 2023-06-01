/*
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

Constraints:

The number of nodes in the tree is in the range [1, 2 * 104].
1 <= Node.val <= 105
1 <= low <= high <= 105
All Node.val are unique.
*/

// create Tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
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
    
    DFSInorder() {
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

// Examples

let tree = new BinarySearchTree();

function rangeSumBST(root, low, high) {
    const treeData = root.filter(val => val !== null);

    for (let i = 0; i < treeData.length; i++) {
        tree.insert(treeData[i]);
    }
    console.log(tree);
    const valArray = tree.DFSInorder();
    console.log(valArray)

    let total = 0;
    for (let j = 0; j < valArray.length; j++) {
        if (valArray[j] >= low && valArray[j] <= high) {
            total += valArray[j];
        }
    }
    
    return total;
}

// for example 1: tree.insert(10);tree.insert(5);tree.insert(15);tree.insert(3);tree.insert(7);tree.insert(null);tree.insert(18);

// for example 2: tree.insert(10);tree.insert(5);tree.insert(15);tree.insert(3);tree.insert(7);tree.insert(13);tree.insert(18);tree.insert(1);tree.insert(null);tree.insert(6);


// [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

console.log(rangeSumBST([10,5,15,3,7,null,18], 7, 15)); // -> 32

// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

console.log(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10)); // -> 23
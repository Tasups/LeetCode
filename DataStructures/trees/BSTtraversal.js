
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
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
    
    find(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while(!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    
}

const tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9);

tree.insert(11);

console.log(tree.find(11));

console.log(tree);

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
    
    breadthFirstSearch() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    
    DFSPreorder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    
    DFSPostordeer() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
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

const tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9);

tree.insert(11);
tree.insert(5);
tree.insert(20);

console.log(tree.find(11));
console.log("Breadth First Search: " + tree.breadthFirstSearch());
console.log("Depth First Search Preorder: " + tree.DFSPreorder());
console.log("Depth First Search Inorder: " + tree.DFSInorder());
console.log("Depth First Search Postorder: " + tree.DFSPostordeer());

console.log(tree);
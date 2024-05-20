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

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
         } else {
                if(this.root.right === null) {
                    root.right = newNode
                } else {
                    this.insertNode(this.root, newNode)
                }
            }
        }
        max(root) {
            if(!root.right) {
                return root.value
            } else {
                return this.max(root.right)
            }
        }
    }



const bst = new BinarySearchTree()

console.log('Tree is empty?', bst.isEmpty());

bst.insert(3);
bst.insert(2);
bst.insert(1);
bst.insert(6);
bst.insert(0);

console.log(bst.max(bst.root))
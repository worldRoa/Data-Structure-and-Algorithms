// Class to represent a node in a binary tree.
class Node {
    // Constructor initializes a node with the provided value.
    constructor(value) {
        this.value = value;  // Stores the value of the node.
        this.left = null;    // Initializes the left child to null.
        this.right = null;   // Initializes the right child to null.
    }
}

// Class definition for a binary search tree.
class BinarySearchTree {
    // Constructor initializes the root of the tree to null, indicating an empty tree.
    constructor() {
        this.root = null;  // Sets the root of the BST to null.
    }

    // Method to check if the BST is empty.
    isEmpty() {
        return this.root === null;  // Returns true if the root is null, else false.
    }

    // Method to insert a new value into the BST.
    insert(value) {
        const newNode = new Node(value);  // Instantiates a node with the specified value.
        if (this.isEmpty()) {
            this.root = newNode;  // If the tree is empty, set the new node as the root.
        } else {
            this.insertNode(this.root, newNode);  // Otherwise, find the correct position for the new node.
        }
    }

    // Private helper method to recursively insert a node into the BST.
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;  // Insert new node as left child if left is null.
            } else {
                this.insertNode(root.left, newNode);  // Recur on the left subtree.
            }
        } else {
            if (root.right === null) {
                root.right = newNode;  // Insert new node as right child if right is null.
            } else {
                this.insertNode(root.right, newNode);  // Recur on the right subtree.
            }
        }
    }

    // Method to search for a value in the BST.
    search(root, value) {
        if (!root) {
            return false;  // If the node is null, value is not found.
        } else if (value === root.value) {
            return true;  // Return true if the node's value matches the search value.
        } else if (value < root.value) {
            return this.search(root.left, value);  // Search in the left subtree.
        } else {
            return this.search(root.right, value);  // Search in the right subtree.
        }
    }

    // Method to perform preorder traversal (Root, Left, Right).
    preorder(root) {
        if (root) {
            console.log(root.value);  // Print root value.
            this.preorder(root.left);  // Recur on the left subtree.
            this.preorder(root.right);  // Recur on the right subtree.
        }
    }

    // Method to perform inorder traversal (Left, Root, Right).
    inorder(root) {
        if (root) {
            this.inorder(root.left);  // Recur on the left subtree.
            console.log(root.value);  // Print root value.
            this.inorder(root.right);  // Recur on the right subtree.
        }
    }

    // Method to perform postorder traversal (Left, Right, Root).
    postorder(root) {
        if (root) {
            this.postorder(root.left);  // Recur on the left subtree.
            this.postorder(root.right);  // Recur on the right subtree.
            console.log(root.value);  // Print root value.
        }
    }

    levelorder() {
        const queue = []
        queue.push(this.root)
        while(queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if(!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if(!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if(root === null) {
            return root
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if(!root.left && !root.right) {
                return null
            }
            if(!root.left) {
                return root.right
            } else if(!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}

// Instantiate a BinarySearchTree.
const bst = new BinarySearchTree();

// Check if the tree is empty and print the result.
console.log('Tree is empty?', bst.isEmpty());

// Insert values into the BST.
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

bst.levelorder()

bst.delete(10)
bst.levelorder()

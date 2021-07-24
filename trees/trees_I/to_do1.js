class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    // add methods here...
    // helper method which creates a new node to
    // be inserted and calls insertNode
    insert(val)
    {
        // Creating a node and initailising
        // with data
        var newNode = new BTNode(val);

        // root is null then node will
        // be added to the tree and made root.
        if(this.root === null)
            this.root = newNode;
        else

            // find the correct position in the
            // tree and add the node
            this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    insertNode(node, newNode)
    {
        // if the data is less than the node
        // data move left of the tree
        if(newNode.val < node.val)
        {
            // if left is null insert node here
            if(node.left === null)
                node.left = newNode;
            else

                // if left is not null recur until
                // null is found
                this.insertNode(node.left, newNode);
        }

        // if the data is more than the node
        // data move right of the tree
        else
        {
            // if right is null insert node here
            if(node.right === null)
                node.right = newNode;
            else

                // if right is not null recur until
                // null is found
                this.insertNode(node.right,newNode);
        }
    }

    add(node, val){
        var newNode = new BTNode(val)
        if(this.root == null){
            this.root = newNode
        }
        
        if(newNode.val < node.val){
            if(node.left == null){
            node.left = newNode
            }else{
            this.add(node.left, val)
            }
        }
        
        if(newNode.val > node.val){
            if(node.right == null){
            node.right = newNode
            }else{
            this.add(node.right, val)
            }
        }
        return this
    }

    contain(data){
        if(!this.root) return null
        let current = this.root;

        while(current){
            if(data == current.val) return true;

            if(current.right && data > current.val){
                current = current.right
            }else{
                current = current.left
            }
        }

        return false
    }

    min(){
        if(!this.root){
            return 0
        }
        let current = this.root
        while(current){
            if(current.left == null){
            break;
            }
            current = current.left
        }

        return current.val
    }
    
    max(){
        if(!this.root){
            return 0
        }
        let current = this.root
        while(current){
            if(current.right == null){
                break;
            }
            current = current.right
        }

        return current.val
    }
    
    count(root){
        if (root == null){
            return 0;        
        }
        return 1 + (this.count(root.left) + this.count(root.right));
    }

    isEmpty(){
        if(this.root==null){
            return true
        }else{
            return false
        }
    }
}

// var bst = new BST()
// bst.root = new BTNode(10)

// bst.add(bst.root, 8)
// bst.add(bst.root, 6)
// bst.add(bst.root, 7)
// bst.add(bst.root, 9)
// bst.add(bst.root, 3)
// bst.add(bst.root, 4)
// bst.add(bst.root, 1)
// bst.add(bst.root, 15)
// bst.add(bst.root, 12)
// bst.add(bst.root, 11)
// bst.add(bst.root, 13)
// bst.add(bst.root, 20)
// bst.add(bst.root, 18)
// bst.add(bst.root, 23)
// console.log(bst)
// console.log(bst.contain(18))
// console.log(bst.min())
// console.log(bst.max())
// console.log(bst.count(bst.root))
// console.log(bst.isEmpty())
// console.log(bst.height(bst.root))
// console.log(bst.is_balanced(bst.root))

// var bst2 = new BST()
// console.log(bst2.isEmpty())

// bst.insertNode(bst.root, 8)
// bst.insertNode(bst.root, 7)
// bst.insertNode(bst.root, 5)
// bst.insertNode(bst.root, 4)
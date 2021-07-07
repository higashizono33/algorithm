class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head nod
class SLL {
     // constructor, other methods, removed for brevity
    constructor(){
        this.head = null
        this.length = 0
    }
    addFront(value){
        newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++

        return this.head
    }

    removeFront(){
        if(this.head=null){
            return null
        }else{
            this.head = this.head.next
        }
        this.length--
        return this.head
    }

    front(){
        if(this.head=null){
            return null
        }else{
            return this.head.value
        }
    }
}


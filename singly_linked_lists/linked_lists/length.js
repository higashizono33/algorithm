class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Length
// Create a new SLL method length() that returns number of nodes in that list.

class SLL {
     // constructor, other methods, removed for brevity
    constructor(){
        this.head = null
        this.length = 0
    }

    length(){
        var node = this.head
        if(node){
            this.length++
        }
        while(node.next){
            this.length++
            node = node.next
        }

        return this.length
    }
}
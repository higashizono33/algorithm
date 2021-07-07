class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Display
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

class SLL {
     // constructor, other methods, removed for brevity
    constructor(){
        this.head = null
        this.length = 0
    }

    display(){
        var node = this.head
        var myList = ''
        
        while(node.next){
            node.value += allValues
            node = node.next
        }

        return myList
    }
}
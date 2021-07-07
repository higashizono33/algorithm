class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Contains
// Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

class SLL {
     // constructor, other methods, removed for brevity
    constructor(){
        this.head = null
        this.length = 0
    }

    contains(value){
        var result = false
        var node = this.head
        while(node.next){
            if(node.value==value){
                return result = true
            }else{
                node = node.next
            }
        }
        return result
    }
}
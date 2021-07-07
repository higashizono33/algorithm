class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL {
     // constructor, other methods, removed for brevity
    constructor(){
        this.head = null
        this.length = 0
    }

    // Create method max() to return list’s largest val.
    max(){
        var node = this.head
        var max = node.value
        while(node.next){
            if(node.value>max){
                max = node.value
            }
            node = node.next
        }

        return max
    }

    // Create min(node) to return list’s smallest val.
    min(){
        var node = this.head
        var min = node.value
        while(node.next){
            if(node.value<min){
                min = node.value
            }
            node = node.next
        }

        return min
    }

    // Create average() to return average val.
    average(){
        var node = this.head
        var sum = 0
        while(node.next){
            sum += node.value
            this.length++
            node = node.next
        }
        
        return sum/this.length
    }
}
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
        this.head, this.tail = null
        this.length = 0
    }

    back(){
        var runner = this.head
        while(runner.next){
            runner = runner.next
        }

        return runner.value
    }
    
    removeBack(){
        var previous = this.head
        var tail = this.head.next
        while(tail.next){
            previous = tail
            tail = tail.next
        }
        previous.next = null
        
        return this
    }

    addBack(value){
        var newNode = new Node(value)
        var current = this.head
        while(current.next){
            current = current.next
          // console.log('hi')
        }
        current.next = newNode
        
        return this
    }

}

// var my_sll = new SLL()

// my_sll.addFront(3)
// my_sll.addFront(6)
// my_sll.addFront(1)
// my_sll.addFront(11)
// my_sll.addFront(15)
// my_sll.addFront(4)
// my_sll.addBack(5)

// console.log(my_sll.min())
// var min = my_sll.min()
// console.log(my_sll.minToFront(min))

// var max = my_sll.max()
// console.log(my_sll.maxToBack(max))

// function ListNode(value) {
//     this.val = value;
//     this.next = null;
// }

// console.log(my_sll)
// my_sll.prependVal(ListNode(), 3, 6)
// console.log(my_sll)



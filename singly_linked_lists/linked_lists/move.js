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

  min(){
    var runner = this.head
    var min = this.head
    while(runner.next){
      if(runner.value < min.value){
        min = runner
      }
      runner = runner.next
    }

    return min
  }

  minToFront(min){
    var previous = this.head
    var runner = this.head.next
    console.log(min)
    while(runner.next){
      if(runner.value==min.value){
        // console.log('hi')
        previous.next = runner.next
        // runner = null
        // runner = previous.next
        // continue;
      }
      previous = runner
      runner = runner.next
    }
    
    min.next = this.head
    this.head = min
    
    return this
  }

  max(){
    var runner = this.head
    var max = this.head
    while(runner.next){
      if(runner.value > max.value){
        max = runner
      }
      runner = runner.next
    }

    return max
  }

  maxToBack(max){
    var previous = this.head
    var runner = this.head.next
    while(runner.next){
      if(runner.value==max.value){
        console.log('hi')
        previous.next = runner.next
        // runner = null
        // runner = previous.next
        // continue;
      }
      previous = runner
      runner = runner.next
    }
    
    var newNode = new Node(max.value)
    runner.next = newNode
    
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
//   this.val = value;
//   this.next = null;
// }

// console.log(my_sll)
// my_sll.prependVal(ListNode(), 3, 6)
// console.log(my_sll)



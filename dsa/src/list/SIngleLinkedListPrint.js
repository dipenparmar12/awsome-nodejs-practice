console.clear()

class Node {
  constructor(value, next = null){
    this.data = value
    this.next = next
  }
}


class SinglyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  push(value){
    const node = new Node(value)
    if (this.head == null) {
        this.head = node;
    } else {
        this.tail.next = node;
    }

    this.tail = node;
  }

  print(){
    let current = this.head 
    while(current.next){
      console.log(current)
      current = current.next
    }
    console.log(current)
  }

}


linkedList = new SinglyLinkedList()
linkedList.push(1)
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)
linkedList.push(6)
linkedList.print()

/*    

*/

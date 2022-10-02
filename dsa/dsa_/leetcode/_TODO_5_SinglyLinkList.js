
console.clear()
const log = console.log

class Node {
  constructor(_val) {
    this.val = _val
    this.next = null
  }
}

class List {
  constructor(_val) {
    this.len = 0
    this.head = null
    this.tail = null
    if (_val != undefined) this.add(_val)
  }

  getLen() {
    log("Total Nodes:", this.len)
    return this.len
  }

  isEmpty() {
    this.len === 0
  }

  add(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
    this.len += 1
    return this
  }

  show() {
    log(this)
    // log(JSON.stringify(this, null, 2));
    // let T = this.head 
    // while(T.next){
    //   log(T.next)
    //   T = T.next
    // }
  }
}

const list = new List(1)
list.add(11)
list.add(22)
list.add(33)
list.add(44).add(55)
// list.add(66)
list.show(55)
list.getLen()




// const n1 = new Node(1, null)
// const n2 = new Node(2, n1)
// const n3 = new Node(3, n2)
// console.log(n3)

// /**
//  * @param {Node} list1
//  * @param {Node} list2
//  * @return {Node}
//  * @TODO
//  */
//  let mergeTwoLists = function(list1, list2) {
// };
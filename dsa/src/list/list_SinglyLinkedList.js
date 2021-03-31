console.clear()

function LinkedList() {
  let len = 0
  let head = null

  let Node = function (newEl) {
    this.el = newEl
    this.next = null
  }

  this.print = function () {
    let nodes = []
    currentNode = head

    while (currentNode.next) {
      nodes.push(currentNode.el)
      currentNode = currentNode.next
    }

    nodes.push(currentNode.el) // LastElement
    console.log('Nodes:', nodes, `Len:${len}`)
  }

  this.getHead = function () {
    return head
  }

  this.size = function () {
    console.log(len)
    return len
  }

  this.add = function (el) {
    const node = new Node(el)

    if (head === null) {
      head = node
    } else {
      let currentNode = head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    len++
    
    /*
    
    const newNode = new Node(data)
    if (head == null) {
	return newNode;
    }else {
	if(head.next == null ) {
	    head.next = newNode
	}else {
	    this.add(head.next, data)
	}
	return head
    }
    
    */

  }

  this.remove = function (el) {
    let currentNode = head
    let previosNode

    if (currentNode.el === el) {
      head = currentNode.next
    } else {
      while (currentNode.el !== el) {
        previosNode = currentNode
        currentNode = currentNode.next
      }
    }

    previosNode.next = currentNode.next
    len--
  }
  
}

let myList = new LinkedList()
myList.add(1)
myList.add(2)
myList.add(3)
myList.add(4)
myList.remove(3)
myList.add(5)
myList.add(6)
myList.add(7)
myList.remove(6)

myList.print()

null

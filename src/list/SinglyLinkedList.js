let log = function log(...v) {
  console.log(...v);
};
let print = function print(data) {
  console.log(data);
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  length() {
    return this.len;
  }

  push(data) {
    let new_node = new Node(data);
    this.len += 1;
    // if there is no head yet, make new node to head
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
      return this;
    }

    this.tail.next = this.tail = new_node;
    return this;
  } // Push, Append()s

  pop() {
    if (!this.head) return undefined;
    let t_node = this.head;
    let pointer = t_node;

    while (pointer.next) {
      t_node = pointer;
      pointer = pointer.next;
    }

    this.tail = t_node;
    this.tail.next = null;
    this.len -= 1;

    if (this.len < 0) {
      this.head = null;
      this.tail = null;
      this.len = 0;
    }

    return this;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.len < 0) {
      this.head = null;
      this.tail = null;
    }
    this.head = this.head.next;
    this.tail = this.head
    this.len -= 1;
  }
}

let list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);
// list.push(7);
// list.push(8);
// list.push(9);
// list.push(10);

list.pop();
list.pop();
list.pop();
list.pop();
list.pop();

list.push(11);
list.push(12);
list.push(13);

list.shift();
list.shift();
list.shift();

console.log(list);
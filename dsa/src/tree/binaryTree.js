console.clear()

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }

  add(data) {
    /// Handle arr input
    if (Array.isArray(data)) {
      data.forEach((el) => this.add(el))
    }

    const newNode = new Node(data)
    if (this.root === null) return (this.root = newNode)

    let current = this.root
    let i = 0 // not required just for handle infinte loop.

    while (i < 50) {
      if (current.data === data) return undefined // no duplicates allowed

      /// Left side
      if (current.data > data) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      }

      /// Right side
      if (current.data < data) {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }

      i++
    }

    return this
  }

  find(val) {
    let current = this.root
    let i = 0
    while (current && i < 100) {
      if (current.data === val) return current

      if (current.data > val) {
        current = current.left
      } else {
        current = current.right
      }

      i++
    }
    return null
  }

  isPresent(val) {
    return !!this.find(val)
  }

  findMin() {
    let current = this.root

    while (current.left) {
      current = current.left
    }
    return current
  }

  findMax() {
    let current = this.root
    while (current.right) {
      current = current.right
    }
    return current
  }

  bredthFirstSearch() {
    let queue = [this.root]
    let list = []
    let current = null

    while (queue.length > 0) {
      current = queue.shift()
      list.push(current.data)

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return list
  }

  DFSPreOrderMy() {
    let node = this.root
    let preOrderList = []
    let i = 0

    while (node) {
      node?.data &&
        preOrderList.includes(node.data) === false &&
        preOrderList.push(node.data)

      if (node.left && !preOrderList.includes(node.left.data)) {
        node = node.left
      } else if (node.right && !preOrderList.includes(node.right.data)) {
        node = node.right
      } else {
        let index = preOrderList.indexOf(node.data)
        const previosNodeVal = preOrderList.slice(index - 1, index).pop()
        node = this.find(previosNodeVal)
      }
      // if (++i && i === 100) return null
    }
    return preOrderList
  }

  // [root,left,right]
  DFSPreOrder() {
    let node = this.root
    let preOrderList = []
    let i = 0

    function traverse(node) {
      preOrderList.push(node.data)
      node.left && traverse(node.left)
      node.right && traverse(node.right)
    }

    traverse(node)

    return preOrderList
  }

  // [left,right,root]
  DFSPostOrder() {
    let node = this.root
    let postOrder = []

    function traverse(node) {
      node.left && traverse(node.left)
      node.right && traverse(node.right)
      postOrder.push(node.data)
      return postOrder
    }

    return traverse(node)
  }
  // [left,root,right]
  DFSInOrder() {
    let node = this.root
    let postOrder = []

    function traverse(node) {
      node.left && traverse(node.left)
      postOrder.push(node.data)
      node.right && traverse(node.right)
      return postOrder
    }

    return traverse(node)
  }

  print() {
    return this
  }
  //

  prettyPrint() {
    var _printNodes = function (levels) {
      for (var i = 0; i < levels.length; i++) {
        var spacerSize = Math.ceil(40 / ((i + 2) * 2))
        var spacer = new Array(spacerSize + 1).join('  ')
        var lines = levels[i].map(function (val, index) {
          return index % 2 === 0 ? ' /' : '\\ '
        })
        levels[i].unshift('')
        lines.unshift('')
        if (i > 0) {
          console.log(lines.join(spacer))
        }
        console.log(levels[i].join(spacer))
      }
    }

    var _extractNodes = function (node, depth, levels) {
      //traverse left branch
      if (!!node.left) {
        levels = _extractNodes(node.left, depth + 1, levels)
      }

      levels[depth] = levels[depth] || []
      levels[depth].push(node.data)

      //traverse right branch
      if (!!node.right) {
        levels = _extractNodes(node.right, depth + 1, levels)
      }

      return levels
    }

    var _prettyPrintNode = function (node, depth) {
      //traverse left branch
      if (!!node.left) {
        _prettyPrintNode(node.left, depth + 1)
      }

      //print this node
      var indent = ''
      // if (depth > 0) indent = '|';
      indent += new Array(depth + 1).join('  ') //hack to get [depth] number of spaces
      // if (depth > 0) { indent += '| '; }

      console.log(indent + node.data)

      //traverse right branch
      if (!!node.right) {
        _prettyPrintNode(node.right, depth + 1)
      }
    }

    _prettyPrintNode(this.root, 0)

    //     var levels = _extractNodes(this.root, 0, [])
    //     _printNodes(levels)
  }
}

let bst = new BST()
bst.add([10, 5, 13, 11, 2, 16, 7])
// bst.add([10, 5, 13, 11, 2, 16, 7, 6, 8])
// bst.remove(5) // TODO
// bst.findMin()
// bst.findMax()
bst.bredthFirstSearch()
bst.print()

/*
// 10, 5, 13, 11, 2, 16, 7
          i

       null
        10 
      5   13    10<13 ? this.right = newNode 
         11


      10
    5    13
  2  7 11  16


         10
     /       \
    05       13
   / \      /  \
  02  07   11  16
     /  \
    06  08
*/

// tree = {
//     data: 10,
//     left: {
//         data: 5,
//         left: {
//             data: 2,
//             left: null,
//             right: null
//         },
//         right: {
//             data: 7,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         data: 13,
//         left: {
//             data: 11,
//             left: null,
//             right: null
//         },
//         right: {
//             data: 16,
//             left: null,
//             right: null
//         }
//     }
// };

/*

// List:           10, 5, 13, 11, 2, 16, 7
// DFS preOrder:   10, 5, 2, 7, 13, 11, 16 


         10
     /       \
    05       13
   / \      /  \
  02  07   11  16
     /  \
    06  08

        10
       /  \
      /    \
     /      \   
    05       13
   / \      /  \
  /   \    /    \
  02  07  11    16
     /  \
    06  08

    vis = [10]
    
    c=10, l=5
    if -> c.left && not vis.indexOf(c.left)
      current = c.left
    
    vis = [10, 5]
    c=5, L=2
    if -> c.left && not vis.indexOf(c.left) 
      current = c.left

    vis = [10, 5, 2]
    c=2, L=not, R=not
    if -> c.left && not vis.indexOf(c.left)
    elseIf -> c.right && not vis.indexOf(c.right)
    else -> current = vis.indexOf(c) - 1

    vis = [10, 5, 2]
    c=5, L=2 R=7
    if -> c.left && not vis.indexOf(c.left)
    elseIf-> c.right && not vis.indexOf(c.right)
        current = c.right
    
    vis = [10, 5, 2, 7]
    c=7 L=? R=?
    if -> c.left && not vis.indexOf(c.left)
    elseIf -> c.right && not vis.indexOf(c.right)
    else -> current = vis.indexOf(c) - 1

    vis = [10, 5, 2, 7]
    c=2 L=? R=?
    if -> c.left && not vis.indexOf(c.left)
    elseIf -> c.right && not vis.indexOf(c.right)
    else = current = vis.indexOf(c) - 1 // 5

    vis = [10, 5, 2, 7]
    c=5, L=2 R=7
    if -> c.left && not vis.indexOf(c.left)
    elseIf -> c.right && not vis.indexOf(c.right)
    else = current = vis.indexOf(c) - 1 // 10
    

    vis = [10, 5, 2, 7]
    c=10, L=5 R=13
    if -> c.left && not vis.indexOf(c.left) then c=c.left
    elseIf -> c.right && not vis.indexOf(c.right) then c=c.right 
    else = current = vis.indexOf(c) - 1
    
*/

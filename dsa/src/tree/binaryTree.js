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

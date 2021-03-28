console.clear()
console.log(new Date(), '-----------')

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 


//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

           
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17 


//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17 

// class Node {
//   constructor(data, left = null, right = null) {
//     this.data = data
//     this.left = left
//     this.right = right

//     this.x = 0
//     this.y = 0
//   }
// }

// class BST {
//   constructor() {
//     this.root = null
//   }

//   add(data) {
//     /// Handle arr input
//     if (Array.isArray(data)) {
//       data.forEach((el) => this.add(el))
//     }

//     const newNode = new Node(data)
//     if (this.root === null) return (this.root = newNode)

//     let current = this.root
//     let i = 0 // not required just for handle infinte loop.

//     while (i < 50) {
//       if (current.data === data) return undefined // no duplicates allowed

//       /// Left side
//       if (current.data > data) {
//         if (current.left === null) {
//           current.left = newNode
//           return this
//         }
//         current = current.left
//       }

//       /// Right side
//       if (current.data < data) {
//         if (current.right === null) {
//           current.right = newNode
//           return this
//         }
//         current = current.right
//       }

//       i++
//     }
//   }

//   print() {
//     return this
//   }

//   createMatrix = (minX, maxX, depth) => {
//     let displayMatrix = []
//     for (let i = 0; i <= depth; i++) {
//       let line = []
//       for (let j = 0; j <= maxX - minX; j++) {
//         line.push(' ')
//       }
//       displayMatrix.push(line)
//     }
//     return displayMatrix
//   }

//   fillMatrix(node, matrix, minX, side = 'root') {
//     if (node !== null) {
//       matrix[node.y][node.x + Math.abs(minX)] = node.data
//       if (side === 'left') {
//         matrix[node.y - 1][node.x + Math.abs(minX) + 1] = '/'
//       } else if (side === 'right') {
//         matrix[node.y - 1][node.x + Math.abs(minX) - 1] = '\\'
//       }
//       this.fillMatrix(node.left, matrix, minX, 'left')
//       this.fillMatrix(node.right, matrix, minX, 'right')
//     }
//     return matrix
//   }
// }

// let bst = new BST()
// bst.add([10, 5, 13, 11, 2, 16, 7])

// // bst.print()

// console.log(bst.fillMatrix(bst.root))



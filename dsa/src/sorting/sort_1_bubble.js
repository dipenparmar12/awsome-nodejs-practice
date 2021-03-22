let mlog = (...v) => console.log(...v)
let br = console.log
let line = '\n' + Math.floor(Math.random() * 10) + ' ---------'

const bubble_sort = (arr) => {
  let swap = (arr, i_old, i_new) => {
    ;[arr[i_old], arr[i_new]] = [arr[i_new], arr[i_old]]
  }
  let isSwaped // PENDING
  for (let i = 0; i < arr.length - 1; i++) {
    isSwaped = true
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

console.log(bubble_sort([7, 2, 3, 4, 1, 5]))
console.log(bubble_sort([2, 235, 36, 7, 47, 34, 23]))

module.exports = bubble_sort

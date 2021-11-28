const { mlog, br, line } = require('../includes/helpers')

const insertion_sort = (arr = []) => {
  mlog(arr)
  const swap = (a, o, n) => {
    ;[a[o], a[n]] = [a[n], a[o]]
  }
  arr.forEach((current, i) => {
    for (let j = i - 1; j >= 0; j--) {
      if (current < arr[j]) {
        swap(arr, j, j + 1)
      }
    }
  })
  mlog(arr)
  return arr
}

const insertion_sort__optimized = (arr = []) => {
  mlog(arr)
  const swap = (a, o, n) => {
    ;[a[o], a[n]] = [a[n], a[o]]
  }
  arr.forEach((current, i) => {
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      if (current < arr[j]) {
        swap(arr, j, j + 1)
      }
    }
  })
  mlog(arr)
  return arr
}

insertion_sort([3, 2, 1, 4, 5])
insertion_sort__optimized([3, 44, 38, 5, 47, 5])

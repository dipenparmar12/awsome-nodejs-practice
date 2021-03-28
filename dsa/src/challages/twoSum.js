console.clear()

function uniqueVal(arr, sum = 13) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    tSum = arr[left] + arr[right]

    if (tSum === sum) {
      return [arr[left], arr[right]]
    } else if (tSum > sum) {
      right--
    } else {
      left++
    }
  }
  return -1
}

uniqueVal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10)

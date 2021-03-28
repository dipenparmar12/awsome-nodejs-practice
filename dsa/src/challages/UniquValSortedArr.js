console.clear()

function uniqueVal(arr) {
  if (arr.length === 0) return 0
  let count = 0
  let i = 1
  while (i < arr.length) {
    if (arr[count] != arr[i]) {
      count++
      arr[count] = arr[i]
    }
    i++
  }
  return [count, arr]
}

uniqueVal([1, 1, 2, 3, 3, 4])

/*         c-3
     [ 1, 2, 3, 3, 3, 4 ]
                i
*/

uniqueVal([0, 1, 5, 3, 3, 5, 7, 7, 8, 9])

function test1(arr) {
  if (arr.length === 0) return 0
  let count = 0
  let i = 1

  while (i < arr.length) {
    arr[count] != arr[i] && (arr[++count] = arr[i])

    i++
  }
  return [count, arr]
}

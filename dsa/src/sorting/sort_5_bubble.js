console.clear()
//  Bubble sort
function sortBubble(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      current = arr[j]
      next = arr[j + 1]

      if (current > next) {
        arr[j] = next
        arr[j + 1] = current
      }
    }
  }
  return arr
}

//  Recusive bubble sort
function sortBubbleR(arr, i = 0, j = 0) {
  //   console.log(arr,i,j)
  if (i >= arr.length) return arr

  for (j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
  return sortBubbleR(arr, ++i, j)
}

// sortBubble([5,3,4,1,7,2])
sortBubble([2, 235, 36, 7, 47, 34, 23])
// sortBubble([7,5,4,2])

// sortBubbleR([7,5,4,2])
sortBubbleR([5,3,4,1,7,2])
// sortBubbleR([2, 235, 36, 7, 47, 34, 23])

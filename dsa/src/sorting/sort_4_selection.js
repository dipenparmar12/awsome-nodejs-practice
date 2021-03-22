console.clear()

//  Recursive selectionSort
function selSortR(arr, i = 0, j = 0) {
  //   console.log(i, arr[i], arr)
  if (j >= arr.length) return arr
  if (i >= arr.length - 1) return arr

  min = arr[i]
  if (min > arr[j]) {
    min = arr[j]
    arr[i] = arr.splice(j, 1, arr[i])[0] // swap element
  }

  selSortR(arr, i, ++j)
  return selSortR(arr, ++i, ++j)
}

//  Simple selectionSort
function selSort(arr) {
  function swap(one, two) {
    temp = arr[one]
    arr[one] = arr[two]
    arr[two] = temp
    [arr[one], arr[two]] = [arr[two], arr[one]]
  }

  for (i = 0; i < arr.length; i++) {
    min = arr[i]
    for (j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j]
        swap(i, j)
      }
    }
  }

  console.log(min, arr)
}

selSort([5, 3, 4, 1, 2])
selSort([7, 5, 4, 2])

selSortR([5, 3, 1, 4, 2])
selSortR([7, 5, 4, 2])

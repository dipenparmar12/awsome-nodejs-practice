let mlog = (...v) => console.log(...v)
let br = console.log
let line = '\n' + Math.floor(Math.random() * 10) + ' ---------'

let selection_sort = arr => {
  min = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // LOG
      // mlog(arr, `m:${arr[min]}, i:${arr[i]}, j:${arr[j]}`)
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }

  return arr
}

data = [19, 44, 38, 5, 47, 15]
// br(line)
// mlog(data)
// selection_sort(data)

module.exports = selection_sort

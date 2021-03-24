function shuffle(arr) {
  let last = arr.length
  let random

  let rand = (n) => Math.floor(Math.random() * n)

  let swap = function (arr, a, b) {
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
  }

  while (last > 0) {
    random = rand(last)
    swap(arr, --last, random)
  }

  return arr
}

// var arr = [10, 15, 8, 6, 2, 4, 17, 20, 13]
// shuffle(arr)

module.exports = { shuffle }

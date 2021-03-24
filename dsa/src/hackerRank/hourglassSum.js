console.clear()

function test(arr) {
  let max_sum = 0
  let temp_sum = null

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      temp_sum = 0
      // top row
      temp_sum += arr[i][j]
      temp_sum += arr[i][j + 1]
      temp_sum += arr[i][j + 2]
      //middle
      temp_sum += arr[i + 1][j + 1]
      //bottom row
      temp_sum += arr[i + 2][j]
      temp_sum += arr[i + 2][j + 1]
      temp_sum += arr[i + 2][j + 2]

      //if first hourglass, set as max
      if (temp_sum > max_sum || (i == 0 && j == 0)) max_sum = temp_sum
    }
  }
  return max_sum
}

arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
] // output 19

console.log(test(arr))

arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
] // 13

console.log(test(arr))

arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
] // 28

console.log(test(arr))

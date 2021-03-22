arr = [0, 1, 2, 3, 4, 5];

function swap(arr, x, y) {
  arr[x] = arr.splice(y, 1, arr[x])[0];
  return arr;
}

function swap1(arr, x, y) {
  temp = arr[y];
  arr[y] = arr[x];
  arr[x] = temp;
  return arr;
}

swap(arr, 0, 1);
swap1(arr, 2, 3);

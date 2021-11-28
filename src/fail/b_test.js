// function b(arr, e) {
//   min = 0;
//   max = arr.length - 1;
//   mid = Math.floor((min + max) / 2);

//   while (min <= max) {
//     console.log(min, mid, max, arr[min], arr[mid], arr[max]);
//     if (arr[mid] == e) {
//       console.log("YES ");
//     } else if (arr[mid] < e) {
//       min = mid + 1;
//     } else {
//       max = min - 1;
//     }
//     mid = ((min + max) / 2);
//     break
//   }

//   console.log("Not");
// }

// b([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
// b([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
// b([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);

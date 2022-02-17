console.clear();

const arrChuk = (arr, chunkSize) => {
  if (!Array.isArray(arr)) return false; // should be array
  if (arr.constructor !== [].constructor) return false; // should be array
  if (!Number.isFinite(chunkSize)) return false; // should be number
  if (chunkSize < 0) return false; // should be greater then zero

  let output = [];
  for (let i = 0; i <= arr.length - 1; i += chunkSize) {
    const arrChunk = arr.slice(i, i + chunkSize);
    output.push(arrChunk);
  }

  // let inx = 0;
  // while (inx < arr.length) {
  //   output.push(arr.slice(inx, inx + chunkSize));
  //   inx += chunkSize;
  // }

  // function each(callback, len, inc = 1) {
  //   let inx = 0;
  //   while (inx < len) {
  //     callback(inx);
  //     inx += inc;
  //   }
  // }

  return output;
};

arrChuk([1, 2, 3, 4, 5, 6, 7, 8], 2);
arrChuk([1, 2, 3, 4, 5, 6, 7, 8], 3);
// arrChuk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1);
// arrChuk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5);

module.exports = arrChuk;

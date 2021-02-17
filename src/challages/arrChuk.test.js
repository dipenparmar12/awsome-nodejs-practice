const arrChunk = require('./arrChuk');

test('arrChunk fn is must be defined & exists', () => {
  expect(arrChunk).toBeDefined();
  expect(typeof arrChunk).toEqual('function');
});

test('should be valid input', () => {
  expect(arrChunk([], 1)).toBeTruthy(); 
});

test('should be not valid input', () => {
  expect(arrChunk([], -1)).toBeFalsy();
  expect(arrChunk('', 1)).toBeFalsy();
  expect(arrChunk(1, -1)).toBeFalsy();
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = arrChunk(arr, 2);
  expect(chunked).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = arrChunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('chunk divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = arrChunk(arr, 3);

  expect(chunked).toEqual([
    [1, 2, 3],
    [4, 5],
  ]);
});

test('chunk divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = arrChunk(arr, 5);

  expect(chunked).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13],
  ]);
});

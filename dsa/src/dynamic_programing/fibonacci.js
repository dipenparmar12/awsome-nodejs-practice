console.clear();

// 1. Simple For loop
const fibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  let first = 1;
  let last = 1;
  let list = [];
  for (let i = 1; i <= n; i++) {
    let next = first + last;
    first = last;
    last = next;
    list.push(next);
  }
  console.log('fibonacci:', n, list);
  return list.reduce((prev, current) => prev + current, 0);
};

// fibonacci(3);
// fibonacci(6);
// fibonacci(10);
// fibonacci(30);

// 2. recursive
const fibonacciRec = (n) => {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
};

// console.log(fibonacciRec(3));
// console.log(fibonacciRec(4));
// console.log(fibonacciRec(5));
// console.log(fibonacciRec(6));
// console.log(fibonacciRec(7));
// console.log(fibonacciRec(8));
// console.log(fibonacciRec(20));

// 2. recursive dynamic (memoization)
const fibonacciRecDynamic = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  memo[n] = fibonacciRecDynamic(n - 1, memo) + fibonacciRecDynamic(n - 2, memo);
  return memo[n];
};

// console.log(fibonacciRecDynamic(1));
// console.log(fibonacciRecDynamic(2));
// console.log(fibonacciRecDynamic(3));
// console.log(fibonacciRecDynamic(4));
// console.log(fibonacciRecDynamic(5));
// console.log(fibonacciRecDynamic(6));
// console.log(fibonacciRecDynamic(7));
// console.log(fibonacciRecDynamic(8));
// console.log(fibonacciRecDynamic(25));

module.exports = fibonacciRecDynamic;
module.exports.fibonacciRec = fibonacciRec;
module.exports.fibonacci = fibonacci;
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

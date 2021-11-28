/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  let number; // LVIII
  let map =
  {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  }
  let numbers = s.split('').map((v, k) => { return map[v] })
  console.log(numbers)
  i = s.length - 1
  while (i > 0) {
    i--
  }
  return number
};

let xx
let xxxx
let xxxxxx
let xxxxxxxx

// xx = romanToInt('III') //3
// xxxx = romanToInt('IV') // 4
xxxxxx = romanToInt('LVIII') // 58
// xxxxxxxx = romanToInt('MCMXCIV') // 1994



console.log(xx, xxxx, xxxxxx, xxxxxxxx);





module.exports = romanToInt;
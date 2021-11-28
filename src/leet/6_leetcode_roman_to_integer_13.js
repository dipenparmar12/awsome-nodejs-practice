let mlog = function log(...v) { console.log(...v) }
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  let number = 0; // LVIII
  let map =
  {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
    'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900,
  }

  while (s.length > 0) {
    let lastLetter = s.substr(s.length - 1, 1)
    let last_twoLetter = s.substr(s.length - 2, 2)
    if (last_twoLetter in map) {
      s = s.substr(0, s.length - 2)
      number += map[last_twoLetter]
    } else {
      number += map[lastLetter]
      s = s.substr(0, s.length - 1)
    }
  }

  return number
};
let xx
let xxxx
let xxxxxx
let xxxxxxxx

xx = romanToInt('"MMMXLV"') // 3045
xxxx = romanToInt('MCDLXXVI') // 1476
xxxxxx = romanToInt('XCVIII') // 98
xxxxxxxx = romanToInt('MCMXCIV') // 1994

console.log(xx, xxxx, xxxxxx, xxxxxxxx);





module.exports = romanToInt;

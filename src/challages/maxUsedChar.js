console.clear();

const maxUsedChar = (str) => {
  str = str.toLowerCase();

  let maxChar = '';
  let maxTimes = 0;
  let chars = {};

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let [char, times] of Object.entries(chars)) {
    if (maxTimes <= times) {
      maxChar = char;
      maxTimes = times;
    }
  }

  return maxChar;
};

// maxUsedChar('abc sdd');
// maxUsedChar('abbceecdddee');
// maxUsedChar('abbbbccdddee');
// maxUsedChar('abcssdd');
// maxUsedChar('aaabbcc');
// maxUsedChar('12345');
// maxUsedChar('oooo');
// maxUsedChar('1234567890');

module.exports = maxUsedChar;

// const s = '😄😅😄😄😅😅😄😄😱😱😄';
// function getMostFrequentChar(s) {
//   const len = s.length;
//   const freq = {};
//   let maxFreq = 0;
//   let maxChar;
//   for (let i = 0; i < len; ++i) {
//     const isPair = (s.charCodeAt(i) & 0xf800) == 0xd800;
//     const c = isPair ? s.substr(i++, 2) : s[i];
//     const f = (freq[c] || 0) + 1;
//     freq[c] = f;
//     if (f > maxFreq) {
//       maxFreq = f;
//       maxChar = c;
//     }
//   }
//   return { maxFreq, maxChar, freq };
// }
// console.log(getMostFrequentChar(s));

////////////////////////
////////////////////////
// function findHighestFreqInString(str) {
// 	if (!str) return null
// 	let cleanedStr = str.replace(/\s/g, '') //assumes no spaces needed
// 	if (cleanedStr.length === 0) return null
// 	let strObj = {}
// 	let topChar = ''
// 	for (let val of cleanedStr) {
// 			strObj[val] = (strObj[val] || 0) + 1
// 			if (topChar === '' || strObj[val] >= strObj[topChar]) topChar = val
// 	}
// 	return topChar
// }
// findHighestFreqInString('my name is Someone') // returns: e
// findHighestFreqInString('') // returns: Null
// findHighestFreqInString('    ') // returns: Null

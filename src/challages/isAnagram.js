console.clear();

const isAnagram = (s1, s2) => {
  /// valid input
  if (typeof s1 !== 'string' && typeof s2 !== 'string') return false;
  if (isNull(s1) && isNull(s2)) return false;
  if (s1.length !== s2.length) return false;

  let tempStr = s2;
  for (let char of s1) {
    tempStr = tempStr.replace(new RegExp(char, 'i'), '');
  }
  // console.log(tempStr.length === 0);
  return tempStr.length === 0;

  /// Method 2
  // s2 = s2.toLowerCase().replace('/[^w]/', '').split('').sort();
  // return s1
  //   .toLowerCase()
  //   .replace('/[^w]/', '')
  //   .split('')
  //   .sort()
  //   .every((v, i) => v === s2[i]);
};

isAnagram('one', 'eno');
isAnagram('one', 'enoe');
isAnagram(' e o n e', 'eno e');
isAnagram('rail safety', 'fairy tales');

module.exports = isAnagram;

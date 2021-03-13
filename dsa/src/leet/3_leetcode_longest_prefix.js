let log = function log(...v) {
  console.log(...v);
};

let longestCommonPrefix = function (strs) {
  if (strs == null || strs.length == 0) return '';

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix == '') {
        return '';
      }
    }
  }

  return prefix;
};

let b = ['ab', 'abc', 'abcd', 'abcd', 'abcd'];
let bb = ['ffd', 'ffds', 'ff', 'ffds', 'ffdsdds', 'ffdsdds'];
let bbb = ['fdfda', 'fdfda', 'fdfdabcd', 'fdfdafdfd', 'fdfdaaddsad'];
let bbbb = ['flow', 'flower', 'flight'];

log(longestCommonPrefix([]));
log(longestCommonPrefix('a'));
log(longestCommonPrefix(b));
log(longestCommonPrefix(bb));
log(longestCommonPrefix(bbb));
log(longestCommonPrefix(bbbb));
log(longestCommonPrefix(['abab', 'aba', 'abc']));

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  console.clear()
  return str.split('').every((char, i) => {
    // console.log(
    //   char, str[str.length - i - 1], str.length - i - 1, char === str[str.length - i - 1]
    // )
    return char === str[str.length - i - 1];
  });
}
palindrome('abba')

module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return str === reversed;
// }

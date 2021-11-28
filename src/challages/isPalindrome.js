console.clear();

const isPalindrome = (str) => {
  return str.split('').reverse().join('') === str;
};

module.exports = isPalindrome;

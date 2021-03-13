const isPalindrome = require('./isPalindrome');

test('isPalindrome function exists', () => {
  expect(isPalindrome).toBeDefined();
});

test('given value should be Palindrome ', () => {
  expect(isPalindrome('ABA')).toBeTruthy();
  expect(isPalindrome(`1ABA1`)).toBeTruthy();
  expect(isPalindrome('')).toBeTruthy();
  expect(isPalindrome('111')).toBeTruthy();
});

test('given value should not be Palindrome ', () => {
  expect(isPalindrome('1ABA')).toBeFalsy();
  expect(isPalindrome('ABA1')).toBeFalsy();
});

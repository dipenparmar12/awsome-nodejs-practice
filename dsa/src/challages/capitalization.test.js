const capitalization = require('./capitalization');

test('isAnagram must be defined & shoud be type of function', () => {
  expect(capitalization).toBeDefined();
  expect(typeof capitalization).toEqual('function');
});

test('should be valid input', () => {
  expect(capitalization(null)).toBeFalsy();
  expect(capitalization([1])).toBeFalsy();
  expect(capitalization(1)).toBeFalsy();
  expect(capitalization({})).toBeFalsy();
});

describe('test actual functionality', () => {
  expect(capitalization('a b c')).toEqual('A B C');
  expect(capitalization('!abc d')).toHaveLength(6);
  expect(capitalization('!abc d')).toEqual('!abc D');
  expect(capitalization('hI THERE')).toEqual('Hi There');
});

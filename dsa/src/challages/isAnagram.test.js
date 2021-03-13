const isAnagram = require('./isAnagram');

test('isAnagram fn must be defined & exist', () => {
  expect(isAnagram).toBeDefined();
  expect(typeof isAnagram).toEqual('function');
});

test('should be valid input', () => {
  expect(isAnagram(null, null)).toBeFalsy();
  expect(isAnagram([1], [1])).toBeFalsy();
  expect(isAnagram(1, 'a')).toBeFalsy();
});

describe('Test functionality', () => {
  test('"hello" is an anagram of "llohe"', () => {
    expect(isAnagram('hello', 'llohe')).toBeTruthy();
  });

  test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(isAnagram('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
  });

  test('"One One" is not an anagram of "Two two two"', () => {
    expect(isAnagram('One One', 'Two two two')).toBeFalsy();
  });

  test('"One one" is not an anagram of "One one c"', () => {
    expect(isAnagram('One one', 'One one c')).toBeFalsy();
  });

  test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(isAnagram('A tree, a life, a bench', 'A tree, a fence, a yard')).toBeFalsy();
  });
});

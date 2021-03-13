const maxUsedChar = require('./maxUsedChar');

test('maxUsedChar function exists', () => {
  expect(typeof maxUsedChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxUsedChar('a')).toEqual('a');
  expect(maxUsedChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxUsedChar('ab1c1d1e1f1g1')).toEqual('1');
});

test('Expect implementation not to be case sensitive', () => {
  expect(maxUsedChar('a')).toEqual('a');
  expect(maxUsedChar('bbbcdefaaAA')).toEqual('a');
});

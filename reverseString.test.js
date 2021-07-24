const reverseString = require('./reverseString.js');

describe('reverseString(string)  - a function that takes any string as an argument and returns it reversed', () => {
  test('reverseString("abc") should return a "cba".', () => {
    expect(reverseString('abc')).toBe('cba');
  });

  test('reverseString("1234567") should return a "7654321".', () => {
    expect(reverseString('1234567')).toBe('7654321');
  });

  test('reverseString("") should return an error message.', () => {
    expect(reverseString('')).toBe('String should be a least 1 character long and not longer than 10 characters');
  });

  test('reverseString("abcdefghijklmnopqrstuvwxyz") should return an error message.', () => {
    expect(reverseString('abcdefghijklmnopqrstuvwxyz')).toBe('String should be a least 1 character long and not longer than 10 characters');
  });
});

const stringLength = require('../stringLength.js');

describe('stringLength  - a function that takes any string as an argument and returns its characters count', () => {
  test('stringLength("abc") should return a 26.', () => {
    expect(stringLength('abc')).toBe(3);
  });

  test('stringLength("1234567") should return a 26.', () => {
    expect(stringLength('1234567')).toBe(7);
  });

  test('stringLength("") should return an error message.', () => {
    expect(stringLength('')).toBe('String should be a least 1 character long and not longer than 10 characters');
  });

  test('stringLength("abcdefghijklmnopqrstuvwxyz") should return an error message.', () => {
    expect(stringLength('abcdefghijklmnopqrstuvwxyz')).toBe('String should be a least 1 character long and not longer than 10 characters');
  });

});

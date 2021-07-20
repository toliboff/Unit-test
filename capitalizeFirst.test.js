const capitalizeString = require('./capitalizeString.js');

describe('capitalizeString(string)  - a function that takes a string as an argument and returns that string with the first character capitalized', () => {
  test('capitalizeString("abc") should return a "Abc".', () => {
    expect(capitalizeString('abc')).toBe('Abc');
  });

  test('capitalizeString("jOHN") should return a "JOHN".', () => {
    expect(capitalizeString('jOHN')).toBe('JOHN');
  });

  test('capitalizeString("TOLIB") should return a "TOLIB".', () => {
    expect(capitalizeString('TOLIB')).toBe('TOLIB');
  });

  test('capitalizeString("") should return an error message.', () => {
    expect(capitalizeString('')).toBe('String should be a least 1 character long and not longer than 10 characters');
  });

  test('capitalizeString("abcdefghijklmnopqrstuvwxyz") should return an error message.', () => {
    expect(capitalizeString('abcdefghijklmnopqrstuvwxyz')).toBe('String should be a least 1 character long and not longer than 10 characters');
  });
});

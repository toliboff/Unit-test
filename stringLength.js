const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    return 'String should be a least 1 character long and not longer than 10 characters';
  }
  return str.length;
};

module.exports = stringLength;
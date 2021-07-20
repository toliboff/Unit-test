const capitalizeString = (str) => {
  if (str.length < 1 || str.length > 10) {
    return 'String should be a least 1 character long and not longer than 10 characters';
  }
  return str[0].toUpperCase() + str.slice(1);
};

module.exports = capitalizeString;
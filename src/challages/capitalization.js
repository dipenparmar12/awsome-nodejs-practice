console.clear();

const capitalization = (str) => {
  if (typeof str !== 'string' || str.constructor !== String) return false;

  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// capitalization('');
// capitalization(1);
// capitalization(0);
// capitalization([]);
// capitalization('capitalization');
// capitalization('a this is nO where go');
// capitalization('hi there iTs dipen h');

module.exports = capitalization;

/**
 * Create an object composed of the picked object properties
 * @param {Object} myObj
 * @returns {Object}
 */
const objToLowerCase = (myObj) => {
  if (!myObj) {
    return;
  }
  if (typeof myObj !== 'Object' && typeof myObj !== 'object') {
    return;
  }
  const keys = Object.keys(myObj);
  const result = {};
  // eslint-disable-next-line array-callback-return
  keys.map(function (k, v) {
    if (typeof k === 'string') {
      if (typeof myObj[k] === 'string') {
        result[k.toLowerCase()] = myObj[k].toLowerCase();
      } else {
        result[k] = myObj[k];
      }
    }
  });
  return result;
};

module.exports = objToLowerCase;

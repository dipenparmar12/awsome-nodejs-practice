/**
 * Get instanceOf
 * @param {Object} object
 * @param consoleLog
 * @returns {Object}
 */
const getInstanceOf = (object, consoleLog = false) => {
  if (consoleLog) {
    console.log('getInstanceOf::', object.constructor.name);
  }
  return object.constructor.name;
};

// const onlyDefinedKeys = getInstanceOf("something");
module.exports = getInstanceOf;

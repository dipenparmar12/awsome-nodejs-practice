/**
 * Remove undefined values from given object recursive
 * @param {Object} obj
 * @returns {object}
 */
const removeUndefined = (obj) => JSON.parse(JSON.stringify(obj));

// const removeUndefined = (obj) => {
//   return Object.keys(obj)
//     .filter((key) => obj[key])
//     .reduce((newObj, key) => {
//       // eslint-disable-next-line no-param-reassign
//       newObj[key] = obj[key];
//       return newObj;
//     }, {});
// };

module.exports = removeUndefined;

/// Src: https://www.reddit.com/r/node/comments/6ogdlh/best_way_to_delete_undefined_values_from_an_object/
/// Src: https://stackoverflow.com/questions/25421233/javascript-removing-undefined-fields-from-an-object

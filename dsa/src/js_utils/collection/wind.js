console.clear()
console.log(new Date(), '-----------')

/**
 * opposite of unwind
 * @param {Array} arrayOfObjects - array of objects
 * @param {String|[String]} keys to group by
 * @example
 * //  var hobbies = [
//   { name: 'Dipen', hobby: 'cricket' },
//   { name: 'Dipen', hobby: 'football' },
//   { name: 'Hitesh', hobby: 'Chess' },
//   { name: 'Hitesh', hobby: 'Swimming' },
// ]
// var persons = groupBy(hobbies, 'name')
// [
//   { name: 'Dipen', hobbies: ['cricket', 'football'], colors: ['RED', 'GREEN'] },
//   { name: 'Hitesh', hobbies: ['Chess', 'Swimming'], colors: ['BLUE'] },
// ]
 */
// function groupBy(arrayOfObjects, keys) {
//   Array.isArray(keys) || (keys = [keys])
//   return arrayOfObjects.reduce((acc, obj) => {
//     const key = keys.map(k => obj[k]).join('-');
//     if (!acc[key]) {
//       acc[key] = {};
//     }
//     keys.forEach((k) => {
//       acc[key][k] = obj[k];
//     });
//     return acc;
//   }, {});
// }

var testInventory = [
  { name: 'apples', qty: 2, dry: true },
  { name: 'bananas', qty: 0, dry: false },
  { name: 'cherries', qty: 5, dry: false },
  { name: 'cherries', qty: 2, dry: true },
  { name: 'apple', qty: 3, dry: true },
  { name: 'kivi', qty: 10, dry: true },
]
const groupBy = (arr, key) =>
  arr.reduce(
    (acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc),
    {},
  )

  console.log(
    '-------------------',
    groupBy(testInventory, 'name') 
  )

  console.warn('-------------------', )

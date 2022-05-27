console.clear()
console.log(new Date(), '-----------')
const log = console.log


/**
 * Replace all placeholders in a string with the values of an object.
 * @param {String} str 
 * @param {Object} obj 
 * @param {RegExp} pattern 
 * @returns {String} 
 * @example 
 * const str = 'Hello {name}!'
 * const obj = { name: 'world' }
 * const pattern = /{([^}]+)}/g
 * replacePlaceholders(str, obj, pattern) // 'Hello world!'
 * @example 2 
 * const str = 'Hello ${NAME}!'
 * const obj = { NAME: 'world' }
 * const pattern = /\$\{([^}]+)\}/g
 * replacePlaceholders(str, obj, pattern) // 'Hello world!'
 */
function replacePlaceholders(str, obj, pattern = /\{\{(.*?)\}\}/g) {
  return str.replace(pattern, function(match, key) {
    return obj[key] || ''
  })
  // return str.replace(pattern, (match, key) => obj[key] || '')
}


const str = 'Hello ${NAME} ${name}! ${AGE}'
const obj = { NAME: 'parmar', AGE: 1001 }
const pattern = /\$\{([^}]+)\}/g
replacePlaceholders(str, obj, pattern)


console.log(
  replacePlaceholders(str, obj, pattern)
)

// default export replacePlaceholders
// module.exports = replacePlaceholders
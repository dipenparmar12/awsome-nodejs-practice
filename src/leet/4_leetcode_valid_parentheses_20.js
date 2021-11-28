// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

let log = function log(...v) { console.log(...v) }
/**
 * @param {string}
 * @return {boolean}
 */

const isValid = function (s = '') {
  let maping = { '(': ')', '{': '}', '[': ']' }
  let holder = []

  for (const i of s) {
    if (i in maping) {
      holder.push(i)
    } else {
      const lastPara = holder.pop()
      if (maping[lastPara] != i) {
        return false
      }
    }
  }

  if (holder.length == 0) {
    return true
  }

  return false

};

log(isValid('()'))
log(isValid('[]'))
log(isValid('{}[]}}'))
log(isValid('{}([{}]){}'))
log(isValid('()()()'))
log(isValid('({({([[[()()()]]])})})'))
log(isValid('(}{)'))
log(isValid('[}]'))
log(isValid(''))
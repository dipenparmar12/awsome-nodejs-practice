let mlog = function log(...v) {
  console.log(...v)
}
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var multiply = function (num1, num2) {
    for (let i = 0; i < num1.length; i++) {
      const e = num1[i];
      mlog(e,i)
    }
};


mlog(multiply(["a","b","c","d"], "456"))
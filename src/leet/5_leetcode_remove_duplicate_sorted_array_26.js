let log = function log(...v) { console.log(...v) }
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  // return nums.filter((v, k, a) => {
  //   // log(k, v, nums[k + 1] != v)
  //   if (nums[k + 1] != v) {
  //     return v
  //   }
  // })

  return Array.from(new Set(nums))

  // let i=0,j=0;
  // for (l = nums.length; i < l; i++) {
  //   if (nums[j] !== nums[i]) {
  //     nums[++j] = nums[i];
  //   }
  // }
  // return j + 1;

};


log(removeDuplicates([]))
log(removeDuplicates([1, 1, 1, 2]))
log(removeDuplicates([1, 1, 2, 2, 2, 3, 3, 3, 4]))
log(removeDuplicates([1, 1, 1, 2, 2, 2, 3]))
log(removeDuplicates([0, 0, 0, 1, 1, 1, 3, 4, 4, 4, 6, 6, 6]))
log(removeDuplicates([0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 9, 9]))
log(removeDuplicates([1, 1, 2]))
log(removeDuplicates([3, 4, 5, 5, 5, 6, 8, 8, 9, 9]))
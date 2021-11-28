/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let elements = {}
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in elements) {
            return [elements[target - nums[i]], i]
        } else {
            elements[nums[i]] = i
        }
    }
    return false
}

// nums = [-1, -2, -3, -4, -5]
nums = [3, 2, 95, 4, -3]
target = 1
console.log(twoSum(nums, target))
/* """
# Definition: https://leetcode.com/problems/running-sum-of-1d-array/solution/
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
*/

// function runningSum(list){
//     let sumList = []
//     for (const i in list) {
//         if(sumList.length === 0){
//             sumList[0] = list[i]
//         } else {
//             sumList[i] = sumList[i - 1] + list[i]
//         }
//     }
//     console.log("output:", sumList)
//     return sumList
// }

function runningSum(list){
    for (let i = 1; i < list.length; i++) {
        list[i] = list[i - 1] + list[i]
    }
    console.log("output:", list)
    return list
}

runningSum([2, 3, 4, 5])
runningSum([1, 2, 3, 4, 5])

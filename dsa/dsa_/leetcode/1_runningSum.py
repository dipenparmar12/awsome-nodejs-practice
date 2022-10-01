"""
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
"""

# def runningSum(nums):
#     sum = 0
#     sumList = []
#     for num in nums:
#         sum += num
#         sumList.append(sum)
#     print(sumList)

# runningSum([1, 2, 3, 4])


# def runningSum(nums):
#     sumList = []
#     for i, num in enumerate(nums):
#         if len(sumList) == 0:
#             sumList.append(num)
#         else:
#             sumList.append(sumList[i-1] + num)
#     print(sumList)


def runningSum(nums):
    for i in range(1, len(nums)):
        nums[i] += nums[i - 1]
    return nums


runningSum([2, 3, 4, 5])
runningSum([1, 2, 3, 4, 5])

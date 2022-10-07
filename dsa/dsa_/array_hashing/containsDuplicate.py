
'''
Definition: https://leetcode.com/problems/contains-duplicate/submissions/
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.


Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Runtime: 1144 ms, faster than 16.99 % of Python3 online submissions for Contains Duplicate.
Memory Usage: 25.9 MB, less than 66.46 % of Python3 online submissions for Contains Duplicate.

'''


class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        data = set()
        for el in nums:
            if el in data:
                return True
            else:
                data.add(el)

        return False

    # def containsDuplicate(self, nums: list[int]) -> bool:
    #     di = {}
    #     for el in nums:
    #         if di.get(el):
    #             return True
    #         else:
    #             di[el] = True
    #     return False


print('1,2,3,1] ->', Solution().containsDuplicate([1, 2, 3, 1]))  # True
print('1,2,3,4] ->', Solution().containsDuplicate([1, 2, 3, 4]))  # False
print('1,1,1,3,3,4,3,2,4,2] ->',
      Solution().containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))  # True

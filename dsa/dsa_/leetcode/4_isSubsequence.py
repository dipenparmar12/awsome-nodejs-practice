"""

Definition: https://leetcode.com/problems/find-pivot-index/solution/

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
of the characters without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).


--- Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

--- Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false


--- Example 3:
Input: s = "acb", t = "ahbgdc"
Output: false


# 2:35 PM - 13:20 PM (45 Minutes)
# Runtime: 74 ms, faster than 12.11% of Python3 online submissions for Is Subsequence.
# Memory Usage: 13.7 MB, less than 98.86% of Python3 online submissions for Is Subsequence.

"""

import os
os.system('clear')


def isSubsequence(s, t):
    for char in t:
        if len(s) > 0 and s[0] == char:
            s = s[1:]

    # print("output: ", len(s) == 0, len(s), s, t)
    return len(s) == 0


# t = "bah_gbadcb"
# i = t.index('_')
# print(i)
# print(t[:i] + t[i:].replace('b', '_'))

"""
def isSubsequence(s, t):
    max_index = 0
    for char in s:
        if char not in t[max_index:] or max_index == len(t):
            print(False, s, t)
            return False
        max_index += t[max_index:].index(char) + 1
    print(True, s, t)
    return True

"""

isSubsequence('abc', 'ahbgdc')  # TRUE
isSubsequence('axc', 'ahbgdc')  # FALSE
isSubsequence('acb', 'ahbgdc')  # FALSE

"""
Definition: https://leetcode.com/problems/length-of-last-word
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

--- Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

--- Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.


--- Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Runtime: 24 ms, faster than 99.19% of Python3 online submissions for Length of Last Word.
Memory Usage: 13.9 MB, less than 38.97% of Python3 online submissions for Length of Last Word.

"""

import os
os.system('clear')


def lengthOfLastWord(s):
    return len(s.strip().split(' ')[-1])


# def lengthOfLastWord(s):
#     s = s.strip()
#     if s.find(" ") == -1:
#         return len(s)
#     return len(s[s.rindex(" ")+1:])


print(lengthOfLastWord("Hello World"))  # 5
print(lengthOfLastWord("   fly me   to   the moon  "))  # 4
print(lengthOfLastWord("ss"))  # 2


# ONLINE
# def lengthOfLastWord(self, s: str) -> int:
#     splitted = s.split(' ')
#     i = 0
#     while True:
#         candidate = splitted[-1-i]
#         if candidate != '':
#             return len(candidate)
#         i += 1

# def lengthOfLastWord(self, s: str) -> int:
#     i = len(s) - 1
#     res = 0
#     while True:
#         if i == -1 or (res > 0 and s[i] == " "):
#             break
#         if s[i] != " ":
#             res += 1
#         i -= 1
#     return res

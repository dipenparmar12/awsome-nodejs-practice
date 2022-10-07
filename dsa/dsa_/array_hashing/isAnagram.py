"""
Definition: https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 


Runtime: 149 ms, faster than 7.64% of Python3 online submissions for Valid Anagram.
Memory Usage: 14.5 MB, less than 67.12% of Python3 online submissions for Valid Anagram.
"""

import os
os.system('clear')


class Solution:

    def _isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        data = {}
        for i in range(0, len(s)):
            data[s[i]] = data.get(s[i], 0) + 1
            data[t[i]] = data.get(t[i], 0) - 1

            if data[s[i]] == 0:
                data.pop(s[i])

        for el in data:
            if data[el] != 0:
                return False

        return True

        print(Counter(s), Counter(t))
        seen = {}
        seen2 = {}
        for i in s:
            seen[i] = seen.get(i, 0) + 1
        for j in t:
            seen2[j] = seen2.get(j, 0) + 1
        print(seen, seen2)
        return seen == seen2

    def isAnagram1(self, s: str, t: str) -> bool:
        letters = set(list(s+t))

        for letter in letters:
            if s.count(letter) != t.count(letter):
                return False
        return True

    def isAnagram2(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        hash_map = {}
        for ch in s:
            hash_map[ch] = hash_map.get(ch, 0) + 1
        for ch in t:
            hash_map[ch] = hash_map.get(ch, 0) - 1
        for val in hash_map.values():
            if val != 0:
                return False
        return True


print("'aba', 'baa' -> ", Solution().isAnagram('aba', 'baa'))  # True
print("'rat', 'cat' -> ", Solution().isAnagram('rat', 'cat'))  # False
print("'abc', 'aaa' -> ", Solution().isAnagram('aaa', 'aaa'))  # True
print("'abc', 'a' -> ", Solution().isAnagram('abc', 'a'))  # False

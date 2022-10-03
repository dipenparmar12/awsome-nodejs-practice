"""
1578. Minimum Time to Make Rope Colorful
# Definition: https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
Medium
Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.
Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.
Return the minimum time Bob needs to make the rope colorful.

1st attempt: 2 hours
2nd attempt: TODO::DSA
s
"""

# class Solution:
#     def minCost(self, colors: str, neededTime: List[int]) -> int:
#         time = 0

#         for i, c in enumerate(colors):
#             if len(colors) > i + 1 and colors[i] == colors[i + 1]:
#                 if neededTime[i] < neededTime[i + 1]:
#                     time += neededTime[i]
#                 else:
#                     time += neededTime[i + 1]
#         # print(f"time:{time}", f"needTime:{neededTime[time]} list:{neededTime}")
#         return time


# def minCost1(colors, neededTime):
#     times = []
#     temp = set()
#     values = []
#     for i, c in enumerate(colors):
#         if len(colors) > i + 1 and colors[i] == colors[i + 1]:
#             for ii in range(i, len(colors[i:]) + 1):
#                 # print(ii, colors[ii], end='\t')
#                 if len(colors[ii]) < ii and (ii, colors[ii]) not in temp:
#                     temp.add((ii, colors[ii]))
#                     values.append(neededTime[ii])
#                 else:
#                     break
#                 # print(colors[i] == colors[ii], ((i,colors[i]), (ii, colors[ii])), list(colors))
#                 # if colors[i] == colors[ii]:
#                 #     count.append(neededTime[i])
#                 # else:
#                 #     break
#             # print(temp)
#             # if neededTime[i] < neededTime[i + 1]:
#             #     times.append(neededTime[i])
#             #     print(f"i:{i}, {neededTime[i]} -> time: {times}, ", )
#             # else:
#             #     times.append(neededTime[i+1])
#             #     print(f"i:{i}, {neededTime[i + 1]} -> time: {times}, ", )

#             # if neededTime[i] not in times:
#             #     pass
#             #     times.append(neededTime[i])

#     values = sorted(values)[:len(values) - 1]
#     return sum(values)
#     # print(sorted(temp, key=lambda i: i[0]))
#     # print(times, count)
#     # # print(f"time:{time}", f"needTime:{neededTime[time]} list:{neededTime}")
#     # return times


# print(minCost1('abaac', [1, 2, 3, 4, 5]))  # 3
# print(minCost1('abc', [1, 2, 3]))  # 0
# print(minCost1('aabaa', [1, 2, 3, 4, 1]))  # 2
# # 26, ['3', '5', 10, 7, 5, '3', 5, 5, '4', 8, '1']
# print(minCost1('aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]))

# print(minCost1('abbbb', [5, 5, 4, 8, 1]))  # 10

# 2501. Longest Square Streak in an Array
# Medium
# https://leetcode.com/contest/weekly-contest-323/problems/longest-square-streak-in-an-array/

from typing import List

# 문제 잘못 이해
# class Solution:
#     def longestSquareStreak(self, nums: List[int]) -> int:
#         s: set[int] = set(nums)

#         result = -1
#         for num in nums:
#             p = 2
#             while num ** p in s:
#                 result = max(result, p)
#                 p += 1
        
#         return result


class Solution:
    def longestSquareStreak(self, nums: List[int]) -> int:
        memo = dict((n, 0) for n in nums)
        
        for n in nums:
            if memo[n] > 0:
                pass
            x = n ** 2
            sub_len = 1
            while x in memo:
                if memo[x] > 0:
                    sub_len += memo[x]
                    break
                sub_len += 1
                x = x ** 2
            memo[n] = sub_len
        
        max_len = max(memo.values())

        return max_len if max_len >= 2 else -1

# test cases
# [4,3,6,16,8,2]
# [2,3,5,6,7]
# [2,4,8,16,32,64,128,256,512,1024,2,100000, 99999]
# [100000, 10000, 1000, 100, 10]
# [100000, 10000, 1000, 100]
# [2,2,2,2,2,2,2,2,2,4]
# [4,16,256,8]


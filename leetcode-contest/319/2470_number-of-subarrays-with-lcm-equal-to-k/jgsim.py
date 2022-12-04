# 2470. Number of Subarrays With LCM Equal to K
# medium
# https://leetcode.com/contest/weekly-contest-319/problems/number-of-subarrays-with-lcm-equal-to-k/

from typing import List
from math import lcm

# Submission Result: Time Limit Exceeded
class Solution_fail:
    def subarrayLCM(self, nums: List[int], k: int) -> int:
        count = 0
        for i in range(len(nums)):
            arr = []
            for j in range(i, len(nums)):
                n = nums[j]
                if k % n != 0:
                    break
                arr.append(n)
                if lcm(*arr) == k:
                    count += 1
        return count



class Solution:
    def subarrayLCM(self, nums: List[int], k: int) -> int:
        count = 0
        for i in range(len(nums)):
            l = nums[i]
            for j in range(i, len(nums)):
                l = lcm(l, nums[j])
                if l == k:
                    count += 1
                if l > k:
                    break
        return count
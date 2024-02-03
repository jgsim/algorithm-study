# 1. Two Sum
# Easy
# https://leetcode.com/problems/two-sum/description/

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        D = { num : idx for idx, num in enumerate(nums) }
        for i, n in enumerate(nums):
            m = target - n
            if m in D and D[m] != i:
                return [i, D[m]]
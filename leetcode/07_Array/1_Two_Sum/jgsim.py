# 1. Two Sum
# Easy
# https://leetcode.com/problems/two-sum/

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i in range(len(nums)):
            map[nums[i]] = i
        
        for i in range(len(nums)):
            num = nums[i]
            diff = target-num
            if diff in map and i != map[diff]:
                return [i, map[diff]]
# 78. Subsets
# Medium
# https://leetcode.com/problems/subsets/

from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:

        def dfs(start: int, elements: List[int]):
            result.append(elements)

            for i in range(start, len(nums)):
                dfs(i + 1, elements + [nums[i]])
        
        result = []
        dfs(0, [])
        return result
# 77. Combinations
# Medium
# https://leetcode.com/problems/combinations/

from typing import List

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def dfs(elements: List[int], start: int):
            if len(elements) == k:
                result.append(elements[:])
                return

            for i in range(start, n+1):
                elements.append(i)
                dfs(elements, i+1)
                elements.pop()
        
        result = []
        dfs([], 1)
        return result
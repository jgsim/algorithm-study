# 39. Combination Sum
# Medium
# https://leetcode.com/problems/combination-sum/

from typing import List

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        def recursion(start: int, curr: List[int], total: int):
            if total == target:
                res.append(curr.copy())
                return
            
            if total > target:
                return

            for i in range(start, len(candidates)):
                curr.append(candidates[i])
                recursion(i, curr, total + candidates[i])
                curr.pop()

        recursion(0, [], 0)
        return res

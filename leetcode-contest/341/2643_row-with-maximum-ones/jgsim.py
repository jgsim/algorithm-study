# 2643. Row With Maximum Ones
# Easy
# https://leetcode.com/contest/weekly-contest-341/problems/row-with-maximum-ones/
from typing import List

class Solution:
    def rowAndMaximumOnes(self, mat: List[List[int]]) -> List[int]:
        ans = (-1, -1)
        for idx, row in enumerate(mat):
            row_sum = sum(row)
            if row_sum > ans[1]:
                ans = (idx, row_sum)
        return ans

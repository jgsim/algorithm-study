# 2500. Delete Greatest Value in Each Row
# Easy
# https://leetcode.com/contest/weekly-contest-323/problems/delete-greatest-value-in-each-row/

from typing import List


class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        for row in grid:
            row.sort(reverse=True)
        
        m, n = len(grid), len(grid[0])
        result = 0

        for x in range(n):
            max_num = 0
            for y in range(m):
                max_num = max(grid[y][x], max_num)
            result += max_num
        
        return result

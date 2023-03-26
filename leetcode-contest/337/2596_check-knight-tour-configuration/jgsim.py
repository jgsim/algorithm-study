# 2596. Check Knight Tour Configuration
# medium
# https://leetcode.com/contest/weekly-contest-337/problems/check-knight-tour-configuration/
from typing import List

class Solution:
    def checkValidGrid(self, grid: List[List[int]]) -> bool:
        N = len(grid)
        D = {}
        for row in range(N):
            for col in range(N):
                D[grid[row][col]] = (row, col)

        def check(prev, now):
            row_diff = abs(prev[0] - now[0])
            col_diff = abs(prev[1] - now[1])
            if row_diff == 1 and col_diff == 2:
                return True
            elif row_diff == 2 and col_diff == 1:
                return True
            else:
                return False
        
        if grid[0][0] != 0:
            return False

        prev = (0, 0)
        for i in range(1, N * N):
            now = D[i]
            if not check(prev, now):
                return False
            prev = now
        
        return True

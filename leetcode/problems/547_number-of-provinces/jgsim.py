# 547. Number of Provinces
# Medium
# https://leetcode.com/problems/number-of-provinces/description/

from typing import List

class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        v = [False] * len(isConnected)

        def dfs(i):
            for j in range(len(isConnected)):
                if isConnected[i][j] and not v[j]:
                    v[j] = True
                    dfs(j)
        
        ans = 0
        for i in range(len(isConnected)):
            if not v[i]:
                dfs(i)
                ans += 1
        
        return ans
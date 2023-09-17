# 1466. Reorder Routes to Make All Paths Lead to the City Zero
# Medium
# https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

from typing import List
from collections import defaultdict, deque

class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        graph = defaultdict(list)
        for a, b in connections:
            graph[a].append((b, True))
            graph[b].append((a, False))

        q = deque()
        q.append(0)
        visited = [False for i in range(n)]
        visited[0] = True

        count = 0
        while q:
            v = q.popleft()
            for city, connected in graph[v]:
                if not visited[city]:
                    visited[city] = True
                    q.append(city)
                    if not connected:
                        count += 1

        return n - 1 - count

                
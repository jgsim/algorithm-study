# 743. Network Delay Time
# Medium
# https://leetcode.com/problems/network-delay-time/

from typing import List
from collections import defaultdict
import heapq

class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = defaultdict(list)
        for u, v, w in times:
            graph[u].append((v, w))

        heap = [(k, 0)]
        visited = {}

        while heap:
            # pop min value
            node, time = heapq.heappop(heap)

            # visited check
            if node not in visited:
                visited[node] = time
                for v, w in graph[node]:
                    heapq.heappush(heap, (v, time + w))
        
        return -1 if len(visited) < n else max(visited.values())
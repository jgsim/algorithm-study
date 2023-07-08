# 849. Maximize Distance to Closest Person
# Medium
# https://leetcode.com/problems/maximize-distance-to-closest-person/

from typing import List

class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        last_idx = -1
        max_dist = 0
        for idx, seat in enumerate(seats):
            if seat:
                dist = (idx - last_idx) // 2 if last_idx >= 0 else idx
                max_dist = max(max_dist, dist)
                last_idx = idx
                # print(idx, dist)
            elif idx == len(seats) - 1:
                max_dist = max(max_dist, idx - last_idx)
                # print(idx, idx - last_idx)
        return max_dist
    
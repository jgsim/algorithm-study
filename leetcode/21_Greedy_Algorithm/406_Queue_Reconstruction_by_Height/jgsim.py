# 406. Queue Reconstruction by Height
# Medium
# https://leetcode.com/problems/queue-reconstruction-by-height/

import heapq

class Solution:
    def reconstructQueue(self, people: list[list[int]]) -> list[list[int]]:
        heap = []
        for person in people:
            heapq.heappush(heap, (-person[0], person[1]))
        
        result = []
        while heap:
            person = heapq.heappop(heap)
            result.insert(person[1], [-person[0], person[1]])
        return result
# 215. Kth Largest Element in an Array
# Medium
# https://leetcode.com/problems/kth-largest-element-in-an-array/

import heapq

class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        heap = []

        for num in nums:
            heapq.heappush(heap, -num)
        
        result = 0
        for i in range(k):
            result = -heapq.heappop(heap)
        
        return result
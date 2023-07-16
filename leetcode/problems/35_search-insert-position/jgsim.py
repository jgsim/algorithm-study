# 35. Search Insert Position
# Easy
# https://leetcode.com/problems/search-insert-position/description/

from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right, mid = 0, len(nums) - 1, 0
        while left <= right:
            mid = (left + right) // 2
            
            if target == nums[mid]:
                return mid
            elif target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        
        return mid if target < nums[mid] else mid + 1
        
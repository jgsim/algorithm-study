# 27. Remove Element
# Easy
# https://leetcode.com/problems/remove-element/

from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        if not nums:
            return 0
        left, right = 0, len(nums) - 1
        count = 0
        while True:
            while right >= 0 and nums[right] == val:
                right -= 1
                count += 1
            while left < len(nums) and nums[left] != val :
                left += 1
            if left > right:
                break
            nums[left], nums[right] = nums[right], nums[left]
        return len(nums) - count
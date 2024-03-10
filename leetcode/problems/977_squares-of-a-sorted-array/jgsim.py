# 977. Squares of a Sorted Array
# Easy
# https://leetcode.com/problems/squares-of-a-sorted-array/description/

from typing import List

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        l, r = -1, 0
        while r < len(nums) and nums[r] < 0:
            l += 1
            r += 1

        ans = []
        while l >= 0 or r < len(nums): 
            if r >= len(nums) or nums[l] ** 2 < nums[r] ** 2:
                ans.append(nums[l] ** 2)
                l -= 1
            else:
                ans.append(nums[r] ** 2)
                r += 1
        return ans

# # TESTCASE
# [-4,-1,0,3,10]
# [-7,-3,2,3,11]
# [0,1,2,3,4]
# [-4,-3,-2,-1,0]
# [-4,-3,-2,-1]
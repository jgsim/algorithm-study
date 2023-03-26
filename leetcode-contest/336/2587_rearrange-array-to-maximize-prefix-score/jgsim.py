# 2587. Rearrange Array to Maximize Prefix Score
# Medium
# https://leetcode.com/contest/weekly-contest-336/problems/rearrange-array-to-maximize-prefix-score/
from typing import List

class Solution:
    def maxScore(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        count = 0
        s = 0
        for num in nums:
            s += num
            if s > 0:
                count += 1
        return count
            

# 2672. Number of Adjacent Elements With the Same Color
# Medium
# https://leetcode.com/contest/weekly-contest-344/problems/number-of-adjacent-elements-with-the-same-color/
from typing import List

class Solution:
    def colorTheArray(self, n: int, queries: List[List[int]]) -> List[int]:
        nums, count = [0] * n, 0
        ans = []
        for index, color in queries:
            pre = nums[index - 1] if index > 0 else 0
            nex = nums[index + 1] if index < n - 1 else 0
            if nums[index] and nums[index] == pre:
                count -= 1
            if nums[index] and nums[index] == nex:
                count -= 1
            nums[index] = color
            if nums[index] == pre:
                count += 1
            if nums[index] == nex:
                count += 1
            ans.append(count)
        return ans
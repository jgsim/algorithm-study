# 229. Majority Element II
# Medium
# https://leetcode.com/problems/majority-element-ii

from collections import Counter

class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        counter, m = Counter(nums), len(nums) // 3
        ans = []
        for num in counter:
            if counter[num] > m:
                ans.append(num)
        return ans
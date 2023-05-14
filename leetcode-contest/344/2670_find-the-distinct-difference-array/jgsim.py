# 2670. Find the Distinct Difference Array
# Easy
# https://leetcode.com/contest/weekly-contest-344/problems/find-the-distinct-difference-array/
from typing import List
from collections import Counter, defaultdict

class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        prefix = defaultdict(int)
        sufix = Counter(nums)
        ans = []
        for num in nums:
            prefix[num] += 1
            sufix[num] -= 1
            if sufix[num] == 0:
                sufix.pop(num)
            ans.append(len(prefix.keys()) - len(sufix.keys()))
        return ans
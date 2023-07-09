# 575. Distribute Candies
# Easy
# https://leetcode.com/problems/distribute-candies/

from typing import List
from collections import Counter

class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        counter = Counter(candyType)
        return min(len(counter), len(candyType) // 2)
    
# 771. Jewels and Stones
# Easy
# https://leetcode.com/problems/jewels-and-stones/

from collections import Counter

class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        counter = Counter(stones)
        sum = 0
        
        for jewel in jewels:
            if jewel in counter:
                sum += counter[jewel]
        
        return sum
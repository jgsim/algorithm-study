# 347. Top K Frequent Elements
# Medium
# https://leetcode.com/problems/top-k-frequent-elements/

from typing import List
from collections import Counter

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums)
        commons = counter.most_common(k)
        result = []
        for data in commons:
            result.append(data[0])
        return result
        

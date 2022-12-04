# 49. Group Anagrams
# Medium
# https://leetcode.com/problems/group-anagrams/

from typing import List
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        d = defaultdict(list)
        for str in strs:
            sorted_str = "".join(sorted(str))
            d[sorted_str].append(str)
        
        return d.values()
# 2506. Count Pairs Of Similar Strings
# Easy
# https://leetcode.com/contest/weekly-contest-324/problems/count-pairs-of-similar-strings/
from typing import List

class Solution:
    def similarPairs(self, words: List[str]) -> int:
        sets = [set(word) for word in words]
        
        count = 0
        for i, s in enumerate(sets):
            j = i + 1
            while j < len(sets):
                if s == sets[j]:
                    count += 1
                j += 1
        
        return count


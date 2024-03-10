# 791. Custom Sort String
# Medium
# https://leetcode.com/problems/custom-sort-string/description/

from collections import defaultdict

class Solution:
    def customSortString(self, order: str, s: str) -> str:
        D, S = defaultdict(int), set(order)
        
        tail = []
        for c in s:
            if c in S:
                D[c] += 1
            else:
                tail.append(c)
        
        head = []
        for c in order:
            count = D[c]
            if count > 0:
                head.append(c * count)
        
        return ''.join(head + tail)
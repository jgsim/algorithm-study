# 2413. Smallest Even Multiple
# Easy
# https://leetcode.com/contest/weekly-contest-311/problems/smallest-even-multiple/

class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        return n if n % 2 == 0 else 2 * n
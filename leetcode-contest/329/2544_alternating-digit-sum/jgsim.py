# 2544. Alternating Digit Sum
# Easy
# https://leetcode.com/contest/weekly-contest-329/problems/alternating-digit-sum/

class Solution:
    def alternateDigitSum(self, n: int) -> int:
        sign, result = 1, 0

        for c in str(n):
            result += sign * (int(c) % 10)
            sign *= -1
            
        return result
# 13. Roman to Integer
# Easy
# https://leetcode.com/problems/roman-to-integer/description/

D = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
S = set([1, 10, 100])

class Solution:
    def romanToInt(self, s: str) -> int:
        L = len(s)
        total = 0
        for i in range(L):
            n = D[s[i]]
            sign = 1
            if i < L - 1 and n in S:
                m = D[s[i + 1]]
                if n * 5 == m or n * 10 == m:
                    sign = -1
            total += sign * n
        return total
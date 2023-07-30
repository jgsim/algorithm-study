# 461. Hamming Distance
# Easy
# https://leetcode.com/problems/hamming-distance/

class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        z = x ^ y
        count = 0
        while z > 0:
            count += z % 2
            z >>= 1
        return count
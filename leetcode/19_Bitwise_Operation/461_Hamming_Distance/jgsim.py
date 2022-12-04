# 461. Hamming Distance
# Easy
# https://leetcode.com/problems/hamming-distance/


# Runtime: 63 ms, faster than 11.51% of Python3 online submissions for Hamming Distance.
# Memory Usage: 14 MB, less than 12.68% of Python3 online submissions for Hamming Distance.
class Solution_prev:
    def hammingDistance(self, x: int, y: int) -> int:
        cnt = 0
        xor = x ^ y
        for _ in range(31):
            cnt += xor & 1
            xor >>= 1
        return cnt


# Runtime: 29 ms, faster than 95.67% of Python3 online submissions for Hamming Distance.
# Memory Usage: 13.9 MB, less than 60.65% of Python3 online submissions for Hamming Distance.
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        return bin(x ^ y).count('1')


if __name__ == "__main__":
    s = Solution()
    assert s.hammingDistance(1, 4) == 2
    assert s.hammingDistance(3, 1) == 1
    
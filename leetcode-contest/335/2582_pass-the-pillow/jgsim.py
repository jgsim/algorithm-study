# 2582. Pass the Pillow
# Easy
# https://leetcode.com/contest/weekly-contest-335/problems/pass-the-pillow/

class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        q, r = time // (n - 1), time % (n - 1)
        return n - r if q % 2 else r + 1
        
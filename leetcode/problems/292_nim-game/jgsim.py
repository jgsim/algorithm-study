# 292. Nim Game
# Easy
# https://leetcode.com/problems/nim-game/

class Solution:
    def canWinNim(self, n: int) -> bool:
        return n % 4 != 0
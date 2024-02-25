# 717. 1-bit and 2-bit Characters
# Easy
# https://leetcode.com/problems/1-bit-and-2-bit-characters/description/

class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        L, i = len(bits), 0
        while i < L - 1:
            if bits[i] == 1:
                i += 1
            i += 1
        return i == L - 1
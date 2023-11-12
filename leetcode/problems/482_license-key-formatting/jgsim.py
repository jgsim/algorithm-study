# 482. License Key Formatting
# Easy
# https://leetcode.com/problems/license-key-formatting

class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        s = s.replace('-', '')
        splited = []
        r = len(s)
        while r > 0:
            l = r - k
            if l < 0:
                l = 0
            splited.append(s[l:r].upper())
            r -= k
        splited.reverse()
        return '-'.join(splited)
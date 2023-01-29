# 2546. Apply Bitwise Operations to Make Strings Equal
# Medium
# https://leetcode.com/contest/weekly-contest-329/problems/apply-bitwise-operations-to-make-strings-equal/

class Solution:
    def makeStringsEqual(self, s: str, target: str) -> bool:
        s_flag = s.count('1') > 0
        t_flag = target.count('1') > 0
        return not (s_flag ^ t_flag)
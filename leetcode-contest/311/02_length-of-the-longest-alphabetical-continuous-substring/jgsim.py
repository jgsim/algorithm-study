# 2414. Length of the Longest Alphabetical Continuous Substring
# Medium
# https://leetcode.com/contest/weekly-contest-311/problems/length-of-the-longest-alphabetical-continuous-substring/

class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        prev_ord = ord(s[0])
        count = 1
        max_len = 1
        for c in s[1:]:
            c_ord = ord(c)
            if c_ord - prev_ord != 1:
                max_len = max(max_len, count)
                count = 0
            count += 1
            prev_ord = c_ord
        return max(max_len, count)
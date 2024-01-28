# 796. Rotate String
# Easy
# https://leetcode.com/problems/rotate-string

class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        if s == goal:
            return True
        for i in range(1, len(s)):
            if s[0] == goal[i] and s == goal[i:] + goal[0:i]:
                return True
        return False
                
                
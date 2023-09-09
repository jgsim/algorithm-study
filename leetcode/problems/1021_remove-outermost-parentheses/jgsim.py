# 1021. Remove Outermost Parentheses
# Easy
# https://leetcode.com/problems/remove-outermost-parentheses/

from collections import deque

class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        stack = deque()
        results = []
        for i in range(len(s)):
            if s[i] == '(':
                stack.append(i)
            else:
                poped = stack.pop()
                if not stack:
                    results.append(s[poped + 1 : i])
        return ''.join(results)
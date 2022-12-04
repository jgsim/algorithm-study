# 125. Valid Palindrome (Easy)
# https://leetcode.com/problems/valid-palindrome/

class Solution:
    def isPalindrome(self, s: str) -> bool:
        alphas = list(filter(lambda c: c.isalnum(), s.lower()))
        start, end = 0, len(alphas)-1
        while start <= end:
            if alphas[start] != alphas[end]:
                return False
            start += 1
            end -= 1
        return True

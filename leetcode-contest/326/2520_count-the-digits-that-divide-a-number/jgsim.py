# 2520. Count the Digits That Divide a Number
# Easy
# https://leetcode.com/contest/weekly-contest-326/problems/count-the-digits-that-divide-a-number/

class Solution:
    def countDigits(self, num: int) -> int:
        count, n = 0, num
        while n > 0:
            d = n % 10
            if num % d == 0:
                count += 1
            n //= 10
        return count
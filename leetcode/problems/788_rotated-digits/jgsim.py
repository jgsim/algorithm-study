# 788. Rotated Digits
# Medium
# https://leetcode.com/problems/rotated-digits/

diff_nums = set([2,5,6,9])
good_nums = set([0,1,8,2,5,6,9])

class Solution:
    def rotatedDigits(self, n: int) -> int:
        count = 0
        for k in range(1, n + 1):
            good_flag, diff_flag = True, False
            while k > 0:
                num = k % 10
                if num in diff_nums:
                    diff_flag = True
                if num not in good_nums:   
                    good_flag = False
                    break
                k //= 10
            if good_flag and diff_flag:
                count += 1
        return count
    
# TEST CASE
# 10 = 4
# 1 = 0
# 2 = 1
# 857 = 247
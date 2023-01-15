# 2535. Difference Between Element Sum and Digit Sum of an Array
# Easy
# https://leetcode.com/contest/weekly-contest-328/problems/difference-between-element-sum-and-digit-sum-of-an-array/
from typing import List

class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        element_sum, digit_sum = 0, 0

        for num in nums:
            element_sum += num
            while num > 0:
                digit_sum += num % 10
                num //= 10
        
        return abs(element_sum - digit_sum)

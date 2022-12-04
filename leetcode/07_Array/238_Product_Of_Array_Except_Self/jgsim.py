# 238. Product of Array Except Self
# medium
# https://leetcode.com/problems/product-of-array-except-self/

from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        l = len(nums)
        # 왼쪽 곱셈
        t: List[int] = [0] * l
        t[0] = nums[0]
        for i in range(1, l):
            t[i] = t[i-1] * nums[i]
        # 오른쪽 곱셈 계산 후 결과 저장
        multi_val = nums[-1]
        result: List[int] = [0] * l
        result[-1] = t[-2]
        for i in range(l-2, 0, -1):
            result[i] = t[i-1] * multi_val
            multi_val *= nums[i]
        result[0] = multi_val

        return result
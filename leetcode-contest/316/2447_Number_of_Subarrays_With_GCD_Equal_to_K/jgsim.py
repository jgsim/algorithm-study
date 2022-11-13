# 2447. Number of Subarrays With GCD Equal to K
from typing import List
from math import gcd

class Solution:
    def subarrayGCD(self, nums: List[int], k: int) -> int:
        cnt = 0
        for i in range(len(nums)):
            currGcd = 0
            # gcd(0, n) => n
            for j in range(i, len(nums)):
                currGcd = gcd(currGcd, nums[j])
                if currGcd == k:
                    cnt += 1
        return cnt

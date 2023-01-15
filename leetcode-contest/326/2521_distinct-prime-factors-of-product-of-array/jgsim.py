# 2521. Distinct Prime Factors of Product of Array
# Medium
# https://leetcode.com/contest/weekly-contest-326/problems/distinct-prime-factors-of-product-of-array/
from typing import List

class Solution:
    def distinctPrimeFactors(self, nums: List[int]) -> int:
        mul = 1
        for num in set(nums):
            mul *= num
        
        i, n, s = 2, mul, set()
        while i * i <= n:
            if n % i == 0:
                s.add(i)
                n //= i
            else:
                i += 1
        if n > 1:
            s.add(n)
        
        return len(s)


if __name__ == '__main__':
    s = Solution()
    assert s.distinctPrimeFactors([2,4,3,7,10,6]) == 4


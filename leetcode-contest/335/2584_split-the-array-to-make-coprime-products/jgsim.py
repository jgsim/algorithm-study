# 2584. Split the Array to Make Coprime Products
# Medium
# https://leetcode.com/contest/weekly-contest-335/problems/split-the-array-to-make-coprime-products/
from typing import List
import math
from collections import defaultdict

class Solution:
    def findValidSplit(self, nums: List[int]) -> int:
        def get_factors(n: int):
            factor_set = set()
            for i in range(2, int(math.sqrt(n)) + 1):
                while n % i == 0:
                    factor_set.add(i)
                    n //= i
            if n > 1:
                factor_set.add(n)
            return list(factor_set)
        
        factors_list = [get_factors(n) for n in nums]

        left, right = defaultdict(int), defaultdict(int)
        for factors in factors_list:
            for factor in factors:
                right[factor] += 1
        
        for i in range(len(nums) - 1): 
            factors = factors_list[i]
            for factor in factors:
                left[factor] += 1
                right[factor] -= 1
                if right[factor] == 0:
                    left.pop(factor)
                if not left:
                    return i
                
        return -1
        
        

if __name__ == '__main__':
    s = Solution()
    assert s.findValidSplit([4,7,8,15,3,5]) == 2
    assert s.findValidSplit([4,7,15,8,3,5]) == -1
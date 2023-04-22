# 2614. Prime In Diagonal
# Easy
# https://leetcode.com/contest/weekly-contest-340/problems/prime-in-diagonal/
from typing import List
import math

class Solution:
    def diagonalPrime(self, nums: List[List[int]]) -> int:
        def get_primes(n: int):
            arr = [True] * (n + 1)
            arr[0] = arr[1] = False
            for i in range(2, int(math.sqrt(n))+1):
                if arr[i]:
                    k = 2
                    while i * k <= n:
                        arr[i * k] = False
                        k += 1
            return [i for i, b in enumerate(arr) if b]
        
        N = len(nums)
        s = set()
        for i in range(N):
            s.add(nums[i][i])
            s.add(nums[i][N - 1 - i])
        prime_set = set(get_primes(max(s)))

        ans = 0
        for n in s:
            if n in prime_set:
                ans = max(ans, n)
        
        return ans
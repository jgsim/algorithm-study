# 2523. Closest Prime Numbers in Range
# Meduim
# https://leetcode.com/contest/weekly-contest-326/problems/closest-prime-numbers-in-range/
from typing import List

# time limit exceeded
class Solution_failed:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        def get_prime_numbers(left: int, right: int):
            arr = [True] * (right+1)
            for i in range(2, right):
                if not arr[i]:
                    continue
                n = 2
                while i * n <= right:
                    arr[i * n] = False
                    n += 1
            return [i for i, flag in enumerate(arr) if i >= max(2, left) and flag]
        
        primes = get_prime_numbers(left, right)

        if len(primes) < 2:
            return [-1, -1]

        min_idx = len(primes)-1
        min_diff = right
        for i in range(len(primes)-1, 0, -1):
            diff = primes[i] - primes[i-1]
            if min_diff >= diff:
                min_idx = i
                min_diff = diff

        return primes[min_idx-1:min_idx+1]


class Solution:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        def get_prime_numbers(left: int, right: int):
            arr = [True] * (right+1)
            arr[0] = arr[1] = False

            for i in range(2, int(right ** 0.5)+1): # 개선
                if not arr[i]:
                    continue
                n = 2
                while i * n <= right:
                    arr[i * n] = False
                    n += 1
            return [i for i, flag in enumerate(arr) if i >= left and flag]
        
        primes = get_prime_numbers(left, right)

        if len(primes) < 2:
            return [-1, -1]

        min_idx, min_diff = 0, right
        for i in range(len(primes)-1):
            diff = primes[i+1] - primes[i]
            if diff < min_diff:
                min_idx = i
                min_diff = diff

        return primes[min_idx : min_idx+2]


if __name__ == '__main__':
    s = Solution()
    assert s.closestPrimes(10, 19) == [11, 13]
    assert s.closestPrimes(4, 6) == [-1, -1]
    # Wrong Answer
    assert s.closestPrimes(17, 31) == [17, 19]
    assert s.closestPrimes(1, 1000000) == [2, 3]
    assert s.closestPrimes(19, 31) == [29, 31]
# 2507. Smallest Value After Replacing With Sum of Prime Factors
# Medium
# https://leetcode.com/contest/weekly-contest-324/problems/smallest-value-after-replacing-with-sum-of-prime-factors/
from math import sqrt

# Time Lemit Exceeded
# class Solution:
#     def get_factor(self, n: int):
#         fact, m = [], 2
#         while n > 1:
#             if n % m == 0:
#                 fact.append(m)
#                 n = n // m
#             else:
#                 m += 1
#         return fact

#     def smallestValue(self, n: int) -> int:
#         while True:
#             factors = self.get_factor(n)
#             if len(factors) == 1:
#                 return factors[0]
#             n = sum(factors)


class Solution:
    def smallestValue(self, n: int) -> int:
        def sum_of_factors(n: int) -> int:
            s, m = 0, 2
            while n > 1:
                if n % m == 0:
                    s += m
                    n = n // m
                else:
                    m += 1
            return s

        while True:
            s = sum_of_factors(n)
            if n == s:
                return n
            n = s

if __name__ == '__main__':
    s = Solution()
    assert s.smallestValue(15) == 5
    assert s.smallestValue(3) == 3
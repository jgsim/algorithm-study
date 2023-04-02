# 2600. K Items With the Maximum Sum
# Easy
# https://leetcode.com/contest/weekly-contest-338/problems/k-items-with-the-maximum-sum/

class Solution:
    def kItemsWithMaximumSum(self, numOnes: int, numZeros: int, numNegOnes: int, k: int) -> int:
        res = 0
        if k > 0:
            if numOnes >= k:
                return k
            res += numOnes
            k -= numOnes
        if k > 0:
            if numZeros >= k:
                return res
            k -= numZeros
        return res - k
    
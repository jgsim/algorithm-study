# 2644. Find the Maximum Divisibility Score
# Easy
# https://leetcode.com/contest/weekly-contest-341/problems/find-the-maximum-divisibility-score/
from typing import List
from collections import Counter

class Solution:
    def maxDivScore(self, nums: List[int], divisors: List[int]) -> int:
        max_nums, counter = max(nums), Counter(nums)
        max_score, max_div = -1, 0
        for div in divisors:
            score, k = 0, 1
            while k * div <= max_nums:
                if k * div in counter:
                    score += counter[k * div]
                k += 1
            if score > max_score:
                max_score = score
                max_div = div
            elif score == max_score:
                max_div = min(max_div, div)
        return max_div
    

if __name__ == '__main__':
    s = Solution()
    assert s.maxDivScore(nums = [4,7,9,3,9], divisors = [5,2,3]) == 3
    assert s.maxDivScore(nums = [20,14,21,10], divisors = [5,7,5]) == 5
    assert s.maxDivScore(nums = [12], divisors = [10,16]) == 10
# 2602. Minimum Operations to Make All Array Elements Equal
# Medium
# https://leetcode.com/contest/weekly-contest-338/problems/minimum-operations-to-make-all-array-elements-equal/
from typing import List
from collections import Counter

# timeout
class Solution_failed:
    def minOperations(self, nums: List[int], queries: List[int]) -> List[int]:
        counter, memo = Counter(nums), dict()
        res = []
        for query in queries:
            val = 0
            if query in memo:
                val = memo[query]
            else:
                for n in counter:
                    if query == n:
                        continue
                    else:
                        val += abs(query - n) * counter[n]
                memo[query] = val
            res.append(val)
        return res

from itertools import accumulate
from bisect import bisect_left

# https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3341928/c-java-python3-prefix-sums-binary-search/
class Solution:
    def minOperations(self, nums: List[int], queries: List[int]) -> List[int]:
        nums.sort()
        ans, n, prefix = [], len(nums), [0] + list(accumulate(nums))
        for x in queries:
            i = bisect_left(nums, x)
            increments = x * i - prefix[i]
            decrements = prefix[n] - prefix[i] - x * (n - i)
            ans.append(increments + decrements)
        return ans

# 509. Fibonacci Number
# Easy
# https://leetcode.com/problems/fibonacci-number/

import collections

# 메모제이션(하향식 접근)
# Runtime: 51 ms, faster than 54.96% of Python3 online submissions for Fibonacci Number.
# Memory Usage: 13.8 MB, less than 95.62% of Python3 online submissions for Fibonacci Number.
class Solution_memo:
    memo = collections.defaultdict(int)

    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        if self.memo[n]:
            return self.memo[n]

        self.memo[n] = self.fib(n - 1) + self.fib(n - 2)

        return self.memo[n]


# 타뷸레이션(상향식 접근)
# Runtime: 52 ms, faster than 52.64% of Python3 online submissions for Fibonacci Number.
# Memory Usage: 13.8 MB, less than 95.62% of Python3 online submissions for Fibonacci Number.
class Solution_tabul:
    dp = collections.defaultdict(int)

    def fib(self, n: int) -> int:
        self.dp[1] = 1

        for i in range(2, n + 1):
            self.dp[i] = self.dp[i - 1] + self.dp[i - 2]
        
        return self.dp[n]


# 타뷸레이션 최적화: 공간복잡도 O(1)
# Runtime: 51 ms, faster than 54.96% of Python3 online submissions for Fibonacci Number.
# Memory Usage: 13.7 MB, less than 95.62% of Python3 online submissions for Fibonacci Number.
class Solution:
    def fib(self, n: int) -> int:
        x, y = 0, 1
        for i in range(0, n):
            x, y = y, x + y
        return x
/**
 * https://leetcode.com/problems/counting-bits/description/
 * Runtime 79 ms Beats 66.95% of users with TypeScript
 * Memory 56.82 MB Beats 35.84% of users with TypeScript
 *
 * easy | Dynamic Programming | Bit Manipulation
 *
 * n    n(2)    cnt     /2      %2      memo    memo + %2
 * 0    0       0
 * 1    1       1       0       1       0       1
 * 2    10      1       1       0       1       1
 * 3    11      2       1       1       1       2
 * 4    100     1       2       0       1       1
 * 5    101     2       2       1       1       2
 * 6    110     2       3       0       2       2
 * 7    111     3       3       1       2       3
 * 8    1000    1       4       0       1       1
 */

function countBits(n: number): number[] {
  const dp: number[] = [0];
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }
  return dp;
}

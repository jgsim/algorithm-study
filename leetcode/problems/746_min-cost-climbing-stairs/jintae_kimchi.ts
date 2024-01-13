/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * Runtime: 58 ms, faster than 72.47% of TypeScript online submissions for Min Cost Climbing Stairs.
 * Memory Usage: 44.9 MB, less than 47.96% of TypeScript online submissions for Min Cost Climbing Stairs.
 *
 * easy | dp | array
 *
 * failed.
 * dp 배열에 특정 인덱스일때 최소값을 누적시켜야 함
 */

function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[n - 1], dp[n - 2]);
}

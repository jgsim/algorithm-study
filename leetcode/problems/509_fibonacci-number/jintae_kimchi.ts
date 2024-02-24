/**
 * https://leetcode.com/problems/fibonacci-number/description/
 * Runtime 47 ms Beats 95.49% of users with TypeScript
 * Memory 49.95 MB Beats 35.04% of users with TypeScript
 *
 * easy | Math | Dynamic Programming | Recursion | Memoization
 */

function fib(n: number): number {
  if (n === 0) return 0;
  let prevLeft = 0;
  let prevRight = 1;
  let memo = 1;
  for (let i = 3; i <= n; i++) {
    prevLeft = prevRight;
    prevRight = memo;
    memo = prevLeft + prevRight;
  }
  return memo;
}

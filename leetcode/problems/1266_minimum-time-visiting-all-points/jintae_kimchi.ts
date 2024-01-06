/**
 * https://leetcode.com/problems/minimum-time-visiting-all-points/description/
 * Runtime 60 ms Beats 55.59% of users with TypeScript
 * Memory 45.07 MB Beats 42.96% of users with TypeScript
 *
 * easy | array | math
 *
 * 좌표 거리의 xy 중 최대값 찾으면 됨
 */

function minTimeToVisitAllPoints(points: number[][]): number {
  const n = points.length;
  let ans = 0;
  let prev = points[0];
  for (let i = 1; i < n; i++) {
    const curr = points[i];
    const diff = [Math.abs(prev[0] - curr[0]), Math.abs(prev[1] - curr[1])];
    ans += Math.max(diff[0], diff[1]);
    prev = curr;
  }
  return ans;
}

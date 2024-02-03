/**
 * https://leetcode.com/problems/k-closest-points-to-origin/description/
 * Runtime 192 ms Beats 58.58% of users with TypeScript
 * Memory 65.92 MB Beats 30.47% of users with TypeScript
 *
 * medium | Array Math Divide and Conquer Geometry Sorting Heap (Priority Queue) Quickselect
 *
 * 힙을써야 함..
 */

function kClosest(points: number[][], k: number): number[][] {
  const ans: number[][] = [];
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    ans.push([x * x + y * y, i]);
  }
  ans.sort((a, b) => a[0] - b[0]);
  return ans.slice(0, k).map(([, idx]) => {
    return points[idx];
  });
}
/**
 * Runtime 167 ms Beats 91.12% of users with TypeScript
 * Memory 63.97 MB Beats 34.62% of users with TypeScript
 */
function kClosest_clean(points: number[][], k: number): number[][] {
  function fn(x: number, y: number) {
    return x ** 2 + y ** 2;
  }
  return points
    .sort(([x1, y1], [x2, y2]) => fn(x1, y1) - fn(x2, y2))
    .slice(0, k);
}

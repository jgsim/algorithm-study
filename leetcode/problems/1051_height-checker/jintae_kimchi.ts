/**
 * https://leetcode.com/problems/height-checker/submissions/953717193/
 * Runtime 61 ms Beats 73.98% Memory 44.2 MB Beats 76.42%
 *
 * array sort, diff
 */
function heightChecker(heights: number[]): number {
  const sorted = heights.map((x) => x).sort((a, b) => a - b);
  return sorted.filter((s, i) => s !== heights[i]).length;
}

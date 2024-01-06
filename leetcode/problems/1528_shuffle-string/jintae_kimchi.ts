/**
 * https://leetcode.com/problems/shuffle-string/description/
 * Runtime 55 ms Beats 89.26% of users with TypeScript
 * Memory 44.99 MB Beats 57.72% of users with TypeScript
 *
 * easy | array | string
 */

function restoreString(s: string, indices: number[]): string {
  const n = s.length;
  const ans = new Array(n).fill("");
  for (let i = 0; i < n; i++) {
    ans[indices[i]] = s[i];
  }
  return ans.join("");
}

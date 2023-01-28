/**
 * https://leetcode.com/problems/alternating-digit-sum/description/
 * Runtime 81 ms Beats 46.34%
 * Memory 43.4 MB Beats 31.71%
 */

function alternateDigitSum(n: number): number {
  const str = n.toString();
  let ans = 0;
  let flag = 1;
  for (let i = 0; i < str.length; i++) {
    const num = +str[i];
    ans += num * flag;
    flag *= -1;
  }
  return ans;
}

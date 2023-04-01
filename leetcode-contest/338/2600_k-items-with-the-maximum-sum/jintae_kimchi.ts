/**
 * https://leetcode.com/problems/k-items-with-the-maximum-sum/description/
 * Runtime 72 ms Beats 92.86% Memory 44.5 MB Beats 88.10%
 *
 * 큰 값이 나오도록 우선순위대로 연산 수행하여 품
 */
function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number
): number {
  let ans = 0;
  while (k > 0) {
    if (numOnes) {
      ans++;
      numOnes--;
    } else if (numZeros) {
      numZeros--;
    } else if (numNegOnes) {
      ans--;
      numNegOnes--;
    }
    k--;
  }

  return ans;
}

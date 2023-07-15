/**
 * https://leetcode.com/problems/number-of-1-bits/description/
 * Runtime 65 ms Beats 75% Memory 44.1 MB Beats 94.57%
 *
 * string manipulation
 *
 * replaceAll 로 사기치기
 * 못쓰는 상황이면 div, mod 로 루프 돌거나 정규식으로 걸러야 함
 */

function hammingWeight(n: number): number {
  return n.toString(2).replaceAll("0", "").length;
}

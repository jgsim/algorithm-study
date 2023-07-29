/**
 * https://leetcode.com/problems/array-partition/description/
 * Runtime 104 ms Beats 98.8% Memory 48.9 MB Beats 69.23%
 *
 * array | easy
 *
 * 정렬 후 인접 데이터끼리 최소값을 뽑으면 정답. 음수 상관없음
 */

function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => b - a);
  let sums = 0;
  for (let i = 0; i < nums.length; i += 2) {
    const num1 = nums[i];
    const num2 = nums[i + 1];
    sums += Math.min(num1, num2);
  }
  return sums;
}

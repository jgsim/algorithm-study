/**
 * https://leetcode.com/problems/left-and-right-sum-differences/description/
 * Runtime 81 ms Beats 52.75% Memory 45.9 MB Beats 58.24%
 *
 * 문제가 설명하는대로 단순무식하게 더하고 차이를 구함
 */

function leftRigthDifference(nums: number[]): number[] {
  const leftArr = [0];
  for (let i = 0; i < nums.length - 1; i++) {
    leftArr.push(leftArr[i] + nums[i]);
  }
  const rightArr = Array.from({ length: nums.length }, () => 0);
  for (let i = nums.length - 1; i > 0; i--) {
    rightArr[i - 1] = rightArr[i] + nums[i];
  }
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = Math.abs(leftArr[i] - rightArr[i]);
  }
  return ans;
}

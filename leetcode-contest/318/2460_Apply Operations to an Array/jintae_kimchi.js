/**
 * https://leetcode.com/problems/apply-operations-to-an-array/
 * i 인덱스 값과 i + 1 인덱스 값이 같으면 i 값 * 2 하고 i+1 값은 0으로
 * 끝까지 계산 후 0인 값을 뒤로 보냄
 * 중간계산 결과도 바로 반영하면 됨
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  // 마지막 값은 계산 안해도 됨
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  const head = nums.filter((x) => x !== 0);
  return head.concat(new Array(nums.length - head.length).fill(0));
};
// The contest has started. (1 hour 17 minutes 12 seconds left)
const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [[1, 2, 2, 1, 1, 0]],
      expect: [1, 4, 2, 0, 0, 0],
    },
    {
      params: [[0, 1]],
      expect: [1, 0],
    },
  ],
  applyOperations
);

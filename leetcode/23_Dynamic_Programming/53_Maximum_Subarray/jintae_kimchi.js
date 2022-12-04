/**
 * https://leetcode.com/problems/maximum-subarray/
 * Runtime: 147 ms, faster than 20.35% of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 50.3 MB, less than 69.87% of JavaScript online submissions for Maximum Subarray.
 */

/**
 * 컨닝함. 카데인 알고리즘
 * 현재 합계 + 요소값의 결과가
 * 0보다 작다? 0으로 초기화
 * 0보다 크다? 다음값과 더함
 * 더한 후 최대값 갱신
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  nums.forEach((v) => {
    sum = Math.max(v, sum + v);
    max = Math.max(sum, max);
  });

  return max;
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [[-1]],
      expect: -1,
    },
    {
      params: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
      expect: 6,
    },
    {
      params: [[1]],
      expect: 1,
    },
    {
      params: [[5, 4, -1, 7, 8]],
      expect: 23,
    },
  ],
  maxSubArray
);

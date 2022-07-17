/**
 * https://leetcode.com/problems/single-number/
 * Runtime: 78 ms, faster than 88.83% of JavaScript online submissions for Single Number.
 * Memory Usage: 43.1 MB, less than 85.35% of JavaScript online submissions for Single Number.
 *
 * 문제설명
 * 비어 있지 않은 정수배열 nums가 주어짐
 * 모든 값은 두번 등장함 단 하나빼고.
 * 그 단 하나의 값이 뭔지 찾아라
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((ans, val) => ans ^ val);
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [[2, 1, 1]],
      expect: 2,
    },
    {
      params: [[4, 1, 2, 1, 2]],
      expect: 4,
    },
    {
      params: [[1]],
      expect: 1,
    },
  ],
  singleNumber
);

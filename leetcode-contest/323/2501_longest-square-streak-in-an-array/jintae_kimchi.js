/**
 * https://leetcode.com/contest/weekly-contest-323/problems/longest-square-streak-in-an-array/
 * 배열 요소 중에 제곱수 이루어진 가장 긴 수열을 찾고 그 길이를 리턴
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  const dict = nums.reduce((obj, num, idx) => {
    obj[num] = idx;
    return obj;
  }, {});

  let maxLen = -1;
  nums.forEach((num, idx) => {
    let curLen = 1;
    let curNum = num;
    while (dict[curNum ** 2] >= 0) {
      curNum = curNum ** 2;
      curLen += 1;
    }
    if (curLen > 1) maxLen = Math.max(maxLen, curLen);
  });

  return maxLen;
};

const { runTestCase } = require("../../../leetcode/utils");

runTestCase(
  [
    {
      params: [[4, 3, 6, 16, 8, 2]],
      expect: 3,
    },
    {
      params: [[2, 3, 5, 6, 7]],
      expect: -1,
    },
  ],
  longestSquareStreak
);

// 1 10 33

/**
 * https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/
 */

/**
 * nums 부분배열 요소들이 k의 공배수인지 검사하고 해당하는 서브배열의 개수 구하기
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function (nums, k) {
  let count = 0;
  const lcm = (x, y) => {
    let xx = x;
    let yy = y;
    let xi = 2;
    let yi = 2;
    while (xx <= k && yy <= k) {
      if (xx < yy) {
        xx = x * xi;
        xi += 1;
      } else if (xx > yy) {
        yy = y * yi;
        yi += 1;
      } else {
        // same
        return xx;
      }
    }
    return xx > yy ? xx : yy;
  };
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (n === k) count += 1;
    for (j = i + 1; j < nums.length; j++) {
      const nn = nums[j];
      const lcmVal = lcm(n, nn);
      // k 벗어나면 더이상 계산하지 않음
      if (lcmVal > k) break;
      if (lcmVal === k) count += 1;
      // 현재 계산한 값 중 큰 값만 다음 계산을 위해 사용
      n = n > nn ? n : nn;
    }
  }
  return count;
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: [[2, 1, 1, 5], 5],
      expect: 3,
    },
    {
      params: [[3, 6, 2, 7, 1], 6],
      expect: 4,
    },
    {
      params: [[3], 2],
      expect: 0,
    },
  ],
  subarrayLCM
);

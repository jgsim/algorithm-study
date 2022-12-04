/**
 * https://leetcode.com/problems/number-of-1-bits/
 * Runtime: 71 ms, faster than 88.41% of JavaScript online submissions for Number of 1 Bits.
 * Memory Usage: 43.6 MB, less than 18.06% of JavaScript online submissions for Number of 1 Bits.
 * 문자열조작으로 푼거
 *
 * Runtime: 79 ms, faster than 75.38% of JavaScript online submissions for Number of 1 Bits.
 * Memory Usage: 42.7 MB, less than 43.33% of JavaScript online submissions for Number of 1 Bits.
 * 솔루션
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // 메모리 사용이 너무 높은 문제가 있다
  return n.toString(2).replace(/0/g, "").length;
};

const hammingWeight2 = (n) => {
  // 로직은 이해가 되는데 어떻게 도출하는지 모르겠음
  /**
   * 1, 1111 & 1110 = 1110
   * 2, 1110 & 1101 = 1100
   * 3, 1100 & 1011 = 1000
   * 4, 1000 & 0111 = 0000
   */
  let count = 0;
  while (n != 0) {
    count += 1;
    n &= n - 1;
  }
  return count;
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [0],
      expect: 0,
    },
    {
      // overflow 나는건지 node 런타임으로 디버깅하니 제대로 진행안됨
      params: [parseInt("11111111111111111111111111111101", 2)],
      expect: 31,
    },
  ],
  hammingWeight
);

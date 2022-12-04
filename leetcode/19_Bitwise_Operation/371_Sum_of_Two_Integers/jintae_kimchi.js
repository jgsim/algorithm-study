/**
 * https://leetcode.com/problems/sum-of-two-integers/
 * 솔루션
 *
 * 문제설명
 * 정수 두개가 주어짐 두 정수를 + - 연산자를 사용하지 않고 더하라
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  /**
   *            11111 = 31(10)
   *             1010 = 10(10)
   * ---------------------
   *            10101 ^
   *           010100 &, << 1
   * ---------------------
   *           000001 ^
   *           101000 &, << 1
   * ---------------------
   *           101001 ^
   *          0000000 &, << 1
   *
   *           101001 = 41(10)
   */
  while (b !== 0) {
    const sum = a ^ b;
    const carry = (a & b) << 1;
    console.log("sum", sum, "carry", carry);
    a = sum;
    b = carry;
    // let k = (a & b) << 1;
    // a = a ^ b;
    // b = k;
  }
  return a;
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [31, -14],
      expect: 17,
    },
    {
      params: [10, -10],
      expect: 0,
    },
    {
      params: [1, 2],
      expect: 3,
    },
    {
      params: [2, 3],
      expect: 5,
    },
    // {
    //   params: [0, 0],
    //   expect: 0,
    // },
    {
      params: [1000, -1000],
      expect: 0,
    },
  ],
  getSum
);

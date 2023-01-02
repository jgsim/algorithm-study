/**
 * num 을 num의 모든 자릿수로 나누어보고 나머지가 0이 되는 개수를 확인
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let ans = 0;
  const memo = {};
  num
    .toString()
    .split("")
    .forEach((digit) => {
      if (memo[digit]) {
        ans += 1;
      } else if (num % Number(digit) === 0) {
        memo[digit] = true;
        ans += 1;
      }
    });
  return ans;
};
// 1 19

const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [7],
      expect: 1,
    },
    {
      params: [121],
      expect: 2,
    },
    {
      params: [1248],
      expect: 4,
    },
  ],
  countDigits
);

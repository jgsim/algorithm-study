/**
 * https://leetcode.com/contest/weekly-contest-313/problems/number-of-common-factors/
 * TODO: 아직 지표 준비 안됨 나중에 확인해서 넣고 확인
 *
 * 공약수 개수 찾기
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  // a, b 최대공약수를 찾아서 탐색범위를 정하면 됨
  // 근데 시간관계상 그냥 작은값으로 범위 정함
  // 나중에 찾아보니 유클리드 호제법(logN) 등으로 최적화 가능할듯
  // 딱 나눠지는지는 % 연산으로 확인가능
  let result = 0;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) result++;
  }
  return result;
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: [12, 6],
      expect: 4,
    },
    {
      params: [25, 30],
      expect: 2,
    },
    {
      params: [1, 1],
      expect: 1,
    },
    {
      params: [1000, 1000],
      expect: 16,
    },
    {
      params: [1, 1000],
      expect: 1,
    },
  ],
  commonFactors
);

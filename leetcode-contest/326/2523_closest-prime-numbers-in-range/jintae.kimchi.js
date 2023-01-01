/**
 * l, r 사이의 소수 배열 만들기
 * 배열의 이웃끼리 차이를 계산해서 가장 작은 수 찾으면 해당 값 두개 리턴
 * 조건 만족하는게 없으면 [-1, -1]
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  const HAS_NO_ANS = [-1, -1];

  const primeArr = [];
  const memo = {};
  // range
  for (let i = left; i <= right; i++) {
    if (i === 1) continue;
    // calc primes
    if (memo[i]) primeArr.push(i);
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      memo[i] = true;
      primeArr.push(i);
    }
  }
  if (primeArr.length < 2) return HAS_NO_ANS;

  // 차이가 가장 작은 페어 중 값이 작은 걸 택하므로 역순으로 진행
  let min = Infinity;
  let minLeft = -1;
  let minRight = -1;
  for (let i = primeArr.length - 1; i > 0; i--) {
    const current = primeArr[i];
    const before = primeArr[i - 1];
    const diff = current - before;
    if (diff <= min) {
      min = diff;
      minLeft = before;
      minRight = current;
    }
  }

  return [minLeft, minRight];
};
// 3min

const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [1, 1000000],
      expect: [2, 3],
    },
    {
      params: [10, 19],
      expect: [11, 13],
    },
    {
      params: [4, 6],
      expect: [-1, -1],
    },
  ],
  closestPrimes
);

/**
 * nums 배열 안의 요소를 모두 곱한 값을 소인수분해해서 고유한 소인수 개수 구하기
 * 테스트 케이스가 엄청 큰 수가 있으므로 실제로 곱을 구해서는 풀 수 없다
 * 그럼 요소 하나하나의 소인수를 구하고 병합하면 되려나? => 계산해보니 됨
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function (nums) {
  const dictAdd = (d, n) => {
    if (d[n]) d[n] += 1;
    else d[n] = 1;
  };

  // 같은 값에 대한 소인수 분해 결과 저장
  const memo = {};
  // 소인수분해 누적 결과 저장
  const dict = {};
  // 특정 값에 대한 소인수 분해 로직
  const calcPrime = (num) => {
    if (memo[num]) return memo[num];

    const curDict = {};
    for (let i = 2; i <= Math.sqrt(num); ) {
      if (num % i === 0) {
        dictAdd(curDict, i);
        num /= i;
      } else {
        i += 1;
      }
    }
    if (num > 1) dictAdd(curDict, num);
    memo[num] = Object.keys(curDict);
    return memo[num];
  };

  nums.forEach((num) => {
    calcPrime(num).forEach((key) => {
      dictAdd(dict, key);
    });
  });

  return Object.keys(dict).length;
};
// 39

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: [[100]],
      expect: 2,
    },
    {
      params: [[2]],
      expect: 1,
    },
    {
      params: [[2, 4, 3, 7, 10, 6]],
      expect: 4,
    },
    {
      params: [[2, 4, 8, 16]],
      expect: 1,
    },
  ],
  distinctPrimeFactors
);

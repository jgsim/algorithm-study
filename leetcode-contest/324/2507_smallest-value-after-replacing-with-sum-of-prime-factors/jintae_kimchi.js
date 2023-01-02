/**
 * https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/description/
 * 구조는 잡았는데 소인수분해 기법을 몰라서 못품
 * 소인수분해는 제곱근까지만 검사하는 조건을 넣으면 되는데 또 까먹음..
 * 이거 외 메모이제이션과 로직은 스스로 품
 *
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
  // get a prime number
  const memo = {
    // n 값이 주어졌을 때 acc 값
    // 아래는 예시용
    2: 2,
    3: 3,
    4: 4, // 2*2 => 2+2 => 4 같은 값이 나오면 무한루프이므로 그대로 사용
  };

  const find = (num) => {
    if (memo[num]) return memo[num];
    let acc = 0;
    let inc = 2;
    let cur = num;
    while (inc <= Math.sqrt(cur)) {
      if (cur % inc === 0) {
        cur = cur / inc;
        acc += inc;
        inc = 2;
      } else {
        inc += 1;
      }
    }
    if (acc === 0) {
      return num;
    }
    acc += cur;
    memo[num] = acc;
    return find(acc);
  };
  return find(n);
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: [47823482376482342],
      expect: 5,
    },
    {
      params: [8],
      expect: 5,
    },
    {
      params: [15],
      expect: 5,
    },
    {
      params: [3],
      expect: 3,
    },
    {
      params: [12],
      expect: 7,
    },
    {
      params: [2],
      expect: 2,
    },
  ],
  smallestValue
);

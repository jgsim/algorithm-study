/**
 * 성능이슈로 제출하지 못함
 * 서브셋 구성 => 그냥 전체를 탐색하면 되는데 최적화 해야 한다는 생각때문에 시간날림(나누는 코드 자체는 작성함)
 * 최대공약수 구하기 => for문으로 내가 아는 방법대로 두 수를 계속 나누어보는 코드는 타임아웃 발생하였음
 *
 * 솔루션을 참고하여 다시 작성하여 풀음
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarrayGCD = (nums, k) => {
  let count = 0;
  const gcdCheck = (v1, v2) => {
    while (v2 != 0) {
      [v2, v1] = [v1 % v2, v2];
    }
    return v1;
  };

  // 배열 순위하면서 모든 서브셋 검사함(M * N)
  for (let i = 0; i < nums.length; i++) {
    let curGcd = 0; // 이전까지의 최대공약수만 알면 두 값만 비교할 수 있게 됨
    for (let j = i; j < nums.length; j++) {
      curGcd = gcdCheck(curGcd, nums[j], k); // 두 수의 최대공약수 구하는 방법 숙지하자

      if (curGcd === k) count++;
      else if (curGcd < k) break;
    }
  }

  return count;
};

const { runTestCase } = require("../../leetcode/utils");
runTestCase(
  [
    {
      params: [[3, 12, 9, 6], 3],
      expect: 7,
    },
    {
      params: [[5], 1],
      expect: 0,
    },
    {
      params: [[9, 3, 1, 2, 6, 3], 3],
      expect: 4,
    },
    {
      params: [[4], 7],
      expect: 0,
    },
  ],
  subarrayGCD
);

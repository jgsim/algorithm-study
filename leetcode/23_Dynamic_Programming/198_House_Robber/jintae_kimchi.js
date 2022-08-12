/**
 * https://leetcode.com/problems/house-robber/
 * rob
 * Runtime: 83 ms, faster than 58.38% of JavaScript online submissions for House Robber.
 * Memory Usage: 42.2 MB, less than 33.39% of JavaScript online submissions for House Robber.
 * 메모리 성능이 낮게 나왔는데 원인을 분석해보면 추가배열 없이 하는 방법이 있었다. solution 매서드로 구현함
 */

/**
 * index가 연속되지 않은 요소들을 추출하여 만들 수 있는 가장 큰 값을 계산
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let ans = 0;
  const maxNums = nums.map((n) => {
    ans = Math.max(ans, n);
    return n;
  });
  for (let i = 0; i < nums.length; i++) {
    const curr = maxNums[i];
    for (let j = i + 2; j < nums.length; j++) {
      const next = nums[j];
      const val = curr + next;
      ans = Math.max(ans, val);
      maxNums[j] = Math.max(maxNums[j], val);
    }
  }

  return ans;
};

/**
 * 3개의 초기 케이스를 잡고 선택적으로 최대값을 갱신해주면 마지막 요소 홀짝 중 하나가 최대값임
 * [2, 7, 9, 3, 1, 5, 8, 2]
 *  2, 7,11                 // 초기 케이스. 첫번째 두번째는 네번째 값과 더할 대상, 9는 2화 더하는게 최대값이라 11
 *  2  7     3              // 3에 2와 7중 더 큰값을 더하여 배열에 누적함
 *     7 11 10              // 다음 케이스를 위한 값이 세팅됨 이제부터 반복
 *     7 11     1           // max(7, 9) + 1 = 10
 *       11 10 12
 *          10 12 16
 *             12 16 20
 *                16 20 18 // ans is max(20, 18)
 *
 * Runtime: 87 ms, faster than 51.58% of JavaScript online submissions for House Robber.
 * Memory Usage: 41.6 MB, less than 93.29% of JavaScript online submissions for House Robber.
 * @param {number[]} nums
 * @return {number}
 */
const solution = (nums) => {
  let x = nums[0] || 0;
  let y = nums[1] || 0;
  if (nums.length < 3) return Math.max(x, y);
  let z = x + nums[2];
  for (let i = 3; i < nums.length; i++) {
    const curr = Math.max(x, y) + nums[i];
    x = y;
    y = z;
    z = curr;
  }

  return Math.max(y, z);
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [[2, 7, 9, 3, 1, 5, 8, 2]],
      expect: 20,
    },
    {
      params: [[1]],
      expect: 1,
    },
    {
      params: [[1, 2, 3, 1]],
      expect: 4,
    },
    {
      params: [[2, 7, 9, 3, 1]],
      expect: 12,
    },
  ],
  solution
);

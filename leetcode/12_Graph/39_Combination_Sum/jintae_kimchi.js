/**
 * https://leetcode.com/problems/combination-sum/
 * combinationSum
 * Runtime: 79 ms, faster than 90.50% of JavaScript online submissions for Combination Sum.
 * Memory Usage: 48.6 MB, less than 30.68% of JavaScript online submissions for Combination Sum.
 *
 * combinationSum_refactored
 * Runtime: 125 ms, faster than 34.88% of JavaScript online submissions for Combination Sum.
 * Memory Usage: 44.8 MB, less than 92.35% of JavaScript online submissions for Combination Sum.
 *
 * 문제설명
 * 주어지는 중복없는 값의 배열의 요소를 더하여 원하는 값이 나오는 모든 조합을 구하라
 * 요소는 모두 양수고 더하는것만 가능
 * 요소는 여러번 사용할 수 있음
 * 조합의 내용은 유일해야함
 * (
 *      ([2, 2, 3], [2, 3, 2]) 인 경우
 *      [2, 2, 3] == [2, 3, 2] 는 중복
 *      그러므로, [2, 2, 3] or [2, 3, 2] 중 하나만 정답
 * )
 * 분석결과 백트래킹 문제로 판단하고 풀어보았다
 * 순열은 탐색한 것도 다음 탐색에 고려해야 하지만 조합은 다음 것들만 고려하면 되었다
 *
 */

const assert = require("assert");

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  // backtracking fn
  const fn = (history, arr) => {
    const sums = history.reduce((acc, cur) => acc + cur, 0);
    if (sums === target) {
      ans.push(history.slice(0));
      return;
    }
    if (sums > target) return;
    for (let i = 0; i < arr.length; i++) {
      history.push(arr[i]);
      fn(history, [...arr.slice(i)]);
      history.pop(arr[i]);
    }
  };
  fn([], candidates);

  return ans;
};

var combinationSum_refactored = function (candidates, target) {
  const ans = [];
  // backtracking fn
  const fn = (history, startIdx) => {
    const sums = history.reduce((acc, cur) => acc + cur, 0);
    if (sums === target) {
      ans.push(history.slice(0));
      return;
    }
    if (sums > target) return;
    for (let i = startIdx; i < candidates.length; i++) {
      history.push(candidates[i]);
      fn(history, i);
      history.pop();
    }
  };
  fn([], 0);

  return ans;
};

const tcList = [
  [
    [2, 3, 5],
    8,
    [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ],
  ],
  [[2, 3, 6, 7], 7, [[2, 2, 3], [7]]],
];
tcList.forEach(([candidates, target, expect]) => {
  const answer = combinationSum_refactored(candidates, target);
  assert.deepEqual(answer, expect);
  console.log("pass");
});

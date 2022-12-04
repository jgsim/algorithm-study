/**
 * https://leetcode.com/problems/permutations/
 *
 * permute_20220213
 * Your runtime beats 95.86 % of javascript submissions.
 * Your memory usage beats 16.15 % of javascript submissions.
 *
 * permute_220528
 * Runtime: 112 ms, faster than 32.96% of JavaScript online submissions for Permutations.
 * Memory Usage: 44.7 MB, less than 86.04% of JavaScript online submissions for Permutations.
 *
 * permuteMyBest
 * Runtime: 59 ms Your runtime beats 99.88 % of javascript submissions.
 * Memory Usage: 44.7 MB Your memory usage beats 80.35 % of javascript submissions.
 *
 * 문제설명
 * 숫자로 이루어진 배열을 받으면 가능한 모든 순열을 리턴하라
 * 순서는 상관없음, 중복값 없음
 *
 *
 * 해설용
 * fn ([nums], [history]) => {
 *    // 탐색이 끝난 케이스
 *    if (history 탐색끝남) 결과에 history 추가, 현재 함수 종료
 *
 *    // 더 탐색해야 하는 케이스
 *    for n in nums
 *      [n 제외한 배열] as newNums
 *      history.push(n)
 *      fn(newNums, newHistory)
 *      history.pop(n)
 * }
 */

const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute_20220213 = function (nums) {
  const answer = [];
  const fn = (prefix, arr) => {
    if (!arr.length) {
      answer.push([...prefix]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      prefix.push(arr[i]);
      fn(
        prefix,
        arr.filter((v, idx) => idx !== i)
      );
      prefix.pop();
    }
  };
  fn([], nums);
  return answer;
};
const permute_220528 = (nums) => {
  const ans = [];
  const fn = (history, arr) => {
    if (history.length === nums.length) {
      ans.push(history);
      return;
    }
    if (!arr.length) return;
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      fn([...history, val], [...arr.slice(0, i), ...arr.slice(i + 1)]);
    }
  };
  fn([], nums);

  return ans;
};
var permuteMyBest = function (nums) {
  const result = [];
  const fn = (nums, set, ans) => {
    if (!nums.length) ans.push([...set]);
    for (let i = 0; i < nums.length; i++) {
      const nextNums = nums.filter((v, idx) => idx !== i);
      set.push(nums[i]);
      fn(nextNums, set, ans);
      set.pop();
    }
  };
  fn(nums, [], result);
  return result;
};

const tcList = [
  [
    [1, 2, 3],
    [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  ],
  [
    [0, 1],
    [
      [0, 1],
      [1, 0],
    ],
  ],
  [[1], [[1]]],
];

/**
 * 완벽한 validation은 아님 ㅎ
 */
const validator = (answer = [], expect = []) => {
  expect = expect.map((v) => v.join(","));
  return (
    answer.length === expect.length &&
    answer.every((ans) => expect.includes(ans.join(",")))
  );
};
const doTest = (tcList, solution) => {
  tcList.forEach(([nums, expect]) => {
    const answer = solution(nums);
    const result = validator(answer, expect);
    assert.equal(true, result);
  });
  console.log("done");
};
doTest(tcList, permute_20220213);
doTest(tcList, permute_220528);
doTest(tcList, permuteMyBest);

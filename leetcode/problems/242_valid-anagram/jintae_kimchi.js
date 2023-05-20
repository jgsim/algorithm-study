/**
 * https://leetcode.com/problems/valid-anagram/
 * Runtime: 149 ms, faster than 22.05% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 50 MB, less than 5.30% of JavaScript online submissions for Valid Anagram.
 * 역시 이 방법은 느렸다. 적어도 맵 형태로 풀면 좋은 성능으로 해결 가능할거라고 봄
 *
 * 문제설명
 * 문자열 s, t 두개가 주어지면 아나그램인지 판별하여 boolean 리턴
 * 문자열은 영문 소문자로만 구성됨
 *
 * 해결방법
 * 정렬을 공부하니까 정렬로 해결하자
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: ["anagram", "nagaram"],
      expect: true,
    },
    {
      params: ["anagram", "nagaraz"],
      expect: false,
    },
  ],
  isAnagram
);

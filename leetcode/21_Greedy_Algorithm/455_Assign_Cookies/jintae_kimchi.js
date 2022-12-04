/**
 * https://leetcode.com/problems/assign-cookies/
 * Runtime: 103 ms, faster than 89.03% of JavaScript online submissions for Assign Cookies.
 * Memory Usage: 44.8 MB, less than 50.91% of JavaScript online submissions for Assign Cookies.
 *
 * 문제설명
 * input
 * g: Array<number> 아이목록, 값은 각 아이마다 원하는 쿠키사이즈를 의미
 * s: Array<number> 쿠키목록, 값은 쿠키의 사이즈를 의미
 *
 * 아이가 원하는 크기를 만족하는(더 큰것도 가능) 쿠키를 하나씩 나눠줌
 *
 * output: number 나눠줄 수 있는 쿠키의 최대개수
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // sort
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  // give cookies
  let i = 0;
  let j = 0;
  let output = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      // 쿠키 줄 수 있음
      i++;
      j++;
      output++;
    } else {
      // 아이가 탐욕스러움
      j++;
    }
  }

  return output;
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [
        [1, 2, 3],
        [1, 1],
      ],
      expect: 1,
    },
    {
      params: [
        [1, 2],
        [1, 2, 3],
      ],
      expect: 2,
    },
  ],
  findContentChildren
);

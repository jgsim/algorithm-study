/**
 * https://leetcode.com/problems/circular-sentence/
 *
 * senctence 문장이 주어지면 끝말잇기가 되는지 검사(끝과 처음도 포함)
 * 한글자면 자기자신이 되는지 보면 됨
 * 대소문자도 구분함
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    const curr = words[i];
    let next = words[i + 1];
    if (!next) {
      next = words[0];
    }
    if (curr[curr.length - 1] !== next[0]) return false;
  }
  return true;
};
// (1 hour 22 minutes 25 seconds left)
const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: ["leetcode exercises sound delightful"],
      expect: true,
    },
    {
      params: ["eetcode"],
      expect: true,
    },
    {
      params: ["Leetcode is cool"],
      expect: false,
    },
  ],
  isCircularSentence
);

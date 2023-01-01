/**
 * https://leetcode.com/problems/count-pairs-of-similar-strings/description/
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  const normalized = words.map((word) => {
    const set = new Set([...word]);
    const values = [...set.values()];
    const str = values.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
    return str;
  });

  let pair = 0;
  for (let i = 0; i < normalized.length; i++) {
    const cur = normalized[i];
    for (let j = i + 1; j < normalized.length; j++) {
      const other = normalized[j];
      if (cur === other) pair += 1;
    }
  }
  return pair;
};
// 1 15

const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [["aba", "aabb", "abcd", "bac", "aabc"]],
      expect: 2,
    },
    {
      params: [["aabb", "ab", "ba"]],
      expect: 3,
    },
  ],
  similarPairs
);

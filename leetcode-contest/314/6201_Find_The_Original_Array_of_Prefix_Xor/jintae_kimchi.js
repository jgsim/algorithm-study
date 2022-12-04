/**
 * pref[i] = arr[0] ^ arr[...] ^ arr[i]
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const ans = [pref[0]];
  for (let i = 1; i < pref.length; i++) {
    ans[i] = pref[i - 1] ^ pref[i];
  }
  return ans;
};
//18 left
const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [[5, 2, 0, 3, 1]],
      expect: [5, 7, 2, 3, 2],
    },
    {
      params: [[13]],
      expect: [13],
    },
  ],
  findArray
);

/**
 * https://leetcode.com/problems/filter-elements-from-array/
 * Runtime 51 ms Beats 74.91% Memory 42.5 MB Beats 5.10%
 *
 * javascript
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const ans = [];
  arr.forEach((...arg) => {
    if (fn(...arg)) {
      ans.push(arg[0]);
    }
  });
  return ans;
};

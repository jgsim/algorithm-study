/**
 * https://leetcode.com/problems/array-reduce-transformation/
 * Runtime 57 ms Beats 58.49% Memory 42.8 MB Beats 18.42%
 *
 * javascript
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  nums.forEach((x) => {
    init = fn(init, x);
  });
  return init;
};

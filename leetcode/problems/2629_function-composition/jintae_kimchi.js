/**
 * https://leetcode.com/problems/function-composition/
 * Runtime 63 ms Beats 75.12% Memory 42.9 MB Beats 91.45%
 *
 * javascript
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

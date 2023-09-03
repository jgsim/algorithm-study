/**
 * https://leetcode.com/problems/memoize/description/
 * Runtime 273 ms Beats 91.12% Memory 107.8 MB Beats 77.99%
 *
 * javascript function composition | caching | medium
 */

type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const map = new Map<string, unknown>();
  return function (...args) {
    const argStr = JSON.stringify(args);
    if (!map.has(argStr)) {
      map.set(argStr, fn(...args));
    }

    return map.get(argStr);
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

/**
 * https://leetcode.com/problems/add-two-promises/
 * Runtime 56 ms Beats 84.61% Memory 41.4 MB Beats 96.64%
 *
 * javascript
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return (await promise1) + (await promise2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

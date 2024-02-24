/**
 * https://leetcode.com/problems/distribute-candies/description/
 * Runtime 98 ms Beats 62.12% of users with TypeScript
 * Memory 63.49 MB Beats 80.30% of users with TypeScript
 *
 * easy | Array | Hash Table
 */

function distributeCandies(candyType: number[]): number {
  const setLimit = new Set<number>(candyType).size;
  const limit = candyType.length / 2; // always even number
  return Math.min(setLimit, limit);
}

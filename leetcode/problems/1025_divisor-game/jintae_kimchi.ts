/**
 * https://leetcode.com/problems/divisor-game/description/
 * Runtime 48 ms Beats 90.74% of users with TypeScript
 * Memory 42.56 MB Beats 61.11% of users with TypeScript
 *
 * easy | math | dp | brainteaser | game theory
 *
 * 베스킨라빈스처럼 낮은 숫자의 결과가 정해져 있기 때문에 점화식을 유도하면 되는데
 * 실제로 테이블로 그려보면 홀짝순으로 나옴
 */

function divisorGame(n: number): boolean {
  return n % 2 === 0;
}

/**
 * https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/
 * failed (문제 이해못함)
 * runtime 13.89%
 * memory 8.33%
 * (힙을 안써서 성능이 나락)
 *
 * k 번 시행하면서 아래의 과정을 거친 값의 총 합을 구하라
 * -> gift에서 가장 큰 수를 뽑고 제곱근을 버린 정수값으로 교체한다
 * 내가 참고한 솔루션은 sort를 사용하였지만 힙을 사용해야 함
 * @param gifts
 * @param k
 * @returns
 */
function pickGifts(gifts: number[], k: number): number {
  for (let i = 0; i < k; i++) {
    gifts.sort((a, b) => a - b);
    const gift = gifts.pop();
    gift && gifts.push(Math.floor(Math.sqrt(gift)));
  }
  return gifts.reduce((acc, curr) => acc + curr);
}

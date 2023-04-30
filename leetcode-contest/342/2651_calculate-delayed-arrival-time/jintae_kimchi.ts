/**
 * https://leetcode.com/problems/calculate-delayed-arrival-time/description/
 * Runtime 72 ms Beats 42% Memory 44.4 MB Beats 74%
 *
 * 문제)
 * 도착시간(1~23)과 지연시간(1~24)이 주어짐
 * 도착시간+지연시간을 적용한 실제 탑승시간을 구하라
 * (하루는 24시간)
 *
 * 풀이)
 * 간단한 연산문제
 * 나는 나머지 연산으로 통일했지만 조금 더 성능으 높이려면
 * 나머지 연산이 필요없는 케이스를 따로 처리하는 방법이 있다.
 */

function findDelayedArrivalTime(
  arrivalTime: number,
  delayedTime: number
): number {
  return (arrivalTime + delayedTime) % 24;
}

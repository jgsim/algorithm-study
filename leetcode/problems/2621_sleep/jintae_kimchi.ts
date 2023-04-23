/**
 * https://leetcode.com/problems/sleep/
 * Runtime 73 ms Beats 12.90% Memory 42.6 MB Beats 75.44%
 *
 * 문제)
 * milliseconds 만큼 지연실행하는 함수 디자인
 *
 * 풀이)
 * promise 로 간단히 풀 수 있음
 * (실무에서 실제 사용하고 있음 ㅋㅋ)
 */

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

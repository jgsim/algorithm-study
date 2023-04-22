/**
 * https://leetcode.com/problems/counter/
 * Runtime 56 ms Beats 82.91% Memory 43 MB Beats 52.55%
 *
 * 문제)
 * 카운터 만들기
 *
 * 풀이)
 * 클로져 알고 있냐 테스트
 */

function createCounter(n: number): () => number {
  let inc = n;
  return function () {
    return inc++;
  };
}

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12

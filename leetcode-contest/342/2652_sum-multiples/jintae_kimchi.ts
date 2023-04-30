/**
 * https://leetcode.com/problems/sum-multiples/submissions/941886552/
 * Runtime 83 ms Beats 37.31% Memory 48.9 MB Beats 7.46%
 *
 * 문제)
 * n이라는 자연수가 주어지면 1 ~ n 까지 수 중 3, 5, 7로 나누어 떨어지는 수들의 총합을 구하라
 *
 * 풀이)
 * 단순히 나머지 연산만 하는것보단 저장하라는 걸로 파악하고 맵에 기록하고 총합을 더하는 식으로 구현함
 * 그래서 공간복잡도는 낮을 수 밖에 없었는데
 * 제출한 코드들을 분석해보니 실행시간은 너무 제각각이었다
 */

function sumOfMultiples(n: number): number {
  const map = new Map<number, boolean>();
  for (let i = 3; i <= n; i += 3) {
    map.set(i, true);
  }
  for (let i = 5; i <= n; i += 5) {
    map.set(i, true);
  }
  for (let i = 7; i <= n; i += 7) {
    map.set(i, true);
  }
  let ans = 0;
  map.forEach((v, k) => {
    ans += k;
  });
  return ans;
}

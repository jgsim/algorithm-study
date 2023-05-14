/**
 * https://leetcode.com/problems/custom-sort-string/
 * Runtime 61 ms Beats 75.86% Memory 44.7 MB Beats 62.7%
 *
 * 문제)
 * order 라는 정렬 기준이 있고 s 라는 문자열을 그 기준에 맞게 정렬해야 함
 *
 * 풀이)
 * 정렬 기준에 해당하는 문자를 뽑아서 결과값에 우선적으로 넣고 남은 것들을 붙이는 식으로 해결함 ( N*(logN+(s.length) )
 * 솔루션에선 map을 사용하라고 나와 있음 (3N 으로 해결 가능))
 */

function customSortString(order: string, s: string): string {
  const arr = s.split("");
  let ans = "";
  for (let i = 0; i < order.length; i++) {
    const ch = order[i];
    arr.sort((a, b) => (a === ch ? 1 : -1));
    while (arr[arr.length - 1] === ch) {
      ans += arr.pop();
    }
  }
  return ans + arr.join("");
}

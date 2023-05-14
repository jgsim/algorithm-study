/**
 * https://leetcode.com/problems/reverse-string-ii/submissions/949389799/
 * Runtime 61 ms Beats 92% Memory 44.6 MB Beats 98.67%
 *
 * 문제)
 * 문자열 s와 k가 주어지고 2k 단위로 k번쨰 문자까지 뒤집음
 *
 * 풀이)
 * 2k 단위로 루프를 돌면서
 * 해당 단어를 k번째까지 잘라 뒤집고 다시 붙이는 식
 */

function reverseStr(s: string, k: number): string {
  const result: string[] = [];
  const k2 = 2 * k;
  for (let i = 0; i < s.length; i += k2) {
    const left = s.slice(i, i + k);
    const right = s.slice(i + k, i + k2);
    result.push(left.split("").reverse().join("") + right);
  }
  return result.join("");
}

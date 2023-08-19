/**
 * https://leetcode.com/problems/rotate-string/description/
 * Runtime 58 ms Beats 76.12% Memory 42.5 MB Beats 80.60%
 *
 * string | easy
 *
 * 문자열의 인덱스 기준으로 slice 하면서 비교할 수 있지만
 * 직관적으로 문자열을 반복하면 모든 서브셋이 나온다는 아이디어로 품
 * (문제에서 부분 문자열은 인정하지 않음 s.len == goal.len)
 */

function rotateString(s: string, goal: string): boolean {
  return s.length === goal.length && s.repeat(2).includes(goal);
}

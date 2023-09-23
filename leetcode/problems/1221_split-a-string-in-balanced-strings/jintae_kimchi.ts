/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
 * Runtime 64 ms Beats 16.48% Memory 42.6 MB Beats 87.91%
 * (성능 문제없음)
 *
 * easy | stack
 *
 * 직접 배열에 push pop 으로 구현했다가 카운팅하는 방식으로 개선함
 * left, right 가 직관적이지만 하나의 변수로도 제어할 수 있음
 */

function balancedStringSplit(s: string): number {
  let left = 0;
  let right = 0;

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "L") {
      left += 1;
    } else if (ch === "R") {
      right += 1;
    } else {
      // X
    }
    if (left === right) {
      left = 0;
      right = 0;
      ans += 1;
    }
  }
  return ans;
}

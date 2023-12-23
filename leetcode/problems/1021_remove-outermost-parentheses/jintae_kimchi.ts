/**
 * https://leetcode.com/problems/remove-outermost-parentheses/description/
 * Runtime 53 ms Beats 88.57% of users with TypeScript
 * Memory 44.16 MB Beats 92.86% of users with TypeScript
 *
 * easy | string | stack
 *
 */

function removeOuterParentheses(s: string): string {
  let ans = "";
  const stack: ("(" | ")")[] = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s[i] as "(" | ")";
    if (curr === "(") {
      if (stack.length > 0) ans += curr;
      stack.push(curr);
    } else {
      stack.pop();
      if (stack.length > 0) ans += curr;
    }
  }
  return ans;
}

/**
 * Runtime 61 ms Beats 67.14% of users with TypeScript
 * Memory 45.06 MB Beats 55.71% of users with TypeScript
 *
 * 실제 스택에 넣지 않고 인덱스만 바꾸는 식으로도 짜봤는데 성능이 오히려 낮았음
 */
function removeOuterParentheses_withoutStack(s: string): string {
  let ans = "";
  let stackLen = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const curr = s[i];

    if (stackLen === 0 && curr === "(") {
      if (stackLen > 0) ans += curr;
      stackLen++;
    } else if (curr === ")") {
      stackLen--;
      if (stackLen > 0) ans += curr;
    }
  }
  return ans;
}

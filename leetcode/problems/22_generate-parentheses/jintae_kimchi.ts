/**
 * https://leetcode.com/problems/generate-parentheses/description/
 * Runtime Details 49ms Beats 91.97%of users with TypeScript
 * Memory Details 44.72MB Beats 53.65%of users with TypeScript
 *
 * medium | string | dynamic programming | backtracking
 *
 * 모든 경우의 수를 구하는 것이므로 가능한 모든 케이스를 발산시키면 됨
 * 단, 괄호의 유효한 형태를 유지하도록 조건 처리
 */

function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  const generate = (acc: string, open: number, close: number) => {
    // 종료조건
    if (open === n && close === n) {
      res.push(acc);
      return;
    }
    // 우괄호 추가하여 탐색, 현재 길이에서 열 수 있는지 검사
    if (open < n) {
      generate(acc + "(", open + 1, close);
    }
    // 좌괄호 추가하여 탐색, 현재 길이에서 닫을 수 있는지 검사
    if (close < n && open > close) {
      generate(acc + ")", open, close + 1);
    }
  };
  generate("", 0, 0);

  return res;
}

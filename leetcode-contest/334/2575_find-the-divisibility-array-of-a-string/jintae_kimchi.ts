/**
 * https://leetcode.com/problems/find-the-divisibility-array-of-a-string/
 * Runtime 230 ms Beats 43.33% Memory 65.2 MB Beats 36.67%
 *
 * 문제설명대로 가장 왼쪽숫자부터 나눗셈을 해보면
 * 나머지 유무에 따라 답의 인덱스 값이 정해지는 걸 확인 할 수 있음
 * 그걸 그대로 코드로 옮김
 */

function divisibilityArray(word: string, m: number): number[] {
  const ans: number[] = [];

  let target = 0;
  for (let i = 0; i < word.length; i++) {
    // 기존 자릿수를 높여줘야 함
    const num = target * 10 + Number(word[i]);
    const remainder = num % m;
    ans[i] = remainder === 0 ? 1 : 0;
    target = remainder;
  }

  return ans;
}

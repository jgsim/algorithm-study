/**
 * https://leetcode.com/problems/rotated-digits/description/
 * Runtime 61ms Beats 100.00%of users with TypeScript
 * Memory 44.42MB Beats 90.00%of users with TypeScript
 *
 * medium | Math | Dynamic Programming
 *
 * 각 자리를 돌려서 값이 바뀌는 케이스를 세야 함
 * 돌렸을때 숫자가 되지 않는 자릿수가 있으면 스킵
 */

function rotatedDigits(n: number): number {
  let ans = 0;
  const invalidSet = new Set([3, 4, 7]); // 돌리면 숫자가 아닌 값들
  const validSet = new Set([2, 5, 6, 9]); // 돌리면 숫자가 바뀌는 값들
  const validation = (v: number) => {
    let valid = false;
    while (v) {
      const mod = v % 10;
      if (invalidSet.has(mod)) return false;
      if (validSet.has(mod)) {
        valid = true;
      }
      v = Math.trunc(v / 10);
    }
    return valid;
  };

  for (let i = 1; i <= n; i++) {
    if (validation(i)) ans++;
  }
  return ans;
}

function rotatedDigits_str(n: number): number {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const str = i.toString();
    if (str.match(/3|4|7/g)) continue;
    if (str.match(/2|5|6|9/g)) ans++;
  }

  return ans;
}

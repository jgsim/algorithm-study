/**
 * https://leetcode.com/problems/palindrome-number/description/
 * Runtime 127 ms Beats 91.41% of users with TypeScript
 * Memory 58.03 MB Beats 14.54% of users with TypeScript
 *
 * easy | math
 *
 * 문자열로 변환하여 처리 시 변환비용때문에 비효율적임
 */

function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const org = x;
  let pal = 0;
  while (x) {
    pal *= 10;
    pal += x % 10;
    x = Math.floor(x / 10);
  }
  return org === pal;
}
/**
 * worse
 */
function isPalindrome_str(x: number): boolean {
  if (x < 0) return false;
  const xStr = x.toString();
  const n = xStr.length;
  for (let i = 0; i < n / 2; i++) {
    const left = xStr[i];
    const right = xStr[n - 1 - i];
    if (left !== right) return false;
  }
  return true;
}

/**
 * Runtime 74 ms Beats 87.45%
 * Memory 57.47 MB Beats 84.88%
 */
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const n = s.length;
  for (let i = 0; i < n / 2; i++) {
    let tmp = s[i];
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = tmp;
  }
}

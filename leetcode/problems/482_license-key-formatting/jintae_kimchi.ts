/**
 * https://leetcode.com/problems/license-key-formatting/description/
 * Runtime 54 ms Beats 100% Memory 48.6 MB Beats 66.67%
 *
 * string manipulation
 */
function licenseKeyFormatting(s: string, k: number): string {
  s = s.toUpperCase();
  const ansArr: string[] = [];

  let part = "";
  let idx = s.length - 1;
  for (; idx >= 0; idx--) {
    const ch = s[idx];
    if (ch === "-") continue;
    if (part.length < k) {
      part = ch + part;
    } else {
      ansArr.push(part);
      part = ch;
    }
  }
  if (part.length) {
    ansArr.push(part);
  }

  return ansArr.reverse().join("-");
}

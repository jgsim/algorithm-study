/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * easy
 */

function strStr(haystack: string, needle: string): number {
  // return haystack.indexOf(needle);
  for (let i = 0; i < haystack.length; i++) {
    // s, a, d, b, u, t, s, a, d
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      // s, a, d
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
}

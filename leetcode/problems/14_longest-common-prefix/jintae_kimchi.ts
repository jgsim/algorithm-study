/**
 * https://leetcode.com/problems/longest-common-prefix/description/
 * easy
 */

// 8min / 40.08% / 7.31%
function longestCommonPrefix(strs: string[]): string {
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    let next = "";
    for (let j = 0; j < str.length; j++) {
      if (ans[j] !== str[j]) {
        break;
      }
      next += ans[j];
    }
    ans = next;
  }
  return ans;
}

// 100.00% / 91.87%
function longestCommonPrefix2(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];
  const len = Math.min(first.length, last.length);

  let i = 0;
  while (i < len && first[i] === last[i]) {
    i++;
  }

  return first.slice(0, i);
}

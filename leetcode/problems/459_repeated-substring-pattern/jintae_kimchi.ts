/**
 * https://leetcode.com/problems/repeated-substring-pattern/description/
 * Runtime 77ms Beats 53.08% of users with TypeScript
 * Memory 49.24MB Beats 40.00% of users with TypeScript
 *
 * easy | string
 */
function repeatedSubstringPattern(s: string): boolean {
  const len = s.length;
  for (let i = 1; i <= len / 2; i++) {
    const curr = s.slice(0, i);
    let hasPattern = true;
    for (let j = i; j < len; j += curr.length) {
      const next = s.slice(j, j + curr.length);
      if (curr !== next) {
        hasPattern = false;
        break;
      }
    }
    if (hasPattern) {
      return true;
    }
  }
  return false;
}

/**
 * Runtime 59ms Beats 86.15% of users with TypeScript
 * Memory 45.15MB Beats 87.69% of users with TypeScript
 */
function repeatedSubstringPattern_clever(s: string): boolean {
  const concated = s.slice(1) + s.slice(0, s.length - 1);
  return concated.includes(s);
}

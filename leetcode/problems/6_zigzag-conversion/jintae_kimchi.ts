/**
 * https://leetcode.com/problems/zigzag-conversion/submissions/1695083786/
 * Runtime 7 ms Beats 45.14%
 * Memory 59.61 MB Beats 82.15%
 *
 * Medium
 */

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  let r = 0; // pointer
  let dir: "u" | "d" = "d"; // direction
  let idx = 0;
  const res: string[] = Array.from({ length: numRows }, () => "");

  while (idx < s.length) {
    const ch = s[idx];
    res[r] += ch;

    // row in/decrement
    if (dir === "d") {
      r++;
    }
    if (dir === "u") {
      r--;
    }
    // direction change
    if (r === numRows - 1) {
      dir = "u";
    }
    if (r === 0) {
      dir = "d";
    }
    // next case
    idx++;
  }

  return res.join("");
}

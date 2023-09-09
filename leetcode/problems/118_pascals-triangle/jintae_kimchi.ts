/**
 * https://leetcode.com/problems/pascals-triangle/
 * Runtime 59 ms Beats 55.53% Memory 44.6 MB Beats 32.63%
 *
 * array | easy
 */

function generate(numRows: number): number[][] {
  const ans: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const curRow: number[] = [1];
    const prevRow = ans[i - 1];
    for (let j = 1; j < i; j++) {
      curRow.push(prevRow[j - 1] + (prevRow[j] ?? 0));
    }
    prevRow && curRow.push(1);
    ans.push(curRow);
  }

  return ans;
}

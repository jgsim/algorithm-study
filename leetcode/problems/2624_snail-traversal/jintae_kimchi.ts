/**
 * https://leetcode.com/problems/snail-traversal/description/
 * Runtime 191 ms Beats 75.36% Memory 63.3 MB Beats 86.79%
 *
 * javascript array | medium
 *
 * 코드 이쁘게 짜기 시합.
 */

export {};
declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  if (rowsCount * colsCount !== this.length) return [];

  const ans: number[][] = new Array(rowsCount);
  for (let i = 0; i < rowsCount; i++) {
    ans[i] = new Array(colsCount);
  }

  let isDown = true;
  const n = this.length;
  let r = 0;
  let c = 0;
  for (let i = 0; i < n; i++) {
    ans[r][c] = this[i];
    if (isDown === true) {
      r++;
      if (r === rowsCount) {
        isDown = false;
        c++;
        r--;
      }
    } else {
      ans[r][c] = this[i];
      r--;
      if (r < 0) {
        isDown = true;
        r++;
        c++;
      }
    }
  }

  return ans;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

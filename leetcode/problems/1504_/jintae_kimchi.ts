/**
 * Runtime 367 ms Beats 25.00%
 * Memory 53.33 MB Beats 25.00%
 */
function numSubmat(mat: number[][]): number {
  // 현재 셀과 붙어있는 1개수 구하면 됨
  // 우, 하 방향만.
  const maxRow = mat.length;
  const maxCol = mat[0].length;

  const find = (r: number, c: number): number => {
    if (r >= maxRow) return 0;
    if (c >= maxCol) return 0;
    const cur = mat[r][c];
    if (cur === 0) return 0;

    let result = 1;
    let maxCurrentRow = r;
    for (let sr = r + 1; sr < maxRow; sr++) {
      const curSearch = mat[sr][c];
      if (curSearch === 0) break;
      result += 1;
      maxCurrentRow = sr;
    }
    for (let sc = c + 1; sc < maxCol; sc++) {
      const curSearch = mat[r][sc];
      if (curSearch === 0) break;
      for (let subr = r + 1; subr < maxRow && subr <= maxCurrentRow; subr++) {
        if (mat[subr][sc] === 0) {
          if (maxCurrentRow >= subr) maxCurrentRow = subr - 1;
          break;
        }
        result += 1;
      }
      result += 1;
    }
    return result;
  };

  let ans = 0;
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxCol; j++) {
      ans += find(i, j);
    }
  }
  return ans;
}

/**
 * ---org---
 * [
 *  [1, 1, 1],
 *  [1, 1, 1],
 *  [1, 1, 1],
 * ]
 *
 * ---dp table---
 * [
 *  [1, 2, 3],
 *  [1, 2, 3],
 *  [1, 2, 3],
 * ]
 *
 * ---counting---
 * row = 0
 * [
 *  [1, 2, 3],
 * ]
 * 1+2+3 = 6
 *
 * row = 1
 * [
 *  [1, 2, 3],
 *  [1, 2, 3],
 * ]
 * 1+1 + 2+2 + 3+3 = 12
 *
 * row = 2
 * [
 *  [1, 2, 3],
 *  [1, 2, 3],
 *  [1, 2, 3],
 * ]
 * 1+1+1 + 2+2+2 + 3+3+3 = 18
 *
 * ---ans---
 * = 6+12+18 = 36
 *
 * 해당 흐름에 0이 껴있는 경우 종료하는 부분을 포함하면 솔루션 코드가 됨
 */
function numSubmat_solution(mat: number[][]): number {
  const row = mat.length;
  const col = mat[0].length;

  // [row][col]
  const dp: number[][] = Array.from({ length: row }, () => Array(col).fill(0));
  let result = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      // 0 또는 이전 왼쪽값 + 1
      if (mat[r][c] === 0) continue;
      dp[r][c] = (dp[r][c - 1] ?? 0) + 1;
      console.log(`(${r},${c}) = ${dp[r][c]}`);

      // 해당 컬럼 기준으로 이전 row 값들 다 읽기
      let min = dp[r][c];
      for (let subr = r; subr >= 0; subr--) {
        console.log(`min = ${min} , ${dp[subr][c]}`);
        min = Math.min(min, dp[subr][c]);
        result += min;
      }
    }
  }
  return result;
}

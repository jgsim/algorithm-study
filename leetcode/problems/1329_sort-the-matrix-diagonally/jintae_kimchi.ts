/**
 * https://leetcode.com/problems/sort-the-matrix-diagonally/description/
 * Runtime 59 ms Beats 97.96% of users with TypeScript
 * Memory 45.70 MB Beats 93.88% of users with TypeScript
 *
 * Medium | array | sorting | matrix
 *
 * timeover 💀
 */

function diagonalSort(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  let dr = 0;
  let dc = n - 1;

  // topright -> leftbottom 방향으로
  while (dr < m && dc >= 0) {
    // 현재 시작점 기준으로 대각선 탐색
    const diagArr: number[] = [];
    for (let r = dr, c = dc; r < m && c < n; r++, c++) {
      diagArr.push(mat[r][c]);
    }
    // 정렬 후 순서대로 넣어주기
    diagArr.sort((a, b) => b - a);
    for (let r = dr, c = dc; r < m && c < n; r++, c++) {
      mat[r][c] = diagArr.pop()!;
    }

    // next
    if (dc === 0) dr++;
    if (dc > 0) dc--;
  }

  return mat;
}

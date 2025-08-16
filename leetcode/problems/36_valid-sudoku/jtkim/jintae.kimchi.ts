/**
 * https://leetcode.com/problems/valid-sudoku/description/
 * medium
 */

function isValidSudoku(board: string[][]): boolean {
  // row
  for (let r = 0; r < 9; r++) {
    const row = board[r];
    const set = new Set<string>();
    for (let i = 0; i < 9; i++) {
      if (row[i] !== "." && set.has(row[i])) return false;
      set.add(row[i]);
    }
  }
  // col
  for (let c = 0; c < 9; c++) {
    const set = new Set<string>();
    for (let i = 0; i < 9; i++) {
      if (board[i][c] !== "." && set.has(board[i][c])) return false;
      set.add(board[i][c]);
    }
  }
  // mat
  // (0~3, 0~3), (0~3, 3~5), (0~3, 6~8)
  // (3~5, 0~3), (3~5, 3~5), (3~5, 6~8)
  // (6~8, 0~3), (6~8, 3~5), (6~8, 6~8)
  for (let mr = 0; mr < 9; mr += 3) {
    for (let mc = 0; mc < 9; mc += 3) {
      const set = new Set<string>();
      for (let rr = mr; rr < mr + 3; rr++) {
        for (let cc = mc; cc < mc + 3; cc++) {
          if (board[rr][cc] !== "." && set.has(board[rr][cc])) return false;
          set.add(board[rr][cc]);
        }
      }
    }
  }

  return true;
}

/**
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 * Runtime 50 ms Beats 87.63% of users with TypeScript
 * Memory 51.31 MB Beats 50.52% of users with TypeScript
 *
 * medium | Array | Matrix | Simulation
 */

/**
 * n    circle
 * 1    1
 * 2    1
 * 3    2
 * 4    2
 * 5    3
 * 6    3
 * 7    4
 * 8    4
 * circle = Math.ceil(n / 2)
 */

/**
 * n = 3
 * [0][0]~[0][1]
 * [0][2]~[1][2]
 * [2][2]~[2][1]
 * [2][0]~[1][0]
 *
 * n = 4
 * [0][0]~[0][2]
 * [0][3]~[2][3]
 * [3][3]~[3][1]
 * [3][0]~[1][0]
 *
 * n = 5
 * [0][0]~[0][3]
 * [0][4]~[3][4]
 * [4][4]~[4][1]
 * [4][0]~[1][0]
 *
 * n = 7
 * 6cell
 * [0][0]~[0][5]
 * [0][6]~[5][6]
 * [6][6]~[6][1]
 * [6][0]~[1][0]
 * 4cell
 * [1][1]~[1][4]
 * [1][5]~[4][5]
 * [5][5]~[5][2]
 * [5][1]~[2][1]
 * 2cell
 * [2][2]~[2][3]
 * [2][4]~[3][4]
 * [4][4]~[4][3]
 * [4][2]~[3][2]
 */

function generateMatrix(n: number): number[][] {
  const target: number[][] = Array.from({ length: n }, () =>
    new Array(n).fill(0)
  );
  if (n === 1) return [[1]];

  const maxDepth = Math.ceil(n / 2);
  let curDepth = 0;
  let num = 1;
  while (maxDepth > curDepth) {
    const minRow = 0 + curDepth;
    const minCol = 0 + curDepth;
    const maxRow = n - curDepth - 1;
    const maxCol = n - curDepth - 1;
    let row = minRow;
    let col = minCol;
    // 1x1
    if (minRow === maxRow && minCol === maxCol) {
      target[row][col] = num;
      break;
    }
    // >
    while (col < maxCol) {
      target[row][col] = num++;
      col++;
    }
    // v
    while (row < maxRow) {
      target[row][col] = num++;
      row++;
    }
    // <
    while (col > minCol) {
      target[row][col] = num++;
      col--;
    }
    // ^
    while (row > minRow) {
      target[row][col] = num++;
      row--;
    }

    curDepth++;
  }
  return target;
}

// const tcList = [
//   {
//     params: [1],
//     expect: [[1]],
//   },
//   {
//     params: [2],
//     expect: [
//       [1, 2],
//       [4, 3],
//     ],
//   },
//   {
//     params: [3],
//     expect: [
//       [1, 2, 3],
//       [8, 9, 4],
//       [7, 6, 5],
//     ],
//   },
//   {
//     params: [4],
//     expect: [
//       [1, 2, 3, 4],
//       [12, 13, 14, 5],
//       [11, 16, 15, 6],
//       [10, 9, 8, 7],
//     ],
//   },
// ];

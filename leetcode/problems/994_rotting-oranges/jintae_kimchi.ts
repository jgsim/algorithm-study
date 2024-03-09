/**
 * https://leetcode.com/problems/rotting-oranges/description/
 * Runtime 64 ms Beats 91.33% of users with TypeScript
 * Memory 53.84 MB Beats 63.93% of users with TypeScript
 *
 * medium | Array | Breadth-First Search | Matrix
 */

function rotting(grid: number[][]) {
  // 현재 단계의 썩은 오렌지 모음
  const rottenOranges: number[][] = [];
  grid.forEach((row, rowIndex) =>
    row.forEach((orange, colIndex) => {
      if (orange === 2) {
        rottenOranges.push([rowIndex, colIndex]);
      }
    })
  );
  // 오염진행(중복 업데이트 될 수 있음)
  rottenOranges.forEach(([r, c]) => {
    if (grid[r - 1]?.[c] === 1) grid[r - 1][c] = 2;
    if (grid[r]?.[c + 1] === 1) grid[r][c + 1] = 2;
    if (grid[r + 1]?.[c] === 1) grid[r + 1][c] = 2;
    if (grid[r]?.[c - 1] === 1) grid[r][c - 1] = 2;
  });
}
function countFreshOranges(grid: number[][]) {
  return grid.flat().filter((orange) => orange === 1).length;
}
function orangesRotting(grid: number[][]): number {
  let prevFreshOranges = countFreshOranges(grid);
  let ellapsedTime = 0;

  // m,n <= 10
  while (ellapsedTime < 100) {
    // 현재 신선한 오렌지 개수
    if (prevFreshOranges === 0) return ellapsedTime;
    // 오염됨
    rotting(grid);
    ellapsedTime++;
    // 오염된 후 신선한 오렌지 개수
    const freshOranges = countFreshOranges(grid);
    // 더 이상 오염될 수 없음
    if (freshOranges === prevFreshOranges) return -1;
    prevFreshOranges = freshOranges;
  }

  return ellapsedTime;
}

// const tcList = [
//   {
//     params: [
//       [
//         [2, 0, 1, 1, 1, 1, 1, 1, 1, 1],
//         [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
//         [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
//         [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
//         [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
//         [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
//         [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
//         [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
//         [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       ],
//     ],
//     expect: 58,
//   },
//   {
//     params: [
//       [
//         [2, 1, 1],
//         [1, 1, 0],
//         [0, 1, 1],
//       ],
//     ],
//     expect: 4,
//   },
//   {
//     params: [[[0, 2]]],
//     expect: 0,
//   },
//   {
//     params: [
//       [
//         [2, 1, 1],
//         [0, 1, 1],
//         [1, 0, 1],
//       ],
//     ],
//     expect: -1,
//   },
// ];

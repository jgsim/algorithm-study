/**
 * https://leetcode.com/problems/prison-cells-after-n-days/
 * Runtime 65 ms Beats 68.75% of users with TypeScript
 * Memory 51.61 MB Beats 81.25% of users with TypeScript
 *
 * medium | Array, Hash Table, Math, Bit Manipulation
 *
 * 사이클 구조를 적용하면서 엣지 케이스를 관리하기가 어려웠음
 */

// has patterns (every 14 day)
// 00010010 0
// 01010010 1
// 01110010 2
// 00100010 3
// 00101010 4
// 00111110 5
// 00011100 6
// 01001000 7
// 01001010 8
// 01001110 9
// 01000100 10
// 01010100 11
// 01111100 12
// 00111000 13
// n % 14 => actual loop
function prisonAfterNDays(cells: number[], n: number): number[] {
  const cellLen = cells.length;
  const firstCycle = Math.min(14, n);

  const fn = (cells: number[], n: number) => {
    for (let i = 0; i < n; i++) {
      const tmp: number[] = [];
      for (let j = 0; j < cellLen; j++) {
        if (j === 0 || j === cellLen - 1) {
          // edge
          tmp.push(0);
        } else {
          // processing
          // [0, _, 0] = 1
          // [1, _, 0] = 0
          // [0, _, 1] = 0
          // [1, _, 1] = 1
          // => !xor
          tmp.push(cells[j - 1] ^ cells[j + 1] ? 0 : 1);
        }
      }
      cells = tmp;
    }
    return cells;
  };

  cells = fn(cells, firstCycle);
  if (n > 14) {
    const secondCycle = (n - 14) % 14;
    cells = fn(cells, secondCycle);
  }

  return cells;
}

// runTestCase({
//     solution: prisonAfterNDays,
//     tcList: [
//         {
//             params: [[1, 1, 0, 1, 1, 0, 0, 1], 300663720],
//             expect: [0, 0, 1, 0, 0, 1, 1, 0],
//         },
//         {
//             params: [[0, 1, 0, 1, 1, 0, 0, 1], 7],
//             expect: [0, 0, 1, 1, 0, 0, 0, 0],
//         },
//         {
//             params: [[1, 0, 0, 1, 0, 0, 1, 0], 13],
//             expect: [0, 1, 1, 1, 1, 1, 0, 0],
//         },
//         {
//             params: [[1, 0, 0, 1, 0, 0, 1, 0], 14],
//             expect: [0, 0, 1, 1, 1, 0, 0, 0],
//         },
//         {
//             params: [[1, 0, 0, 1, 0, 0, 1, 0], 15],
//             expect: [0, 0, 0, 1, 0, 0, 1, 0],
//         },
//         {
//             params: [[1, 0, 0, 1, 0, 0, 1, 0], 16],
//             expect: [0, 1, 0, 1, 0, 0, 1, 0],
//         },
//         {
//             params: [[1, 0, 0, 1, 0, 0, 1, 0], 1000000000],
//             expect: [0, 0, 1, 1, 1, 1, 1, 0],
//         },
//     ],
// });

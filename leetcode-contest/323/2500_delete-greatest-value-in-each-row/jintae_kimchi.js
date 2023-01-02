/**
 * https://leetcode.com/contest/weekly-contest-323/problems/delete-greatest-value-in-each-row/
 *
 * row 마다 가장 큰 수를 빼고
 * 한번 뺄 때 전체 row 중 가장 큰 값만 기록
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let ans = 0;

  grid.forEach((row) => {
    row.sort((a, b) => b - a);
  });
  for (let i = 0; i < grid[0].length; i++) {
    let colMax = 0;
    for (let j = 0; j < grid.length; j++) {
      colMax = Math.max(colMax, grid[j][i]);
    }
    ans += colMax;
  }

  return ans;
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");

runTestCase(
  [
    {
      params: [
        [
          [1, 2, 4],
          [3, 3, 1],
        ],
      ],
      expect: 8,
    },
    {
      params: [[[10]]],
      expect: 10,
    },
  ],
  deleteGreatestValue
);

// 1 21 50

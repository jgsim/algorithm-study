/**
 * https://leetcode.com/problems/number-of-islands/
 * Runtime: 185 ms, faster than 15.45% of JavaScript online submissions for Number of Islands.
 * Memory Usage: 49.3 MB, less than 39.14% of JavaScript online submissions for Number of Islands.
 * 결과가 구린데 솔루션 코드들이랑 거의 비슷함
 *
 * numIslands_refactored
 * Runtime: 112 ms, faster than 56.34% of JavaScript online submissions for Number of Islands.
 * Memory Usage: 45.4 MB, less than 52.26% of JavaScript online submissions for Number of Islands.
 * 탐험한 섬은 바다로 만들어버리고 코드량을 좀 줄이니 어느정도 향상됨.
 *
 * 문제설명
 * 주어진 2차원 배열요소가 1이 육지 0이 바다라고 할 때 섬의 개수를 구하라
 * 가로/세로 연결된 덩어리를 섬이라고 함
 *
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 탐험한 지역을 색칠해나가면서 해보자
  let numsOfIslands = 0;

  // 섬의 끝을 탐험하는 재귀함수
  const explore = (r, c) => {
    if (grid[r] === undefined) return;
    const curPos = grid[r][c];
    // 세상의 끝, 바다, 이미 정복함
    if ([undefined, "0", "v"].includes(curPos)) return;

    // 정복하고 다음 목적지로
    grid[r][c] = "v";
    explore(r - 1, c); // 위
    explore(r + 1, c); // 아래
    explore(r, c + 1); // 우
    explore(r, c - 1); // 좌
  };
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // 현재 위치가 육지다?
      // 체크 후 어디까지 육지인지 탐색
      // 섬이다?
      const currentPos = grid[row][col];
      switch (currentPos) {
        case "1":
          // 1인 경우만 새로 발견한 섬이니 추가
          numsOfIslands += 1;
          // 현재 위치 기준으로 섬의 끝까지 마킹
          explore(row, col);
          break;
        case "0":
          // 바다 skip
          break;
        case "v":
          // 이미 탐험한 섬 skip
          break;
        default:
          throw "넌 지금 실수를 저질렀다!";
      }
    }
  }

  return numsOfIslands;
};

const numIslands_refactored = (grid) => {
  let numsOfIslands = 0;

  const explore = (r, c) => {
    if (grid[r] === undefined || grid[r][c] === undefined || grid[r][c] === "0")
      return;

    grid[r][c] = "0"; // 바다로 만듬
    explore(r - 1, c); // 위
    explore(r + 1, c); // 아래
    explore(r, c + 1); // 우
    explore(r, c - 1); // 좌
  };
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        numsOfIslands += 1;
        explore(row, col);
      }
    }
  }

  return numsOfIslands;
};

const tcList = [
  [
    [
      ["1", "0", "1", "1", "1"],
      ["1", "0", "1", "0", "1"],
      ["1", "1", "1", "0", "1"],
    ],
    1,
  ],
  [
    [
      ["1", "1", "1"],
      ["0", "1", "0"],
      ["1", "1", "1"],
    ],
    1,
  ],
  [
    [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ],
    1,
  ],
  [
    [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ],
    3,
  ],
];

tcList.forEach(([grid, expect]) => {
  const result = numIslands_refactored(grid);
  result === expect
    ? console.log("pass")
    : console.error("fail", result, expect);
});

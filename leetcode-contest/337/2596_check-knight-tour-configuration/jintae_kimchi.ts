/**
 * https://leetcode.com/problems/check-knight-tour-configuration/
 * Runtime 84 ms Beats 22.73% Memory 44.5 MB Beats 77.27%
 *
 * 문제설명)
 * n*n 사이즈의 체스판이 주어짐
 * 나이트 한마리를 이동시키는데 모든 칸은 한번만 밟아야 함
 * 시작위치는 0, 0 이고 값은 1부터 이동한 다음칸이 1씩 증가한다
 * 모든 칸을 한번씩 밟을 수 있으면 유효한 경로로 취급한다.
 * 나이트의 이동경로는 파라미터로 주어진다.
 *
 * 문제풀이)
 * 따로 스마트하게 계산하는 건 없고
 * 시작위치부터 나이트를 이동시키면서 다음 값이 존재하는지 검사
 * (물론 8방향의 인덱스를 한 줄로 처리하는 코드는 있음)
 * 끝까지 진행할 수 있으면 유효함.
 * 진행할 수 있어도 시작위치가 0, 0이 아니면 유효하지 않음(<- 이게 함정)
 */

function checkValidGrid(grid: number[][]): boolean {
  if (grid[0][0] !== 0) return false;

  const n = grid.length;
  const last = n * n - 1;
  let curIdx = 0;
  let curRow = 0;
  let curCol = 0;

  while (curIdx < last) {
    const nextPosList = [
      [curRow - 1, curCol - 2],
      [curRow - 2, curCol - 1],

      [curRow - 2, curCol + 1],
      [curRow - 1, curCol + 2],

      [curRow + 1, curCol + 2],
      [curRow + 2, curCol + 1],

      [curRow + 2, curCol - 1],
      [curRow + 1, curCol - 2],
    ];
    const nextPos = nextPosList.find(([r, c]) => curIdx + 1 === grid[r]?.[c]);
    if (!nextPos) return false;

    [curRow, curCol, curIdx] = [nextPos[0], nextPos[1], curIdx + 1];
  }

  return curIdx === last;
}

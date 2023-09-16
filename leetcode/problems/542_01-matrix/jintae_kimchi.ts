/**
 * https://leetcode.com/problems/01-matrix/description/
 * Runtime 4440 ms Beats 5.14% Memory 75.4 MB Beats 23.77%
 *
 * array | bfs | medium
 * bfs 풀이방식 접근법은 맞았으나 몇몇 비효율 적인 부분으로 인해 성능에선 좋지 않은 점수가 나왔다.
 * (4방향 탐색코드는 더 아름답게 개선해야 하지만 전체적인 가독성은 나쁘지 않은듯?)
 */

function updateMatrix(mat: number[][]): number[][] {
  let queue: number[][] = [];
  let phase = 1;

  // collet 1 cells position
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[r].length; c++) {
      const cell = mat[r][c];
      if (cell === phase) {
        queue.push([r, c]);
      }
    }
  }

  // increment
  while (queue.length) {
    const nextQueue: number[][] = [];
    queue.forEach(([r, c]) => {
      const top = mat[r - 1] ? mat[r - 1][c] ?? Infinity : Infinity;
      const right = mat[r] ? mat[r][c + 1] ?? Infinity : Infinity;
      const bottom = mat[r + 1] ? mat[r + 1][c] ?? Infinity : Infinity;
      const left = mat[r] ? mat[r][c - 1] ?? Infinity : Infinity;
      const min = Math.min(top, right, bottom, left);

      mat[r][c] = min + 1;
      if (mat[r][c] > phase) {
        nextQueue.push([r, c]);
      }
    });

    queue = nextQueue;
    phase += 1;
  }

  return mat;
}

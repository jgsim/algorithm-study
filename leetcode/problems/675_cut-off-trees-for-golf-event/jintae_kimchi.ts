/**
 * https://leetcode.com/problems/cut-off-trees-for-golf-event/description/
 * Runtime 4133 ms Beats 37.50% Memory 78 MB Beats 37.50%
 *
 * BFS | Hard
 *
 * 시간초과.
 * 문제점이 몇몇 있지만 어떻게든 통과는 시켰다.
 */

function cutOffTree(forest: number[][]): number {
  const getNextCells = (r: number, c: number) => {
    const directions = [
      [r - 1, c],
      [r, c - 1],
      [r, c + 1],
      [r + 1, c],
    ];
    return directions.filter(([r, c]) => {
      return forest[r]?.[c] > 0;
    });
  };
  const searchMatrix = (
    target: number,
    cells: number[][],
    depth: number,
    visited: Set<string>
  ): number[] => {
    // create next path
    while (cells.length) {
      const len = cells.length;
      let nextCells: number[][] = [];
      for (let i = 0; i < len; i++) {
        const cell = cells[i];
        const cellVal = forest[cell[0]][cell[1]];
        if (target === cellVal) {
          return [depth, cell[0], cell[1]];
        }
        const nextCellCand = getNextCells(cell[0], cell[1]);
        for (let j = 0; j < nextCellCand.length; j++) {
          const nextCell = nextCellCand[j];
          const nextVal = forest[nextCell[0]][nextCell[1]];
          if (target === nextVal) {
            return [depth + 1, nextCell[0], nextCell[1]];
          }
          if (!visited.has(`${nextCell[0]},${nextCell[1]}`)) {
            visited.add(`${nextCell[0]},${nextCell[1]}`);
            nextCells.push(nextCell);
          }
        }
      }
      depth++;
      cells = nextCells;
    }
    // invalid path
    return [-1];
  };

  let ans = 0;
  // 찾아가야 하는 기준 (3, 2, 1) -> pop() 하면서 진행
  const order = forest
    .flat()
    .filter((x) => x > 1)
    .sort((a, b) => b - a);
  // 시작 위치
  let cr = 0;
  let cc = 0;
  // 시작 위치가 target 처리
  if (order[order.length - 1] === forest[cr][cc]) {
    order.pop();
  }
  while (order.length) {
    // 여기로 찾아가기
    const target = order.pop()!;
    // 현재 위치에서 갈 수 있는 곳 뽑기
    const nextCells = getNextCells(cr, cc);
    const set = new Set(`${cr},${cc}`);
    const [steps, ncr, ncc] = searchMatrix(target, nextCells, 1, set);
    cr = ncr;
    cc = ncc;
    if (steps === -1) {
      return -1;
    }
    ans += steps;
  }

  return ans;
}

class TreeNode {
  constructor(public row: number, public col: number, public height: number) {}
}

function cutOffTree_solution(forest: number[][]): number {
  const rows = forest.length;
  const cols = forest[0].length;
  const trees: TreeNode[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (forest[r][c] > 1) {
        trees.push(new TreeNode(r, c, forest[r][c]));
      }
    }
  }

  trees.sort((a, b) => a.height - b.height);

  let totalSteps = 0;
  let curRow = 0;
  let curCol = 0;

  for (const tree of trees) {
    const steps = bfs(curRow, curCol, tree.row, tree.col);
    if (steps === -1) {
      return -1;
    }
    totalSteps += steps;
    curRow = tree.row;
    curCol = tree.col;
  }

  return totalSteps;

  function bfs(
    startRow: number,
    startCol: number,
    targetRow: number,
    targetCol: number
  ): number {
    const queue: TreeNode[] = [new TreeNode(startRow, startCol, 0)];
    const visited = new Set<string>();
    visited.add(`${startRow},${startCol}`);

    while (queue.length > 0) {
      const currentNode = queue.shift()!;

      if (currentNode.row === targetRow && currentNode.col === targetCol) {
        return currentNode.height;
      }

      for (const [dr, dc] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const newRow = currentNode.row + dr;
        const newCol = currentNode.col + dc;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          !visited.has(`${newRow},${newCol}`) &&
          forest[newRow][newCol] > 0
        ) {
          queue.push(new TreeNode(newRow, newCol, currentNode.height + 1));
          visited.add(`${newRow},${newCol}`);
        }
      }
    }

    return -1;
  }
}

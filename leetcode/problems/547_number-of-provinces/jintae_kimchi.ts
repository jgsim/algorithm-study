/**
 * https://leetcode.com/problems/number-of-provinces/description/
 * Runtime 67 ms Beats 76.41% Memory 45 MB Beats 88.21%
 *
 * graph, dfs | medium
 *
 * 꼼수로 풀려다가 잘못된 접근방법으로 인해 시간초과.
 * dfs 로 다시 품
 */

function findCircleNum(isConnected: number[][]): number {
  const len = isConnected.length;
  const visited = new Array(len).fill(false);

  const dfs = (node: number) => {
    visited[node] = true; // 탐색표시

    // node 이웃 노드를 탐색(현재 row의 컬럼들)
    for (let i = 0; i < len; i++) {
      // 이웃노드가 유효할 때 이웃노드의 이웃노드를 재귀적으로 탐색
      if (isConnected[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  let count = 0;
  // 0 ~ n 노드까지 탐색
  for (let i = 0; i < len; i++) {
    // 탐색된 노드는 스킵됨
    if (visited[i]) continue;
    count++;
    // 각 노드마다 최대 탐색하며 visited 에 반영
    dfs(i);
  }

  return count;
}

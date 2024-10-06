/**
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/
 * Runtime 411 ms Beats 42.86% Complexity Memory 85.21 MB Beats 82.14%
 *
 * dfs 인건 알았으나 최소 방향 변경 방법을 생각하지 못해 제출못함
 * dfs 로 중복방문처리만 하면 뒤집힌 경로는 그냥 카운트만 하면 되는 거였음..
 */

function minReorder(n: number, connections: number[][]): number {
  const map: { [key: number]: number[] } = {};
  const visited = new Set<number>();
  const routes = new Set<string>();

  // 양방향인것처럼 만들기
  connections.forEach(([s, d]) => {
    const normal = map[s] ?? [];
    const reverse = map[d] ?? [];
    normal.push(d);
    reverse.push(s);
    map[s] = normal;
    map[d] = reverse;
    routes.add(`${s}-${d}`);
  });

  let reordered = 0;
  const dfs = (node: number) => {
    const nextRoutes = map[node];
    visited.add(node);
    for (const nextNode of nextRoutes) {
      if (!visited.has(nextNode)) {
        // reorder?
        if (routes.has(`${node}-${nextNode}`)) {
          reordered += 1;
        }
        dfs(nextNode);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    dfs(i);
  }
  return reordered;
}

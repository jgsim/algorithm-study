/**
 * https://leetcode.com/problems/network-delay-time/
 * Runtime 93 ms Beats 89.29% Analyze Complexity Memory 58.13 MB Beats 90.00%
 * 힙소트를 사용해야 하는 문제
 * interview set 으로 다시 만났는데 기억리셋되서 시간초과남
 */

interface Dest {
  node: number;
  len: number;
}
function networkDelayTime(times: number[][], n: number, k: number): number {
  const minMap = new Map<number, number>();
  const graph: {
    [k: number]: Dest[];
  } = {};
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  times.forEach(([u, v, w]) => {
    const val: Dest = {
      node: v,
      len: w,
    };
    graph[u].push(val);
  });

  let edgesHeap: [number, number][] = [[0, k]];
  minMap.set(k, 0);

  while (edgesHeap.length) {
    edgesHeap.sort((a, b) => a[0] - b[0]);
    const [dist, node] = edgesHeap.shift()!;
    graph[node].forEach(({ len, node: nextNode }) => {
      const nextDist = dist + len;
      const prevMin = minMap.get(nextNode) ?? Infinity;
      if (prevMin > nextDist) {
        edgesHeap.push([nextDist, nextNode]);
        minMap.set(nextNode, nextDist);
      }
    });
  }

  if (minMap.size !== n) return -1;
  return Math.max(...minMap.values());
}

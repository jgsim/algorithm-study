/**
 * https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
 *
 * 1부터 n까지 찾아가면서 distance가 가장 낮은 값을 찾기
 * 갔던 길을 되돌아갈 수 있고 두번 지나쳐도 distance 값만 따지면 됨
 * 1부터 n까지 무조건 갈 수 있다고 가정함
 * 노드 간 길은 하나라고 가정
 * @param {number} n 1 ~ n 으로 이름지어진 노드
 * @param {number[][]} roads [[x, y, distance], [...], ... ] 2차원 지도의 위치들. 양방향
 * @return {number}
 */
// 시간초과. 코드가 점점 난잡해지면서 실패를 직감했다
const minScoreRetry = (n = 2, roads = []) => {
  // 다시 풀어보기
  // 그래프 문제는 그래프 데이터를 해시형태로 바꾸면 쉽게 풀리는 경향이 있으니
  // 일단 map 만드는 건 자명해보임
  // 길은 항상 있으므로 탐색할 수 있는 모든 노드 중 가장 작은 경로만 구하는게 답
  // 1번 노드부터 수평적으로 탐색하면 다시 돌아가는 노드는 고려할 필요가 없는 것으로 보임

  // map 데이터에는 양방향 이동 가능하도록 from-to, to-from 관계설정
  const map = {};
  for (let i = 0; i < roads.length; i++) {
    const road = roads[i];
    const [from, to, distance] = [road[0], road[1], road[2]];
    if (map[from]) {
      map[from][to] = distance;
    } else {
      map[from] = {
        [to]: distance,
      };
    }
    if (map[to]) {
      map[to][from] = distance;
    } else {
      map[to] = {
        [from]: distance,
      };
    }
  }

  // 1번 노드부터 너비우선탐색
  const visited = [null]; // 탐색한 노드 기록
  const queue = ["1"]; // 1번 노드와 연결된 곳을 시작점으로
  let min = Infinity;
  while (queue.length) {
    const curr = queue.shift();
    visited[curr] = true;
    const nexts = map[curr];
    if (!nexts) continue;
    Object.keys(nexts).forEach((key) => {
      min = Math.min(nexts[key], min);
      if (!visited[key]) queue.push(key);
    });
  }
  return min;
};
/**
 * 통과 못하고 Discuss 찾아보니 내 코드랑 거의 유사한 코드 찾음
 * 파이썬이라서 가능한 코드인가 싶기도..
 * 
 * class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        
        graph = defaultdict(dict)
        for u, v, w in roads:
            graph[u][v] = graph[v][u] = w
        
        res = inf
        vis = set()
        dq = deque([1])

        while dq:
            node = dq.popleft()
            for adj, scr in graph[node].items():
                if adj not in vis:
                    dq.append(adj)
                    vis.add(adj)
                res = min(res,scr)
                
        return res
 */

const minScoreRetry2 = (n = 2, roads = []) => {
  roads.sort((a, b) => a[0] - b[0]);
  const set = new Set();
  const startNode = roads[0];
  set.add(startNode[0]);
  set.add(startNode[1]);
  let min = startNode[2];

  for (let j = 0; j < 100; j++) {
    for (let i = 1; i < roads.length; i++) {
      if (set.has(roads[i][0]) || set.has(roads[i][1])) {
        min = Math.min(min, roads[i][2]);
        set.add(roads[i][0]);
        set.add(roads[i][1]);
      }
    }
  }

  return min;
};
/**
 * 코드는 간결했지만 for문 돌리는게 쉽게 수긍하기 힘든 구조..
 * 나중에 자바스크립트 예제 많아지면 보는걸로
 */

const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [
        7,
        [
          [1, 3, 1484],
          [3, 2, 3876],
          [2, 4, 6823],
          [6, 7, 579],
          [5, 6, 4436],
          [4, 5, 8830],
        ],
      ],
      expect: 579,
    },
    {
      params: [
        20,
        [
          [18, 20, 9207], //
          [14, 12, 1024], //
          [11, 9, 3056], //
          [8, 19, 416], //
          [3, 18, 5898], //
          [17, 3, 6779], //
          [13, 15, 3539], //
          [15, 11, 1451], //
          [19, 2, 3805], //
          [9, 8, 2238], //
          [1, 16, 618], //
          [16, 14, 55], //
          [17, 7, 6903],
          [12, 13, 1559], //
          [2, 17, 3693], //
        ],
      ],
      expect: 55,
    },
    {
      params: [
        4,
        [
          [1, 2, 9],
          [2, 3, 6],
          [2, 4, 5],
          [1, 4, 7],
        ],
      ],
      expect: 5,
    },
    {
      params: [
        4,
        [
          [1, 2, 2],
          [1, 3, 4],
          [3, 4, 7],
        ],
      ],
      expect: 2,
    },
  ],
  minScoreRetry2
);

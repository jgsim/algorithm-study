/**
 * https://leetcode.com/problems/network-delay-time/
 *
 * leetcode제출용
 * Runtime: 157 ms, faster than 58.80% of JavaScript online submissions for Network Delay Time.
 * Memory Usage: 51.1 MB, less than 47.41% of JavaScript online submissions for Network Delay Time.
 *
 * 문제설명
 * 무엇을 하는?: 주어지는 그래프 정보로 모든 노드에 네트워크 신호가 도달하는 최소시간 계산
 * 주어지는 값은?: 그래프 정보 배열, 노드개수, 시작노드
 *      그래프 정보 배열: [시간, 종료, 시간] 형태
 *      노드개수: 1 ~ N 개
 *      시작노드: 1 ~ N 중 특정 값
 * 예외?: 모든 곳에 신호를 전달하기 불가능하면 -1 리턴
 */

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // 인덱스: 1 ~ n
  // 요소: min time, -1로 초기화
  // (0 번 인덱스는 가독성을 위해 안씀 max 값 처리)
  const map = Array.from({ length: n + 1 }, () => -1);
  map[k] = 0; // 시작점은 0으로 초기화
  map[0] = 101; // 인덱스 0안쓰려고 n값 이상으로 설정

  // edge 정보 source 기준으로 사전화
  const edgeDict = times.reduce((prev, curr) => {
    if (prev[curr[0]]) {
      prev[curr[0]].push(curr);
    } else {
      prev[curr[0]] = [curr];
    }
    return prev;
  }, {});

  // 큐 초기화
  const queue = new Queue();
  queue.push(k);

  // 너비 우선 탐색
  while (queue.length) {
    const currentNode = queue.pop();

    // 현재 depth 기준 연결선들 최소시간 계산
    const nextEdges = edgeDict[currentNode];
    nextEdges &&
      nextEdges.forEach((edge) => {
        const [, target, time] = edge;
        const prev = map[target];
        const next = map[currentNode] + time;
        // 방문하지 않았거나 더 작은 값일때만 탐색 진행
        if (prev === -1 || prev > next) {
          map[target] = next;
          queue.push(target);
        }
      });
  }

  map.sort((a, b) => b - a);
  return map[map.length - 1] === -1 ? -1 : map[1];
};

// collapse this
function Queue() {
  this.enqueueArr = [];
  this.dequeueArr = [];
  this.length = 0;
  const makeQueue = () => {
    while (this.enqueueArr.length) {
      this.dequeueArr.push(this.enqueueArr.pop());
    }
  };
  this.push = (val) => {
    this.enqueueArr.push(val);
    if (!this.dequeueArr.length) {
      makeQueue();
    }
    this.length += 1;
  };
  this.pop = () => {
    if (!this.dequeueArr.length) {
      makeQueue();
    }
    this.length -= 1;
    return this.dequeueArr.pop();
  };
}

var leetcode제출용 = function (times, n, k) {
  // 큐 자료구조 인식이 안되서 여기에 넣음
  const enqueue = [];
  const dequeue = [];
  let length = 0;
  const makeQueue = () => {
    while (enqueue.length) {
      dequeue.push(enqueue.pop());
    }
  };
  const push = (val) => {
    enqueue.push(val);
    makeQueue();
    length += 1;
  };
  const pop = () => {
    if (!dequeue.length) {
      makeQueue();
    }
    length -= 1;
    return dequeue.pop();
  };

  // index = n, [index] = time (0 번 인덱스는 가독성을 위해 안씀), -1로 초기화
  const map = Array.from({ length: n + 1 }, () => -1);
  map[k] = 0; // 시작점은 0으로 초기화
  map[0] = 101; // 인덱스 0안쓰려고 n값 이상으로 설정
  // edge 정보 source 기준으로 사전화
  const edgeDict = times.reduce((prev, curr) => {
    if (prev[curr[0]]) {
      prev[curr[0]].push(curr);
    } else {
      prev[curr[0]] = [curr];
    }
    return prev;
  }, {});
  push(k);

  while (length) {
    const currentNode = pop();

    // 현재 depth 기준 연결선들 최소시간 계산
    const nextEdges = edgeDict[currentNode];
    nextEdges &&
      nextEdges.forEach((edge) => {
        const [, target, time] = edge;
        const prev = map[target];
        const next = map[currentNode] + time;
        // 방문하지 않았거나 더 작은 값일때만 탐색 진행
        if (prev === -1 || prev > next) {
          map[target] = next;
          push(target);
        }
      });
  }

  map.sort((a, b) => b - a);
  return map[map.length - 1] === -1 ? -1 : map[1];
};

/**
 * leetcode 에서 본 재밌는 코드
 * 시간 진행에 따른 간선 변화를 업데이트했다
 * 성능도 높은축
 */
var networkDelayTime_clever = function (times, n, k) {
  let changed = true;
  const time = new Array(n).fill(Infinity);
  time[k - 1] = 0;

  while (changed) {
    changed = false;
    for (let [u, v, w] of times) {
      u--;
      v--;

      if (time[u] === Infinity) continue;
      if (time[v] > time[u] + w) {
        time[v] = time[u] + w;
        changed = true;
      }
    }
  }

  let res = Math.max(...time);

  return res === Infinity ? -1 : res;
};

// --------------------------------------------------
const { runTestCase } = require("../../../jtkim/leetcodeTesting");
const tcList = [
  {
    inputs: [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    n: 4,
    k: 2,
    expect: 2,
  },
  {
    inputs: [[1, 2, 1]],
    n: 2,
    k: 1,
    expect: 1,
  },
  {
    inputs: [[1, 2, 1]],
    n: 2,
    k: 2,
    expect: -1,
  },
  {
    inputs: [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 3],
      [2, 5, 6],
      [3, 4, 4],
      [4, 2, 5],
      [5, 4, 7],
    ],
    n: 5,
    k: 1,
    expect: 7,
  },
].map(({ inputs, n, k, expect }) => ({
  params: [inputs, n, k],
  expect,
}));

runTestCase(tcList, networkDelayTime);
runTestCase(tcList, leetcode제출용);

/**
 * https://leetcode.com/problems/task-scheduler/
 * Runtime: 193 ms, faster than 36.57% of JavaScript online submissions for Task Scheduler.
 * Memory Usage: 45.7 MB, less than 84.89% of JavaScript online submissions for Task Scheduler.
 *
 * tasks 라는 잡업목록이 주어짐
 * 한번에 하나의 작업만 단위시간 내에 처리할 수 있고
 * 모든 작업은 n만큼의 시간지연이 있음
 * 모든 작업이 실행됐을때의 시간을 계산하라(끝나는 시간 아님)
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const taskMap = tasks.reduce((prev, curr) => {
    if (prev[curr]) prev[curr] += 1;
    else prev[curr] = 1;
    return prev;
  }, {});
  const sortedKeys = Object.keys(taskMap).sort(
    (aKey, bKey) => taskMap[bKey] - taskMap[aKey]
  );
  let max = taskMap[sortedKeys[0]];

  // 솔루션 코드
  let count = 0; // the number of tasks with same max frequency
  for (let t in taskMap) {
    if (taskMap[t] === max) {
      count++;
    }
  }

  return Math.max(
    // case 1
    /**
     * XYZ...
     * XYZ...
     * XYZ...
     * ------
     * XY..
     *
     * row: X 작업개수 -> max
     * col: n + 1 -> n + 1
     * 지연시간이 있는 케이스는 모든 작업이 이 범위 안에 존재함
     * 여기서 마지막 줄의 끝이 어디인지 찾으면 작업시간이 됨
     * 마지막 줄의 끝은 X 작업과 동일한 개수를 가진 작업의 수를 더하면 나옴
     * 마지막 줄 전까지 길이 as AA + 마지막줄 as BB
     * AA = (row - 1) * col = (max - 1) * (n + 1)
     * BB = taskMap value가 max 인 개수
     */
    (max - 1) * (n + 1) + count,
    /**
     * case 2
     * 작업량보다 적은 시간이 걸릴 수 없으므로 지연되지 않은 작업은 길이가 됨
     */
    tasks.length
  );
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: [["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2],
      expect: 16,
    },
    {
      params: [["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"], 2],
      expect: 12,
    },
    { params: [["A", "A", "A", "B", "B", "B"], 2], expect: 8 },
    { params: [["A", "A", "A", "B", "B", "B"], 0], expect: 6 },
  ],
  leastInterval
);

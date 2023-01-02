/**
 * n:
 *
 * @param {number} n 직원의 수(0번부터 n-1)
 * @param {number[][]} logs [직원번호, 작업시간], 인덱스가 작업순서
 * @return {number} 가장 긴 작업을 한 인덱스의 직원번호(누적안됨)
 */
var hardestWorker = function (n, logs) {
  let time = 0;
  let [longestId, longestTime] = [Infinity, -Infinity];
  logs
    // .sort((a, b) => a[1] - b[1])
    .forEach(([id, leaveTime]) => {
      // 현재 작업자의 작업시간 계산
      const workingTime = leaveTime - time;
      if (longestTime <= workingTime) {
        longestId = longestTime === workingTime ? Math.min(id, longestId) : id;
        longestTime = workingTime;
      }
      // 시간 누적
      time += workingTime;
    });
  return longestId;
};
// 53 left

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: [
        70,
        [
          [36, 3],
          [1, 5],
          [12, 8],
          [25, 9],
          [53, 11],
          [29, 12],
          [52, 14],
        ],
      ],
      expect: 12,
    },
    {
      params: [
        10,
        [
          [0, 3],
          [2, 5],
          [0, 9],
          [1, 15],
        ],
      ],
      expect: 1,
    },
    {
      params: [
        2,
        [
          [0, 10],
          [1, 20],
        ],
      ],
      expect: 0,
    },
    {
      params: [
        26,
        [
          [1, 1],
          [3, 7],
          [2, 12],
          [7, 17],
        ],
      ],
      expect: 3,
    },
  ],
  hardestWorker
);

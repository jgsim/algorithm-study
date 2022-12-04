/**
 * https://leetcode.com/problems/k-closest-points-to-origin/
 * Runtime: 199 ms, faster than 96.27% of JavaScript online submissions for K Closest Points to Origin.
 * Memory Usage: 51.8 MB, less than 97.32% of JavaScript online submissions for K Closest Points to Origin.
 * well done
 *
 * 문제설명
 * - 입력값 (points, k)
 * points 배열은 [x, y] 형태로 좌표 목록은 담은 배열임
 * 가까운 순으로 k번째까지의 배열을 구해야 함
 * - 출력값
 * 좌표목록 [[x, y]]
 *
 * 참고사항
 * [0, 0] 을 기준으로 가장 가까운 좌표를 찾아라
 * [1, 0], [0, 1] 일 경우 둘 다 정답으로 인정.
 * ex) 이런 케이스는 없는 것 같음
 * points: [[1, 1], [2, 1], [1, 2]]
 * k: 2
 * => [[1, 1], [2, 1]] | [[1, 1], [1, 2]] 이걸로 오케이
 * [[1, 1], [2, 1], [1, 2]] 고려할 필요 없음
 *
 * 해결방법
 * 좌표마다 거리를 계산해놓고 그값을 기준으로 정렬, 정렬한 k번째를 리턴
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  return points
    .sort(([x1, y1], [x2, y2]) => x1 ** 2 + y1 ** 2 - (x2 ** 2 + y2 ** 2))
    .slice(0, k);
};
const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [
        [
          [1, 3],
          [-2, 2],
        ],
        1,
      ],
      expect: [[-2, 2]],
    },
    {
      params: [
        [
          [3, 3],
          [5, -1],
          [-2, 4],
        ],
        2,
      ],
      expect: [
        [3, 3],
        [-2, 4],
      ],
    },
    {
      params: [
        [
          [1, 1],
          [2, 1],
          [1, 2],
        ],
        2,
      ],
      expect: [
        [1, 1],
        [2, 1],
      ],
    },
  ],
  kClosest
);

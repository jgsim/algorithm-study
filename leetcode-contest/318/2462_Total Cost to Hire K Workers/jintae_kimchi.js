/**
 * https://leetcode.com/problems/total-cost-to-hire-k-workers/
 *
 * 우선순위 큐 두개를 이용해서 다시 풀어보기
 *
 * 코스트 양쪽에서 candi 길이만큼 범위를 잡고 최소값을 양쪽에서 뽑음
 * 인덱스가 낮고 비용이 싼 인덱스를 추출
 * k 번 시행
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  const pick = (arr, cand) => {
    // left
    let leftMin = Infinity;
    let leftMinIdx = null;
    for (let li = 0; li < cand; li++) {
      if (arr[li] < leftMin) {
        leftMin = arr[li];
        leftMinIdx = li;
      }
    }
    // right
    let rightMin = Infinity;
    let rightMinIdx = null;
    for (let ri = arr.length; ri >= arr.length - cand; ri--) {
      if (arr[ri] <= rightMin) {
        rightMin = arr[ri];
        rightMinIdx = ri;
      }
    }

    // pick
    let pickIdx = null;
    if (leftMin === rightMin) {
      pickIdx = Math.min(leftMinIdx, rightMinIdx);
    } else if (rightMin > leftMin) {
      pickIdx = leftMinIdx;
    } else {
      pickIdx = rightMinIdx;
    }
    const val = arr[pickIdx];
    arr.splice(pickIdx, 1);
    return val;
  };
  let ans = 0;
  for (let session = 0; session < k; session++) {
    const v = pick(costs, candidates);
    // console.log(session, v);
    ans += v;
  }
  return ans;
};
// 브루트 포스로 2분남기고 타임아웃으로 실패

const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [
        [31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58],
        11,
        2,
      ],
      expect: 423,
    },
    {
      params: [[17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4],
      expect: 11,
    },
    {
      params: [[1, 2, 4, 1], 3, 3],
      expect: 4,
    },
  ],
  totalCost
);

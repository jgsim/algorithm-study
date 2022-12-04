/**
 * https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
 * You are here! Your runtime beats 46.91 % of javascript submissions.
 * You are here! Your memory usage beats 93.81 % of javascript submissions.
 * k개 만큼 nums 배열 연속으로 잘라서 가장 큰 합을 구하는데
 * 중복되는 요소가 있으면 안됨
 * 만약 못찾으면 0 리턴
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  // 한 칸씩 슬라이딩을 하되 기존 계산 내역에 왼쪽을 빼고 오른쪽을 더하는 처리를 해야함
  // 중복관리를 위한 사전이 필요해 보임
  let max = 0;
  const dict = {};
  const dupMap = {
    count: 0,
  };
  let sums = 0;
  for (let i = 0; i < nums.length; i++) {
    // 이전 값 빼기
    if (i >= k) {
      sums -= nums[i - k];
      dict[nums[i - k]] -= 1;
      if (dict[nums[i - k]] === 1) {
        dupMap[nums[i - k]] = false;
        dupMap.count -= 1;
      }
    }
    // 현재 값 추가
    sums += nums[i];

    // 사전에 기록
    if (dict[nums[i]]) {
      dict[nums[i]] += 1;
      if (dict[nums[i]] > 1) {
        dupMap[nums[i]] = true;
        if (dict[nums[i]] === 2) dupMap.count += 1;
      }
    } else {
      dict[nums[i]] = 1;
    }

    // max
    if (i >= k - 1 && dupMap.count === 0) {
      max = Math.max(max, sums);
    }
  }

  return max;
};

// The contest has started. (30 minutes 10 seconds left

const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [[1, 1, 1, 7, 8, 9], 3],
      expect: 24,
    },
    {
      params: [[1, 2, 2], 2],
      expect: 3,
    },
    {
      params: [[1, 5, 4, 2, 9, 9, 9], 3],
      expect: 15,
    },
    {
      params: [[4, 4, 4], 3],
      expect: 0,
    },
  ],
  maximumSubarraySum
);

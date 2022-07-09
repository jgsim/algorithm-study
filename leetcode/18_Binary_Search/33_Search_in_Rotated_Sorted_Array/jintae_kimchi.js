/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Runtime: 60 ms, faster than 95.98% of JavaScript online submissions for Search in Rotated Sorted Array.
 * Memory Usage: 41.8 MB, less than 86.02% of JavaScript online submissions for Search in Rotated Sorted Array.
 *
 *
 * 문제설명
 * 임의로 회전된 배열이 주어졌을때 target 값이 들어있는 인덱스를 구하라
 * 없는 값을 찾을땐 -1 리턴
 * - 중복없음
 */

/**
 * 개고생했는데 성능 잘나와서 다행..
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  // 피봇위치 찾기
  // 처음, 중간 두가지 케이스 존재 (끝인경우는 회전안된거랑 같음)
  const findPivot = () => {
    if (nums.length === 1) return 0;
    let i = 1;
    for (; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        return i;
      }
    }
    return 0;
  };
  // 이진탐색 알고리즘
  // [0, 1, 2] <- 이런 배열을 생각한다면 left: 0, right: 2
  const binarySearch = (left, right) => {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      return binarySearch(left, mid - 1);
    } else if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      return binarySearch(mid + 1, right);
    }
    return -1;
  };

  // 회전한 배열을 처리하는 부분
  // 피봇위치를 알면 어느 배열을 탐색해야 하는지 정할 수 있음
  const firstPivot = findPivot();
  if (nums[0] <= target && target <= nums[firstPivot - 1]) {
    return binarySearch(0, firstPivot - 1);
  } else if (nums[firstPivot] === target) {
    return firstPivot;
  } else if (
    nums[firstPivot + 1] <= target &&
    target <= nums[nums.length - 1]
  ) {
    return binarySearch(firstPivot + 1, nums.length - 1);
  }

  return -1;
};

/**
 * 이렇게 풀면 끝이긴 한데 ㅋㅋ 이진탐색 알고리즘을 구현해야 하니 직접 만들어봄
 * Runtime: 87 ms, faster than 52.70% of JavaScript online submissions for Search in Rotated Sorted Array.
 * Memory Usage: 41.7 MB, less than 91.85% of JavaScript online submissions for Search in Rotated Sorted Array.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search_ez = function (nums, target) {
  return nums.indexOf(target);
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    { params: [[1, 3, 5], 4], expect: -1 },
    { params: [[3, 1], 3], expect: 0 },
    { params: [[3, 1], 0], expect: -1 },
    { params: [[1, 3], 3], expect: 1 },
    { params: [[1, 3], 1], expect: 0 },
    { params: [[1], 1], expect: 0 },
    { params: [[4, 5, 6, 7, 0, 1, 2], 0], expect: 4 },
    {
      params: [[4, 5, 6, 7, 0, 1, 2], 3],
      expect: -1,
    },
    {
      params: [[1], 0],
      expect: -1,
    },
  ],
  search
);

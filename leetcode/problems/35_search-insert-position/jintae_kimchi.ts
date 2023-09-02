/**
 * https://leetcode.com/problems/search-insert-position/description/
 * Runtime 56 ms Beats 67.20% Memory 44.6 MB Beats 26.85%
 *
 * binary search | easy
 *
 * 배열에 존재하지 않는 수에 대한 고려를 안해서 20분 만에 겨우 품
 * 클린한 반복문 코드 형태로 짤 수 있도록 숙지해야..
 */

// 재귀로 더럽게 푼 코드
(() => {
  interface SearchParams {
    arr: number[];
    current: number;
    left: number;
    right: number;
    target: number;
  }
  const binarySearch = ({
    arr,
    current,
    left,
    right,
    target,
  }: SearchParams): number => {
    if (target === arr[current]) return current;
    if (target < arr[0]) return 0;
    if (target > arr[arr.length - 1]) return arr.length;
    if (arr[current - 1] < target && target < arr[current]) return current;
    if (target < arr[current]) {
      // left
      return binarySearch({
        arr,
        current: Math.floor((current + left) / 2),
        left,
        right: current,
        target,
      });
    } else {
      // right
      return binarySearch({
        arr,
        current: Math.floor((right + current) / 2),
        left: current,
        right,
        target,
      });
    }
  };

  function searchInsert(nums: number[], target: number): number {
    return binarySearch({
      arr: nums,
      current: Math.floor(nums.length / 2),
      left: 0,
      right: nums.length,
      target,
    });
  }
})();

// 반복문 버전 + 좀 더 클린한 코드
(() => {
  function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (target === nums[mid]) {
        return mid;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
})();

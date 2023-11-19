/**
 * https://leetcode.com/problems/find-peak-element/description/
 * Runtime 61ms Beats 25.71% of users with TypeScript
 * Memory 44.76MB Beats 7.86% of users with TypeScript
 *
 * medium | binary search | array
 */
function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

/**
 * Runtime 64ms Beats 13.10% of users with TypeScript
 * Memory 44.69MB Beats 11.90% of users with TypeScript
 */
function findPeakElement_first_tried(nums: number[]): number {
  const merge = (arr: number[], left: number, right: number): number => {
    if (right === left) return right;
    if (right - left === 1) {
      return arr[right] > arr[left] ? right : left;
    }
    const mid = Math.floor((right + left) / 2);
    const leftMerged = merge(arr, left, mid);
    const rightMerged = merge(arr, mid + 1, right);
    return arr[leftMerged] > arr[rightMerged] ? leftMerged : rightMerged;
  };
  return merge(nums, 0, nums.length - 1);
}

/**
 * https://leetcode.com/problems/sort-colors/description/
 * Runtime 44 ms Beats 98.51% Complexity Memory 51.31 MB Beats 73.65%
 *
 * 색상값의 개수를 센 다음 덮어씌우는 식으로 스왑없이 구현함 => O(2N)
 * 솔루션은 네덜란드 국기 알고리즘임: 0, 1 을 한쪽 방향으로 몰아야 하는 경우에 유효 => O(N)
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let R = 0;
  let W = 0;
  let B = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const code = nums[i];
    if (code === 0) {
      R += 1;
    } else if (code === 1) {
      W += 1;
    } else {
      B += 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (R > 0) {
      nums[i] = 0;
      R -= 1;
    } else if (W > 0) {
      nums[i] = 1;
      W -= 1;
    } else {
      nums[i] = 2;
      B -= 1;
    }
  }
}
function sortColors_solition(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  for (; mid < high; ) {
    if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
  }
}

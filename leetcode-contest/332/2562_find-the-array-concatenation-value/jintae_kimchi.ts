/**
 * https://leetcode.com/problems/find-the-array-concatenation-value/description/
 * Runtime 78 ms Beats 29.41% Memory 44.5 MB Beats 100%
 */

function findTheArrayConcVal(nums: number[]): number {
  let ans = 0;
  while (nums.length) {
    if (nums.length === 1) {
      ans += nums[0];
      break;
    }
    const left = nums.shift();
    const right = nums.pop();
    ans += +`${left}${right}`;
  }

  return ans;
}

/**
 * 인덱스 처리 방법으로 성능 개선
 * Runtime 77 ms Beats 33.33% Memory 45.7 MB Beats 19.61%
 * ?? 아무튼 개선함
 */
function findTheArrayConcVal_refactored(nums: number[]): number {
  let ans = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    ans += left === right ? nums[left] : +`${nums[left]}${nums[right]}`;
    left += 1;
    right -= 1;
  }
  return ans;
}

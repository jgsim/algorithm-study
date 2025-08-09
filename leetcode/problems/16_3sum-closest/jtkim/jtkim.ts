/**
 * https://leetcode.com/problems/3sum-closest/
 * medium
 * 53.33% / 51.58% / 26min
 */
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b); // sort by asc
  let closest = Infinity;
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const val = nums[i];
      const leftVal = nums[left];
      const rightVal = nums[right];
      const sum = val + leftVal + rightVal;
      if (target === sum) return sum; // 일치하면 탐색 종료
      const diff = Math.abs(target - sum);
      if (diff < Math.abs(closest)) {
        closest = diff; // 가장 가까운 값 갱신
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }
  }
  return closestSum;
}

/**
 * https://leetcode.com/problems/4sum/description/
 * medium
 * 49.02% / 73.04% / timeout
 */
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const ans: number[][] = [];
  for (let r = 0; r < nums.length - 3; r++) {
    if (r > 0 && nums[r - 1] === nums[r]) continue;
    for (let i = r + 1; i < nums.length - 2; i++) {
      if (i > r + 1 && nums[i - 1] === nums[i]) continue;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[r] + nums[i] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[r], nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (right > left && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        }
      }
    }
  }
  return ans;
}

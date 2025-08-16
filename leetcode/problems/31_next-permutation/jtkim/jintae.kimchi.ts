/**
 * https://leetcode.com/problems/next-permutation/description/
 * medium
 * timeout
 */

function nextPermutation(nums: number[]): void {
  if (nums.length < 2) return;

  const swap = (left: number, right: number) => {
    if (left === right) return;
    const tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;
  };
  const reverse = (start: number) => {
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
      swap(left, right);
      left++;
      right--;
    }
  };
  const search = (idx: number) => {
    // last index case
    if (idx === 0) {
      nums.sort((a, b) => a - b);
      return;
    }

    if (nums[idx - 1] < nums[idx]) {
      let min = nums[idx];
      let i = idx;
      let minIdx = idx;
      while (i < nums.length) {
        if (nums[idx - 1] < nums[i] && min >= nums[i]) {
          min = nums[i];
          minIdx = i;
        }
        i++;
      }
      if (min === -1) {
        throw new Error("something wrong :(");
      }
      swap(idx - 1, minIdx);
      reverse(idx);
    } else {
      search(idx - 1);
    }
  };

  search(nums.length - 1);
}

function nextPermutation_no_recursive(nums: number[]): void {
  if (nums.length < 2) return;

  const swap = (left: number, right: number) => {
    if (left === right) return;
    const tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;
  };
  const reverse = (start: number) => {
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
      swap(left, right);
      left++;
      right--;
    }
  };

  for (let idx = nums.length - 1; idx >= 0; idx--) {
    if (idx === 0) {
      nums.sort((a, b) => a - b);
      return;
    }

    if (nums[idx - 1] < nums[idx]) {
      let min = nums[idx];
      let i = idx;
      let minIdx = idx;
      while (i < nums.length) {
        if (nums[idx - 1] < nums[i] && min >= nums[i]) {
          min = nums[i];
          minIdx = i;
        }
        i++;
      }
      if (min === -1) {
        throw new Error("something wrong :(");
      }
      swap(idx - 1, minIdx);
      reverse(idx);
      return;
    }
  }
}

/**
 * https://leetcode.com/problems/3sum/description/
 * medium
 * timeout
 */

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const ans: number[][] = [];

  // i: 0 -> len
  // j: i + 1 -> len
  // k: len -> j + 1
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1;
    let k = len - 1;
    const left = nums[i];
    // 중복 값 건너뛰기
    if (i < j && left === nums[i - 1]) continue;

    while (j < len && j < k) {
      const mid = nums[j];
      const right = nums[k];
      const sum = left + mid + right;
      if (sum === 0) {
        // 결과 추가
        ans.push([left, mid, right]);

        // 중복 값 건너뛰기
        while (mid === nums[j + 1] && j < k) {
          j++;
        }
        while (right === nums[k - 1] && k > j) {
          k--;
        }
        // 한쪽만 줄이는 건 지금 케이스에서 이미 찾아본 것임
        // 양쪽을 한 칸씩 줄여서 다른 케이스를 찾아야 함.
        j++;
        k--;
      }

      // 0이 아니면 가능성이 있는 쪽으로 포인터 이동
      if (sum < 0) {
        j++;
      }
      if (sum > 0) {
        k--;
      }
    }
  }

  return ans;
}

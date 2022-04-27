/**
 * https://leetcode.com/problems/trapping-rain-water/
 * Runtime: 71 ms, faster than 86.20% of JavaScript online submissions for Trapping Rain Water.
 * Memory Usage: 44.6 MB, less than 38.05% of JavaScript online submissions for Trapping Rain Water.
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it can trap after raining.
 * 
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.

Input: height = [4,2,0,3,2,5]
Output: 9
 */

/**
 * 브루트 포스는 어차피 실패니 구현은 안헀고 솔루션 여러 가지를 보며 풀이 방법을 정했다
 * 일단, 왼쪽에서 오른쪽으로 진행하며 최대값을 누적하는 배열을 만든다
 * 그리고 오른쪽에서 왼쪽으로 동일하게 최대값 누적 배열을 만든다
 * 두 배열의 최소값을 뽑은 배열을 만든다
 * 원본 배열과 인덱스끼리 비교하며 차이가 나는 만큼을 합산하면 답이 된다
 *
 * array A
 *                              |
 *              |               |   |       |
 *      |       |   |       |   |   |   |   |   |
 * -------------------------------------------------
 *  0   1   2   3   4   5   6   7   8   9   10  11
 *
 * array B(->)
 *                              |   |   |   |   |
 *              |   |   |   |   |   |   |   |   |
 *      |   |   |   |   |   |   |   |   |   |   |
 * -------------------------------------------------
 *  0   1   2   3   4   5   6   7   8   9   10  11
 *
 * array C(<-)
 *  |   |   |   |   |   |   |   |
 *  |   |   |   |   |   |   |   |   |   |   |
 *  |   |   |   |   |   |   |   |   |   |   |   |
 * -------------------------------------------------
 *  0   1   2   3   4   5   6   7   8   9   10  11
 *
 * array A ∩ B
 *                              |
 *              |   |   |   |   |   |   |   |
 *      |   |   |   |   |   |   |   |   |   |   |
 * -------------------------------------------------
 *  0   1   2   3   4   5   6   7   8   9   10  11
 *
 * A 와 비교하면서 차이 계산
 *                              |
 *              |   *   *   *   |   |   *   |
 *      |   *   |   |   *   |   |   |   |   |   |
 * -------------------------------------------------
 *  0   1   2   3   4   5   6   7   8   9   10  11
 *
 * answer is 6
 *
 * @param {number[]} height
 * @return {number}
 */
const trap1 = function (height) {
  const len = height.length;
  const left = Array.from({ length: len }).fill(0);
  const right = Array.from({ length: len }).fill(0);

  // 한쪽 방향 기준으로 최대값 배열 생성
  for (let i = 0, j = len - 1; i < len; i++, j--) {
    left[i] = left[i - 1] ? Math.max(left[i - 1], height[i]) : height[i];
    right[j] = right[j + 1] ? Math.max(right[j + 1], height[j]) : height[j];
  }
  // left ∩ right
  const intersection = Array.from({ length: len }).map((_, i) =>
    Math.min(left[i], right[i])
  );
  // 원본과 비교
  return intersection.reduce(
    (prev, curr, idx) => (prev += curr - height[idx]),
    0
  );
};
/**
 * Runtime: 102 ms, faster than 39.32% of JavaScript online submissions for Trapping Rain Water.
Memory Usage: 46.6 MB, less than 6.49% of JavaScript online submissions for Trapping Rain Water.
 */

const trap = (height) => {
  const len = height.length;
  // 경계값
  if (len < 3) return 0;

  const left = new Array(len);
  const right = new Array(len);
  // 시작 값 설정
  left[0] = height[0];
  right[len - 1] = height[len - 1];

  // 한쪽 방향 기준으로 최대값 배열 생성
  for (let i = 1, j = len - 2; i < len; i++, j--) {
    left[i] = Math.max(left[i - 1], height[i]);
    right[j] = Math.max(right[j + 1], height[j]);
  }

  return height.reduce(
    (acc, h, i) => (acc += Math.min(left[i], right[i]) - h),
    0
  );
};
/**
 * Runtime: 71 ms, faster than 86.20% of JavaScript online submissions for Trapping Rain Water.
Memory Usage: 44.6 MB, less than 38.05% of JavaScript online submissions for Trapping Rain Water.
 */

const solution = (height) => {
  const slen = height.length;
  if (slen < 3) {
    return 0;
  }
  // Create two DP arrays
  const max_height_left = new Array(slen);
  const max_height_right = new Array(slen);

  max_height_left[0] = height[0];
  for (let i = 1; i < slen; ++i) {
    max_height_left[i] = Math.max(max_height_left[i - 1], height[i]);
  }

  max_height_right[max_height_right.length - 1] = height[slen - 1];
  for (let i = slen - 2; i >= 0; --i) {
    max_height_right[i] = Math.max(max_height_right[i + 1], height[i]);
  }

  let water_volume = 0;
  for (let i = 0; i < slen; ++i) {
    water_volume +=
      Math.min(max_height_left[i], max_height_right[i]) - height[i];
  }

  return water_volume;
};

/**
 * 책에서 풀이한 방법
 * 1. 양쪽끝을 잡고 한줄씩 계산
 * 양쪽 끝에서 시작하면서 가운데쪽으로 이동하면서 빗물 계산
 * 포인트 둘이 만나면 종료
 *
 * 2. 스택을 이용한 풀이
 * 스택에 각 높이를 넣다가 더 높은거 만나면 스택 꺼내면서 높이 계산
 */

const tcList = [
  [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
  [[4, 2, 0, 3, 2, 5], 9],
];

tcList.forEach(([height, expect]) => {
  const ans = trap(height);
  ans === expect ? console.log("pass") : console.error(`${ans} !== ${expect}`);
});

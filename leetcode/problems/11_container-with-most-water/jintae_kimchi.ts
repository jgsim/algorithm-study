/**
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * medium
 * array, two pointers, greedy
 * time: 23min
 */

function maxArea(height: number[]): number {
  /**
   * 1, ..., x => 1 * 최대 길이
   * 2, ..., x => [2, 2, 1, 1, 1, 1, 1, 1] => 2*2 보다 2*h[h.length - 1] 이 더 큼
   *
   * 양 끝의 최대 넓이 부터 계산 후 슬라이딩 윈도우 방식으로 점점 좁히기?
   * [1, 1, 1, 100000, 100000, 1, 1, 1, 1]
   *  ^                                 ^ : 현재 최대값
   *     ^                              ^ : 값이 같으면 왼쪽으로 좁히는 것으로 설정
   *     ^                           ^
   *        ^                        ^
   *        ^                     ^
   *            ^                 ^
   *            ^              ^          : 작은 값이 이동해야 하는 전략
   *            ^       ^                 : 최대값 갱신, 루프 종료
   */
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const leftVal = height[left];
    const rightVal = height[right];

    // calc
    const xRange = right - left; // 0, 1, 2, 3 => 3 - 0 = 3
    max = Math.max(max, xRange * Math.min(leftVal, rightVal));

    // sliding
    if (leftVal <= rightVal) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return max;
}

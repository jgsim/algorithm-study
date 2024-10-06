/**
 * https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/description/
 * Runtime 60 ms Beats 86.67% Complexity Memory 51.60 MB Beats 83.33%
 *
 * brute force 로 제출하고 리펙터링을 거쳐 슬라이딩 윈도우로 최종 구현
 */

// This is the CustomFunction's API interface.
// You should not implement it, or speculate about its implementation
class CustomFunction {
  f(x: number, y: number): number {
    throw new Error("API sample");
  }
}

function findSolution(customfunction: CustomFunction, z: number): number[][] {
  const ans: number[][] = [];
  let left = 1;
  let right = 1000;
  while (left <= 1000 && right >= 1) {
    const result = customfunction.f(left, right);
    if (result < z) {
      left++;
    } else if (result > z) {
      right--;
    } else {
      ans.push([left, right]);
      left++;
      right--;
    }
  }
  return ans;
}

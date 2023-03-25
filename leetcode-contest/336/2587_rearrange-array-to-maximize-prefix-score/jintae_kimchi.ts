/**
 * https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/description/
 * Runtime 224 ms Beats 88.24% Memory 55.3 MB Beats 88.24%
 *
 * 문제)
 * 정수로 이루어진 배열이 주어짐
 * 앞에서부터 더해서(==prefix sum) 누적값이 양수이면(0은 아님 그래서) score 1점 누적
 * 원하는 대로 정렬해서 최대 스코어를 계산
 *
 * 풀이)
 * 내림차순으로 정렬 후 첫 값부터 누적하며 양수인지 체크하여 스코어에 기록
 */

function maxScore(nums: number[]): number {
  nums.sort((a, b) => b - a); // 내림차순
  let sums = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    sums += nums[i];
    if (sums <= 0) {
      break;
    }
    ans++;
  }
  return ans;
}

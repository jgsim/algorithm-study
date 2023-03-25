/**
 * https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/
 * Runtime 220 ms Beats 21.5% Memory 54.9 MB Beats 84.21%
 *
 * failed: 언어능력 이슈
 * 내가 이해 한 문제: A[i] * 2 <= A[j] 조건을 만족하는 케이스의 개수
 * 실제 문제: 페어를 찾으면 그 인덱스에 마킹 전체 페어 계산 후 마킹된 개수 리턴
 */

function maxNumOfMarkedIndices(nums: number[]): number {
  let ans = 0;

  // 짝만 지으면 됨 => 인덱스 상관없음 => 정렬 가능
  nums.sort((a, b) => a - b);
  // 가장 많은 짝을 찾으려면 반으로 나눠서 탐색함 <- 이게 쉽게 떠오르지 않앗는데 반박할 케이스가 없다
  // 정렬했기 때문에 가능한 가정
  // 그럼 이제 첫번째 인덱스와 중간 인덱스로 두개의 포인터가 정해짐
  // 조건에 맞게 전진시키면서 페어 누적하면 답이 나옴
  const mid = Math.floor(nums.length / 2);
  let i = 0;
  let j = mid;
  while (i < mid && j < nums.length) {
    if (nums[i] * 2 <= nums[j]) {
      ans += 2;
      i++;
    }
    j++;
  }

  return ans;
}

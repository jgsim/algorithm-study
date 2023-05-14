/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * Runtime 99 ms Beats 86.9% Memory 49.5 MB Beats 63.86%
 *
 * 문제)
 * 정수가 담긴 오름차순 배열이 주어짐
 * 배열 요소를 제곱한 결과를 정렬해서 출력
 *
 * 풀이)
 * 성능은 잘 나왔지만 만점을 위해서는 sort를 사용하면 안됨 (내 코드는 N + logN)
 * 문제에서 정렬된 배열임을 알려주는 것을 활용해야 함
 * 양쪽의 끝이 현재 가능한 최대값이므로 비교하여 하나씩 가장 큰 값을 찾아나가는식으로 풀어야 함
 * 그럼 N 성능으로 해결 가능
 */

function sortedSquares(nums: number[]): number[] {
  return nums.map((x) => Math.abs(x) ** 2).sort((a, b) => a - b);
}

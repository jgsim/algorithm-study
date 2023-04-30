/**
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/submissions/941935557/
 * Runtime 83 ms Beats 50% Memory 45.5 MB Beats 66.67%
 *
 * 문제)
 * 자연수 배열이 주어짐
 * 특정 인덱스와 이웃 인덱스를 정하고 두 수의 최대공약수를 구함
 * 구해진 최대공약수를 원하는 인덱스 값에 업데이트
 * 반복해서 모든 요소가 1이 될 때까지 진행
 * 모든 요소가 1이 될 수 있는 최소횟수를 구하고 만약 불가능하면 -1 리턴
 *
 * 풀이)
 * 규칙을 찾는게 어려웠던 문제 + 최대공약수 구하는 방법
 * 서로소인지 확인되는(1이 나오는) 최소거리를 구하고 나머지 수를 1로 만드는 횟수를 계산해야 함
 *  0  1  2   3  4   5   6
 * [8, 4, 2, 14, 7, 21, 28] 을 예로 들면
 *   ->4
 *      ->2
 *          ->2
 *  8------------1 : 옆의 수와 최대공약수를 구하고 업데이트하며 진행 8->4->2->2->1
 *                   8부터 시작해서 1이 되는 가장 짧은 케이스: 4
 *      ->2
 *          ->2
 *     1---------1 : 4->2->2->1 : 3
 *          ->2
 *        1------1 : 2->2->1 : 2
 *            7  7   7   7 : 여기서부턴 서로소가 없음
 *            7  7   7   7
 *            7  7   7   7
 *               7   7   7
 *               7   7   7
 *                   7   7
 *
 * 서로소를 찾는 최소거리가(min(4, 3, 2)) 구해지면
 * 나머지값을 1로 만드는 횟수를 추가해야 함
 * 위 케이스 기준으로 최소거리는 2 나머지는 6
 * [8, 4, 2, 14, 7, 21, 28]
 *            2  1         => 2
 *  1  1  1   1      1   1 => 6
 *                         = 2 + 6
 */

// 서로소 관계이면 각각에 어떤수가 곱해졌어도 상관없음
function minOperations(nums: number[]): number {
  // 1이 하나라도 존재하면 상수시간으로 답이 나옴
  const ones = nums.filter((n) => n === 1).length;
  if (ones) {
    return nums.length - ones;
  }
  // gcd 공식.. 외우자
  const gcd = (v1: number, v2: number): number => {
    if (v1 === 0) return v2;
    return gcd(v2 % v1, v1);
  };
  // 모든 요소를 짝지어서 서로소인지 검사
  let minRange = Number.POSITIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    let v1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const v2 = nums[j];
      // 이전값과 최대공약수구한 값을 유지
      v1 = gcd(v1, v2);
      // 서로소이면 요소 간 최소거리를 갱신
      if (v1 === 1) {
        minRange = Math.min(minRange, j - i);
      }
    }
  }
  if (minRange === Number.POSITIVE_INFINITY) return -1;
  // 서로소 관계로 가기 위한 횟수 + 나머지를 1로 만들기 위한 횟수 - 시작위치
  return minRange + nums.length - 1;
}

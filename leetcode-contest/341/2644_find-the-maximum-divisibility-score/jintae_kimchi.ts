/**
 * https://leetcode.com/problems/find-the-maximum-divisibility-score/description/
 * Runtime 513 ms Beats 41.67% Memory 49.1 MB Beats 37.50%
 *
 * 문제)
 * nums, divisors +정수배열이 주어짐
 * nums 요소를 각각의 divisors 요소로 나누어떨어지는 개수를 카운트
 * 가장 많이 나누어 떨어지는 divisors 요소를 리턴
 * 만약 동일한 개수가 있으면 divisor 값이 작은 걸 선택
 *
 * nums[4, 3] div[2, 5, 4]
 *      d
 *  n   2   5   4
 *  4   T   F   T
 *  3   F   F   F
 *      ---------
 *  c   1   0   1 => min(2, 4) => 2
 *
 * 풀이) brute force
 * 문제설명을 따라 나머지 연산을 한 결과의 최대값 목록을 만들고 그 중 최소값 요소를 리턴
 */

function maxDivScore(nums: number[], divisors: number[]): number {
  const divResult: number[] = [];
  let max = 0;
  divisors.forEach((div) => {
    let divCount = 0;
    nums.forEach((num) => {
      if (num % div === 0) {
        divCount += 1;
      }
    });
    max = Math.max(max, divCount);
    divResult.push(divCount);
  });
  let minDiv = Infinity;
  divResult.forEach((dr, i) => {
    if (dr === max) {
      minDiv = Math.min(minDiv, divisors[i]);
    }
  });

  return minDiv;
}

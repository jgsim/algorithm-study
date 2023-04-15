/**
 * https://leetcode.com/problems/prime-in-diagonal/description/
 * Runtime 79 ms Beats 96.55% Memory 51.8 MB Beats 24.14%
 *
 * 문제)
 * 2차원 자연수 배열이 주어짐
 * 배열을 정사각형으로 생각하고 양쪽 대각선을 탐색함
 * 대각선의 요소 중 가장 큰 소수를 찾아서 리턴
 *
 * 풀이)
 * 1) 요소를 대각선으로 탐색
 * 2) 탐색하는 값이 소수인지 검사
 *    검사한 값은 저장하여 반복계산 막기
 */

function diagonalPrime(nums: number[][]): number {
  let ans = 0;
  let rowLen = nums.length;
  const map = new Map<number, boolean>();
  map.set(1, false);
  const isPrime = (val: number): number => {
    if (map.has(val)) return map.get(val) ? val : 0;

    let div = 2;
    let limit = Math.sqrt(val);
    while (div <= limit) {
      if (val % div === 0) {
        map.set(val, false);
        return 0;
      }
      div++;
    }
    map.set(val, true);
    return val;
  };
  for (let i = 0; i < rowLen; i++) {
    const left = nums[i][i];
    const right = nums[i][rowLen - i - 1];

    ans = Math.max(ans, isPrime(left), isPrime(right));
  }

  return ans;
}

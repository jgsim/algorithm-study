/**
 * https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/description/
 * Runtime 172 ms Beats 23.8% Memory 74.3 MB Beats 84.62%
 *
 * 문제)
 * 양의 정수 배열이 주어짐
 * 임의로 정한 부분배열에서 두 개의 값을 뽑아서 다음 연산을 수행
 *      두 값을 이진수로 취급했을 때 1의 자릿수가 같은 인덱스를 k 로 정함(<- 방향으로 인덱스 시작)
 *      두 값에 2^k 를 뺌(k 인덱스 값을 0으로 만드는 의미와 동일)
 *      위 연산으로 변경된 값으로 또 연산할 수 있음
 * 부분배열의 연산결과의 모든 요소가 0이 될 수 있으면 카운트
 *
 * 풀이)
 * 부분집합의 케이스를 몇 개 잡고 분석해보면
 * 1의 개수가 짝수인 경우만 모두 0이 될 수 있음
 * 그것을 연산으로 표현하면 모든 값의 xor 연산과 동일
 * 모든 부분집합에 대해 위 연산을 수행하면 정답의 개수가 나옴
 * --------------------
 * 😭 그런데 순진하게 반복문으로 체크하면 성능이슈가 발생
 * 솔루션에서는 map 을 이용하여 n^2 을 n 으로 구현함 <- 어떻게 이런 코드가 나오는지 이해가 안됨
 */

function beautifulSubarrays(nums: number[]): number {
  let ans = 0;
  const map = new Map<number, number>();
  map.set(0, 1);
  let prefix = 0;
  nums.forEach((num) => {
    prefix ^= num;
    ans += map.get(prefix) ?? 0;
    map.set(prefix, map.get(prefix) ? map.get(prefix)! + 1 : 1);
  });

  return ans;
}

/**
 * https://leetcode.com/problems/mice-and-cheese/
 * Runtime 311 ms Beats 7.69% Memory 72.2 MB Beats 30.77%
 *
 * 문제)
 * 쥐 두마리가 있다.
 * reward1, 2 배열 두개가 주어지는데
 * 첫 번째 쥐가 k 개수만큼 reward1 에서 치즈를 먹는다
 * 두 번째 쥐는 첫번째 쥐가 먹은 인덱스를 제외한 reward12 에서 치즈를 먹는다.
 * 먹은 치즈들의 값이 가장 큰 경우를 리턴
 *
 * 예)
 *                  v
 * r1: [1, 4, 4, 6, 4]
 *      v  v  v  v
 * r2: [6, 5, 3, 6, 1]
 * k : 1
 * (4) + (6+5+3+6) = 24
 *
 * 해설)
 * 두번째 쥐는 남은 것을 다 먹음
 * 단순히 첫번째 쥐가 가장 큰 것을 먹으면 "예)" 와 같은 경우처럼 답이 되지 않음
 * 첫 번째 쥐가 '적절히' 먹기 위한 조건을 구하는 방법은 각 배열 간의 차이를 이용하면 됨
 *   [ 1,  4, 4, 6, 4]
 * - [ 6,  5, 3, 6, 1]
 * -------------------
 *   [-5, -1, 1, 0, 3]
 *
 * diff 값이 높은 것부터 먹으면 k값에 따른 최대값이 나오는 것을 확인 가능
 * => diff를 기준으로 정렬
 * => 정렬된 상태로 k개만큼 섭취 as A
 * => 남은 인덱스 범위만큼 섭취 as B
 * => A + B
 *
 * 근데 성능이 구리게 나와서 리펙토링이 필요했음
 * 두번째 쥐가 먹은 모든 치즈의 값 + 첫번째 쥐가 먹을 치즈의 가중치 값
 * reward2 전체의 합 + 첫번째 쥐가 먹는 치즈의 diff 값
 */
function miceAndCheese(
  reward1: number[],
  reward2: number[],
  k: number
): number {
  const pairs = reward1
    .map((r1, i) => [r1, reward2[i]])
    .sort((a, b) => b[0] - b[1] - (a[0] - a[1]));

  let ans = 0;
  for (let i = 0; i < k; i++) {
    ans += pairs[i][0];
  }
  // 남은 건 정렬 필요없이 다 더하면 됨
  for (let i = k; i < pairs.length; i++) {
    ans += pairs[i][1];
  }
  return ans;
}

/**
 * Runtime 158 ms Beats 100% Memory 54.6 MB Beats 92.31%
 */
function miceAndCheese2(
  reward1: number[],
  reward2: number[],
  k: number
): number {
  const len = reward1.length;
  const diff = new Array(len);
  let ans = 0;
  for (let i = 0; i < len; i++) {
    diff[i] = reward1[i] - reward2[i];
    ans += reward2[i];
  }
  // 첫 번째 쥐가 먹는 위치의 diff 값을 추가
  diff.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    ans += diff[i];
  }
  return ans;
}

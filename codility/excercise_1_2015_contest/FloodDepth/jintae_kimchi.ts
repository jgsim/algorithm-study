/**
 * https://app.codility.com/demo/results/trainingCYUA6P-2RE/
 * Task Score 100% Correctness 100% Performance 100%
 *
 * 문제)
 * 정수형 배열이 주어지는데 인덱스는 위치 요소는 높이를 의미함
 * 배열을 2차원 좌표로 나타내면 높이를 기준으로 산이 만들어짐
 * 그리고 산과 산 사이의 공간에 물을 가득채움
 * 물이 모두 채워진 후 가장 깊은 수심의 길이를 리턴
 *       |
 *   | W | W | W |
 * | | | | W | | | |
 * 0 1 2 3 4 5 6 7 8
 * W: 물
 * |: 산
 * 위 그림에선 최대깊이(W)가 2임
 *
 * 풀이)
 * 왼쪽, 오른쪽 끝에서 빛을 쏘면 그림자가 생기는 원리를 이용
 * 왼쪽에서 쏜 빛으로 높이를 측정하면 점점 커지거나 같은 높이를 가진 배열이 만들어짐
 * 오른쪽도 반대로 진행함
 * 두 배열의 같은인덱스에서 최소값을 뽑아내면 물을 채운 배열이 만들어짐
 * 원본배열과 높이차이를 구하면 최대깊이를 구할 수 있음
 * T: O(N)
 * S: 3N => O(N)
 *
 * 여담)
 * 릿코드에서 풀어본 문제라 해결방법을 아는 상황으로 작성한거라
 * 순수 내 실력으로 푼 느낌은 아님..
 */

function solution(A: number[]): number {
  const leftArr: number[] = [];
  const rightArr: number[] = [];
  const len = A.length;

  for (let i = 0; i < len; i++) {
    const depth = A[i];
    leftArr[i] = Math.max(leftArr[i - 1] ?? 0, depth);
  }
  for (let i = len - 1; i >= 0; i--) {
    const depth = A[i];
    rightArr[i] = Math.max(rightArr[i + 1] ?? 0, depth);
  }
  let maxDepth = 0;
  for (let i = 0; i < len; i++) {
    maxDepth = Math.max(Math.min(leftArr[i], rightArr[i]) - A[i], maxDepth);
  }
  return maxDepth;
}

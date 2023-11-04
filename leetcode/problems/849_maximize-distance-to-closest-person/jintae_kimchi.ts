/**
 * https://leetcode.com/problems/maximize-distance-to-closest-person/description/
 * Runtime 51ms Beats 85.11%of users with TypeScript
 * Memory 45.56MB Beats 87.23%of users with TypeScript
 *
 * Medium | Array | two pointers
 *
 * 가장 벌려앉을 수 있는 의자가 몇칸 거리에 있는지
 * [0, 1] : 1칸임
 *
 * 리펙토링을 할수록 솔루션 코드와 비슷한 모양이 되었다
 */

function maxDistToClosest(seats: number[]): number {
  let left: number = -1;
  let max = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (left > -1) {
        max = Math.max(max, Math.floor((i - left) / 2));
        left = i;
      } else if (left === -1) {
        left = i;
        // 왼쪽 가장자리
        max = left;
      }
    }
  }
  // 오른쪽 가장자리
  if (left < seats.length - 1) max = Math.max(max, seats.length - 1 - left);

  return max;
}

function maxDistToClosest_second(seats: number[]): number {
  let left: number | null = null;
  let right: number | null = null;
  let max = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (left != null && right != null) {
        left = right;
        right = i;
        max = Math.max(max, Math.floor((right - left) / 2));
      } else if (left == null && right == null) {
        left = i;
        right = i;
        // 왼쪽 가장자리
        max = left;
      }
    }
  }
  // 오른쪽 가장자리
  if (right != null) max = Math.max(max, seats.length - 1 - right);
  return max;
}

function maxDistToClosest_first(seats: number[]): number {
  // 사람이 앉은 자리만 뽑기
  const occupied: number[] = [];
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) occupied.push(i);
  }
  // [..., "1, ..., 1", ...] 가장자리 제외하고 최대거리 계산
  let max = 0;
  for (let i = 0; i < occupied.length - 1; i++) {
    const cur = occupied[i];
    const next = occupied[i + 1];
    max = Math.max(max, Math.floor((next - cur) / 2));
  }
  // 가장자리 계산
  const left = occupied[0];
  const right = seats.length - 1 - occupied[occupied.length - 1];
  // 최대값 리턴
  return Math.max(max, left, right);
}

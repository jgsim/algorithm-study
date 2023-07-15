/**
 * https://leetcode.com/problems/1-bit-and-2-bit-characters/description/
 * Runtime 49 ms Beats 100% Memory 44.1 MB Beats 80.77%
 *
 * bitwise
 *
 * easy 난이도지만 어렵게 생각해버려서 제한시간 내 풀이 실패함
 *
 * 솔루션1)
 * 앞에서부터 (11, 10) 이면 두칸 전진, (0) 이면 한칸 전진
 * 마지막 인덱스 상태를 보고 유효한지 판단
 *
 * 솔루션2)
 * 뒤에서부터 10 으로 끝나는 케이스에 대해서만 검사
 * ...10 인 경우
 * ...110: true
 * ...1110: false
 * ...11110: true
 * ...111110: false
 * -> 마지막 연속된 1의 개수가 홀수이면 false
 * -> 그럼 앞에 다른 수가 와도 유효한가?
 * 0이 가장 앞에 있을 땐 무시해도 됨
 * 01110 => 0 11 10 = 11 10
 *
 * 0 0 0 1110: false
 * 0 0 1 1110: true(even)
 * 0 1 0 1110: false
 * 0 1 1 1110: false
 * 1 0 0 1110: false
 * 1 0 1 1110: true(even)
 * 1 1 0 1110: false
 * 1 1 1 1110: true(even)
 * 위처럼 마지막 연속된 1이 홀수면 어떤 방법으로도 유효하게 만들 수 없음
 */

function isOneBitCharacter(bits: number[]): boolean {
  const n = bits.length;

  // 0
  if (bits.length === 1 && bits[0] === 0) return true;
  // 00
  if (bits[n - 1] === 0 && bits[n - 2] === 0) return true;
  // 11
  if (bits[n - 1] === 1) return false;
  // 10
  let ones = 1;
  for (let i = n - 3; i >= 0; i--) {
    // ..., i, 1, 0]
    if (bits[i] === 1) ones++;
    else break;
  }
  return ones % 2 === 0;
}
// tcList: [
//     {
//         expect: true,
//         params: [[1, 0, 0]],
//     },
//     {
//         expect: false,
//         params: [[1, 1, 1, 0]],
//     },
//     {
//         expect: true,
//         params: [[1, 1, 1, 1, 0]],
//     },
//     {
//         expect: false,
//         params: [[1, 1, 0, 1, 0]],
//     },
//     {
//         expect: true,
//         params: [[1, 0, 1, 1, 0]],
//     },
// ],

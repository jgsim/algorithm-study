/**
 * https://leetcode.com/problems/hamming-distance/description/
 * Runtime 65 ms Beats 14.46% Memory 42.9 MB Beats 67.47%
 *
 * easy | bitwise
 *
 * xor 연산 결과의 1개수가 찾고자 하는 답임
 * 연산결과를 문자열로 만들어서 1개수를 필터했는데 조금 더 나은 방법들을 추가로 적어 놓음
 */

function hammingDistance_mySolution(x: number, y: number): number {
  return (x ^ y).toString(2).replace(new RegExp(/[0]/g), "").length;
}

function hammingDistance_matchapi(x: number, y: number): number {
  return (x ^ y).toString(2).match(/1/)?.length ?? 0;
}

function hammingDistance_withoutRegexp(x: number, y: number): number {
  let xor = x ^ y;
  let ans = 0;
  while (xor) {
    if (xor & 1) ans += 1; // 가장 오른쪽 자리가 1인지 검사
    xor >>= 1;
  }
  return ans;
}

// [
//   {
//     // 001
//     // 100
//     // ^_^
//     params: [1, 4],
//     expect: 2,
//   },
//   {
//     // 11
//     // 01
//     // ^_
//     params: [3, 1],
//     expect: 1,
//   },
//   {
//     // 101010
//     // 010101
//     // ^^^^^^
//     params: [2 + 8 + 32, 1 + 4 + 16],
//     expect: 6,
//   },
//   {
//     // 1111
//     // 1111
//     // ____
//     params: [8 + 4 + 2 + 1, 8 + 4 + 2 + 1],
//     expect: 0,
//   },
// ];

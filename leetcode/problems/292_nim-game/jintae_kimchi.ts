/**
 * https://leetcode.com/problems/nim-game/description/
 * Runtime 58 ms Beats 34.9% Memory 42.4 MB Beats 85.23%
 *
 * easy | number
 *
 * (베스킨라빈스 게임) 3개가 남도록 맞추기 위해 내가 뺄 수 있는 개수 + 상대가 빼는 개수 합을 일정하게 맞추면 된다.
 * tc 목록을 만들어보면 직관적으로 알 수 있음
 */

function canWinNim(n: number): boolean {
  return n % 4 !== 0;
}
// [
//   {
//     params: [1],
//     expect: true,
//   },
//   {
//     params: [2],
//     expect: true,
//   },
//   {
//     params: [3],
//     expect: true,
//   },
//   {
//     params: [4], // 1, 2, 3
//     expect: false,
//   },
//   {
//     params: [5], // 2, 3, 4
//     expect: true,
//   },
//   {
//     params: [6], // 3, 4, 5
//     expect: true,
//   },
//   {
//     params: [7], // 4, 5, 6
//     expect: true,
//   },
//   {
//     params: [8], // 7, 6, 5
//     expect: false,
//   },
//   {
//     params: [11], // 8, 9, 10
//     expect: true,
//   },
//   {
//     params: [12], // 9, 10, 11
//     expect: false,
//   },
// ];

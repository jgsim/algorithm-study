// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

/**
 * 오름차순 배열의 음수, 양수 개수를 새서 더 큰 값 리턴, 0은 취급안함
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums: number[]) {
  let neg = 0;
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 0) {
      neg += 1;
    } else if (num > 0) {
      pos += 1;
    }
  }
  return Math.max(pos, neg);
};
//1 22

// runTestCase({
//     solution: maximumCount,
//     tcList: [
//       {
//         params: [[-2, -1, -1, 1, 2, 3]],
//         expect: 3,
//       },
//       {
//         params: [[-3, -2, -1, 0, 0, 1, 2]],
//         expect: 3,
//       },
//       {
//         params: [[5, 20, 66, 1314]],
//         expect: 4,
//       },
//     ],
//   });

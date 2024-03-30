/**
 * https://leetcode.com/problems/two-sum/
 * Runtime 58 ms Beats 85.65% of users with TypeScript
 * Memory 45.67 MB Beats 100.00% of users with TypeScript
 *
 * 문제)
 * 정수배열의 두 요소를 더해서 target 값이 나오는 경우의 두 인덱스 리턴
 * 인덱스 순서는 상관없음
 *
 * 풀이)
 * 탐색을 줄이기 위해 사전으로 만들고
 * target - 현재값이 사전에 존재하는지 검사
 * ! 사전 검색 시 현재 인덱스를 제외해야 함
 */
function twoSum(nums: number[], target: number): number[] {
  const map = nums.reduce((map, curr, idx) => {
    map.set(curr, idx);
    return map;
  }, new Map<number, number>());
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const val = map.get(diff);
    if (val && val !== i) return [i, val];
  }
  throw new Error("unexpected");
}

/**
 * Runtime 74 ms Beats 44.91% of users with TypeScript
 * Memory 52.03 MB Beats 77.50% of users with TypeScript
 *
 * 실전에선 이정도 퍼포먼스로 해결할 수 있었다..
 * diff 값 찾는 방향이 다르고 diff 관리 자료구조가 다른 정도
 */
function twoSum_240330(nums: number[], target: number): number[] {
  // diff, index
  const diffMap: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    const diffNum = diffMap[num];
    if (diffNum > -1 && diffNum !== i) {
      return [diffMap[num], i].sort((a, b) => a - b);
    }
    diffMap[diff] = i;
  }
  throw new Error("Unexpected");
}

// runTestCase({
//   solution: twoSum,
//   tcList: [
//     {
//       params: [[1, 2, 3, 4], 3],
//       expect: [0, 1],
//     },
//     {
//       params: [[1, 2, 2, 4], 5],
//       expect: [0, 3],
//     },
//     {
//       params: [[1, 2, 3, 4], 7],
//       expect: [2, 3],
//     },
//     {
//       params: [[3, 2, 4], 6],
//       expect: [1, 2],
//     },
//     {
//       params: [[2, 7, 11, 15], 9],
//       expect: [0, 1],
//     },
//     {
//       params: [[3, 3], 6],
//       expect: [0, 1],
//     },
//   ],
// });

/**
 * https://leetcode.com/problems/two-sum/
 * Runtime 58 ms Beats 97% Memory 45.7 MB Beats 21.69%
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

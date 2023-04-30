/**
 * https://leetcode.com/problems/sliding-subarray-beauty/
 * Runtime 701 ms Beats 41.18% Memory 89.3 MB Beats 5.88%
 *
 * 문제)
 * 정수형 배열이 주어짐
 * k 길이만큼 순서대로 부분집합으로 만들고
 * 각 부분집합에서 x번째로 작은 수를 찾는다
 * 찾은 값을 결과 배열에 저장하여 리턴한다
 *
 * 풀이)
 * 슬라이딩 윈도우 문제고 우선순위 큐가 있으면 쉽게 풀리는 문제지만
 * 없어도 풀 수 있어야 했다.
 * 문제에서 제시한 정수의 범위가 힌트였는데 -50 ~ 50 사이의 비교적 작은 범위의 수이다.
 * 최초 범위에 대한 기록을 한 뒤 오른쪽 요소를 추가하고 왼쪽 요소를 제거해가며 누적상태를 업데이트하고
 * 50번의 검색으로 x번째 최소값을 구하는 식
 */

function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
  // -50~50 범위의 수만 있으므로 음수에 대해 50회 이하 검색으로 찾을 수 있음
  const findXth = (map: Map<number, number>, x: number): number => {
    let cnt = 0;
    for (let i = -50; i < 0; i++) {
      const counted = map.get(i) ?? 0;
      if (counted > 0) {
        cnt += counted;
        if (cnt >= x) {
          return i;
        }
      }
    }
    return 0;
  };

  // 최초상태 만들기
  let left = 0;
  let right = k;
  const firstRange = nums.slice(left, right);
  const map = firstRange.reduce((map, num) => {
    if (num < 0) {
      map.set(num, (map.get(num) ?? 0) + 1);
    }
    return map;
  }, new Map<number, number>());
  const ans: number[] = [];

  while (left <= nums.length - k) {
    // 현재 서브그룹 중 x번째
    ans.push(findXth(map, x));

    // 맵에 업데이트
    const addTarget = nums[right];
    const remTarget = nums[left];
    map.set(addTarget, (map.get(addTarget) ?? 0) + 1);
    map.set(remTarget, (map.get(remTarget) ?? 1) - 1);
    left++;
    right++;
  }

  return ans;
}

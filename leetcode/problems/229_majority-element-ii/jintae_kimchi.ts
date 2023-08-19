/**
 * https://leetcode.com/problems/majority-element-ii/description/
 * Runtime 53 ms Beats 97.96% Memory 45.1 MB Beats 85.71%
 *
 * array | medium | Boyer-Moore Majority Vote algorithm
 *
 * | 내가 푼 방법
 * 정렬한 뒤, 특정 숫자마다 n/3 을 넘는지 확인하는 방식으로 품
 * T: N*logN + N => O(N*logN), S: O(1)
 *
 * | 보이어 무어 알고리즘으로 푼다면? (투표나 이벤트 시 주요값을 확인하는데 활용됨)
 * n/3 을 넘는 대표값을 뽑는 것이 목표인데
 * n/3 을 넘으려면 최대 2개만 나올 수 있음
 * 그래서 대표값을 저장할 변수 2개와 카운트 변수 2개를 준비하고 순회하면서 카운팅함
 * 순회를 마치고 변수 2개가 카운팅 기준을 충족하는지 검사하고 리턴.
 * T: 2N => O(N), S: O(1)
 */

function majorityElement(nums: number[]): number[] {
  const ans: number[] = [];
  nums.sort((a, b) => a - b);
  const appear = Math.floor(nums.length / 3);
  let cur: number | null = null;
  let curCnt: number = 0;
  nums.forEach((num) => {
    if (cur != num) {
      cur = num;
      curCnt = 0;
    }
    curCnt++;
    if (appear + 1 === curCnt) {
      ans.push(num);
    }
  });

  return ans;
}

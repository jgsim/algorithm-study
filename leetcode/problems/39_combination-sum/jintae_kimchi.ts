/**
 * https://leetcode.com/problems/combination-sum/description/
 * Runtime 84 ms Beats 55.45% Memory 45.2 MB Beats 99.1%
 *
 * backtracking
 *
 * 누적 값이 target 범위 이전일때까지 깊이 우선 탐색으로 더해나가며 경우의 수를 탐색한다
 * 낮은 값 기준으로 정렬하는 것이 맞다고 생각했으나 정렬은 필요 없었다.
 * 탐색하는 배열이 레퍼런스타입이므로 분해하여 기록해야 함에 유의
 * 초기값을 수정하면 굳이 최초호출의 for문을 쓸 필요는 없음
 */

function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  candidates.sort((a, b) => a - b);

  // 누적값과 시작 인덱스 정보로 가능할때까지 더하기
  const fn = (comb: number[], sums: number, idx: number) => {
    if (sums < target) {
      for (let i = idx; i < len; i++) {
        if (sums > target) break;
        // 넣어서 조합을 만들어보고
        const num = candidates[i];
        comb.push(num);
        fn(comb, sums + num, i);
        // 다음 조합을 위해 pop
        comb.pop();
      }
    } else {
      if (sums === target) {
        ans.push([...comb]);
      }
    }
  };
  const len = candidates.length;
  for (let i = 0; i < len; i++) {
    fn([candidates[i]], candidates[i], i);
  }

  return ans;
}

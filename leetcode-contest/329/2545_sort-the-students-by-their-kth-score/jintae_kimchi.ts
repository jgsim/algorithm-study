/**
 * https://leetcode.com/problems/sort-the-students-by-their-kth-score/description/
 * Runtime 183 ms Beats 51.85%
 * Memory 52.4 MB Beats 62.96%
 *
 * 타입스크립트에서 다른 코드를 보면 대부분 아래와 같았다.
 * 솔루션을 봤는데 우선순위큐로(<- 사기) 풀 수 있다고 한다.
 * 근데 자바스크립트는 힙이 없잖아? ㅎ
 */

function sortTheStudents(score: number[][], k: number): number[][] {
  return score.sort((a, b) => {
    return b[k] - a[k];
  });
}

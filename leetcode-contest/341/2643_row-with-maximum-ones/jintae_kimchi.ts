/**
 * https://leetcode.com/problems/row-with-maximum-ones/description/
 * Runtime 88 ms Beats 93.75% Memory 50.7 MB Beats 59.38%
 *
 * 문제)
 * 2차원 배열이 주어짐 요소로는 0, 1 중 하나만 들어있음
 * 각 행을 검사하여 1의 개수가 가장 많은 행을 찾아라
 * 만약 개수가 같은 행이 있으면 인덱스가 작은 행을 골라
 * [행인덱스, 1값의 개수]를 리턴
 *
 * 풀이)
 * 복잡하게 생각안하고 행마다 1개수 검사 후 최대값이 발견되면 업데이트 함
 *
 * 성능적인 고려가 들어간 부분)
 * 1개수가 이론적으로 가능한 최대값이면 바로 답으로 채택하도록 추가함
 */
function rowAndMaximumOnes(mat: number[][]): number[] {
  let ans = [0, 0];
  for (let r = 0; r < mat.length; r++) {
    const ones = mat[r].filter((x) => x === 1).length;
    if (ans[1] < ones) {
      ans = [r, ones];
      if (ones === mat[r].length) break;
    }
  }

  return ans;
}

/**
 * 솔루션 참고하여 filter 대신 reduce로 변경했는데 오히려 성능은 이상하게 나옴
 * Runtime 101 ms Beats 71.88% Memory 51.4 MB Beats 9.38%
 */
function rowAndMaximumOnes_memory(mat: number[][]): number[] {
  let ans = [0, 0];
  for (let r = 0; r < mat.length; r++) {
    const ones = mat[r].reduce((acc, curr) => acc + curr, 0);
    if (ans[1] < ones) {
      ans = [r, ones];
      if (ones === mat[r].length) break;
    }
  }

  return ans;
}

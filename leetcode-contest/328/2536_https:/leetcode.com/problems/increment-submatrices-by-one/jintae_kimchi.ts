/**
 * https://leetcode.com/problems/increment-submatrices-by-one/
 *
 * n*n 크기의 배열을 0으로 초기화 하고
 * queries 를 하나씩 수행하여 좌상 ~ 우하 범위의 값을 1씩 증가시킨 결과 배열 리턴
 *
 * 다른 풀이방법
 * https://leetcode.com/problems/increment-submatrices-by-one/solutions/3052675/python3-sweep-line-range-addition-with-visualization-clean-concise/
 * +1 씩 범위만큼 업데이트하는 대신 가장자리 값만 바꾸고 나중에 한번만 계산함
 * @param n
 * @param queries
 * @returns
 */
function rangeAddQueries(n: number, queries: number[][]): number[][] {
  const mat = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => 0);
  });

  const applyQuery = (mat: number[][], query: number[]) => {
    const [r, c, rend, cend] = query;

    for (let i = r; i <= rend; i++) {
      for (let j = c; j <= cend; j++) {
        mat[i][j] += 1;
      }
    }
  };

  queries.forEach((query) => {
    applyQuery(mat, query);
  });

  return mat;
}

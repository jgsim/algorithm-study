/**
 * https://leetcode.com/problems/count-vowel-strings-in-ranges/
 * runtime Beats 6.67%
 * memory usage beats 62.22%
 *
 * words 배열의 요소는 문자열로 구성되어 있음
 * queries 배열의 요소는 words 배열의 인덱스 범위를 [left, right] 로 표현함
 * query 하나를 실행했을 때 인덱스 범위의 words 배열 요소가 시작과 끝이 모두 모음인 문자열의 개수를 구해야 함
 * 그리고 모든 쿼리 실행결과를 배열로 리턴
 * @param words
 * @param queries
 * @returns
 */
function vowelStrings(words: string[], queries: number[][]): number[] {
  // 미리 모음인지 검사해놓은 배열을 만듬 (매번 문자검사 비용을 줄이기 위함)
  const vowel = new Set(["a", "e", "i", "o", "u"]);
  const wordsBool = words.map((w) => {
    return vowel.has(w[0]) && vowel.has(w[w.length - 1]);
  });
  // 쿼리 하나씩 실행하며 모음인 문자열의 개수를 계산
  return queries.map(([l, r]) => {
    const ret: boolean[] = [];
    for (let i = l; i <= r; i++) {
      wordsBool[i] && ret.push(wordsBool[i]);
    }
    return ret.length;
  });
}
/**
 * Runtime 161 ms Beats 71.11%
 * Memory 71.8 MB Beats 37.78%
 *
 * 런타임이 망한 이유: 쿼리 실행 시 true 값 세는 부분을 개선할 필요가 있었음
 * 바로 계산할 수 있는 구조로 만들어야 했음 아래는 그 과정
 * [T, F, T, F, T, F, T, F, T] // 기존 내 코드에서 검사하는 부분
 * [1, 0, 1, 0, 1, 0, 1, 0, 1] // 솔루션에선 숫자값으로 초기화함
 * [1, 1, 2, 2, 3, 3, 4, 4, 5] // 그리고 -> 방향으로 누적되게 만듬
 *             [4,       7]    // 쿼리가 다음과 같이 주어졌을 때
 *             [3, 3, 4, 4]    // 해당 범위의 개수를 구해야 함
 * [1, 1, 2, 2][3, 3, 4, 4]    // 누적값이므로 시작부분 전까지 누적된 값을 제거해야 함
 *           ^           ^     // 누적된 마지막 값을 기준으로 4 - 2 = 2 가 됨
 *             [T, F, T, F]
 * 반복하면 n의 성능으로 처리 가능
 * @param words
 * @param queries
 * @returns
 */
function vowelStrings_solution(words: string[], queries: number[][]): number[] {
  const vowel = ["a", "e", "i", "o", "u"];
  const wordsAcc = words.map((w) =>
    vowel.includes(w[0]) && vowel.includes(w[w.length - 1]) ? 1 : 0
  );
  for (let i = 1; i < wordsAcc.length; i++) {
    wordsAcc[i] += wordsAcc[i - 1];
  }
  return queries.map(([l, r]) => {
    // 0 인덱스 부터 시작하면 빼면 안되고 나머지는 해당 인덱스 전 값을 뺴면 됨
    const left = l === 0 ? 0 : wordsAcc[l - 1];
    return wordsAcc[r] - left;
  });
}

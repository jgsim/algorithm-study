/**
 * https://leetcode.com/problems/most-common-word/description/
 * Runtime 70 ms Beats 52.38% Memory 44.9 MB Beats 71.43%
 *
 * string | easy
 *
 * 밴 단어들을 제외하고 사전으로 만들어 가장 자주나온 값 추출
 *
 * - trim 을 활용하면 더 깔끔했을 듯
 * - 사전등록 시 최대값 미리 체크하면 루프 하나 제거 가능
 */

function mostCommonWord(paragraph: string, banned: string[]): string {
  const map = new Map<string, number>();
  paragraph = paragraph.toLocaleLowerCase().replace(/[^a-z]/g, " ");
  paragraph
    .split(" ")
    .filter((x) => x !== "")
    .forEach((x) => {
      const word = x.toLocaleLowerCase();
      if (!banned.includes(word)) map.set(word, (map.get(word) ?? 0) + 1);
    });
  let max = 0;
  let ans = "";
  map.forEach((count, word) => {
    if (max < count) {
      max = count;
      ans = word;
    }
  });
  return ans;
}

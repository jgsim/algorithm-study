/**
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/
 * Runtime 159 ms Beats 65.71% Memory 50.4 MB Beats 97.14%
 *
 * hash
 *
 * 성능적으로 떨어진 부분은
 * 단어 검사 시 이미 false 로 판명되었을 때
 * 해당 단어를 넘어가는 처리가 없는 것이 원인으로 보임
 * todo
 * Map Record 비교 정리하기
 * outer: for 문법으로 바꿔보기
 */

function countCharacters(words: string[], chars: string): number {
  const charMap = new Map<string, number>();
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    charMap.set(ch, (charMap.get(ch) ?? 0) + 1);
  }

  let ans = 0;
  words.forEach((word) => {
    const wordMap = new Map<string, number>();
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      wordMap.set(ch, (wordMap.get(ch) ?? 0) + 1);
    }
    let fullfilled = true;
    wordMap.forEach((value, key) => {
      if ((charMap.get(key) ?? 0) < value) fullfilled = false;
    });
    if (fullfilled) ans += word.length;
  });

  return ans;
}

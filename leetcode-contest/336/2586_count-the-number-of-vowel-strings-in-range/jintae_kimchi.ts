/**
 * https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/
 * Runtime 91 ms Beats 20.37% Memory 45.8 MB Beats 75.93%
 *
 * 문제)
 * 단어요소로 이루어진 배열이 주어짐
 * 각 단어마다 left ~ right 인덱스 범위로 단어의 끝을 조사
 * (인덱스 범위 미만이면 끝 문자를 택함. 한글자면 양쪽이 같은 인덱스인 꼴)
 * 양 끝이 모음이면 카운트
 *
 * 풀이)
 * 각 단어마다 끝값을 정하고 양 끝이 모음인지 체크
 */

function vowelStrings(words: string[], left: number, right: number): number {
  let ans = 0;
  const end = Math.min(words.length, right + 1);
  for (let i = left; i < end; i++) {
    if (
      "aeiou".includes(words[i][0]) &&
      "aeiou".includes(words[i][words[i].length - 1])
    ) {
      ans += 1;
    }
  }
  return ans;
}

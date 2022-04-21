/**
 * https://leetcode.com/problems/most-common-word/
 * Given a string paragraph and a string array of the banned words banned, 
 * return the most frequent word that is not banned. 
 * It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 

Example 1:

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
Example 2:

Input: paragraph = "a.", banned = []
Output: "a"
 

Constraints:

1 <= paragraph.length <= 1000
paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
0 <= banned.length <= 100
1 <= banned[i].length <= 10
banned[i] consists of only lowercase English letters.


문제해석
paragraph: 문제로 주어지는 문자열
banned: 제외할 단어 목록

paragraph 가 주어지면 banned에 없는 단어중 가장 빈번하게 나온 단어를 리턴
대소문자 구분하지 않으며 정답은 소문자로 제출할 것

문제는 항상 하나의 답이 있음

해시와 문자열 처리가 포인트임
 */

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // banned 목록을 사전으로 만듬
  const bannedMap = banned
    .map((v) => v.toLowerCase())
    .reduce((map, banWord) => {
      if (!map.has(banWord)) map.set(banWord, true);
      return map;
    }, new Map());

  // 문제 공백 기준으로 분리하여 banned 단어 제외하고 사전으로 만듬
  const wordMap = paragraph
    .toLowerCase()
    .split(/[ !?',.;]/)
    // .replace(/[^a-z]/g, " ")
    // .split(" ")
    .filter((word) => word)
    .reduce((map, word) => {
      // banned word 처리
      if (bannedMap.has(word)) return map;
      // 기존값 증가 또는 새로 등록
      map.set(word, map.has(word) ? map.get(word) + 1 : 1);
      return map;
    }, new Map());

  // 최대값 뽑음
  const arr = [...wordMap].sort((a, b) => b[1] - a[1]);
  return arr[0][0];
};
/**
 * Runtime: 94 ms, faster than 53.47% of JavaScript online submissions for Most Common Word.
Memory Usage: 44.3 MB, less than 58.75% of JavaScript online submissions for Most Common Word.

Runtime: 86 ms, faster than 66.01% of JavaScript online submissions for Most Common Word.
Memory Usage: 43.9 MB, less than 81.35% of JavaScript online submissions for Most Common Word.
 */

const solution = (paragraph, banned) => {
  let most;
  let map = {};
  let words = paragraph.toLowerCase().split(/[ !?',.;]/);
  words.forEach((w) => {
    if (w && !banned.includes(w)) {
      map[w] = (map[w] || 0) + 1;
      if (!most || map[w] > map[most]) most = w;
    }
  });
  return most;
};
/**
 * 문자열 처리하는 부분이 더 깔끔하고
 * map에 기록하면서 최대값 바로 갱신하도록 함
 */

const tcList = [
  ["a.", [], "a"],
  ["Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"], "ball"],
  ["a, a, a, a, b,b,b,c, c", ["a"], "b"],
];

tcList.forEach(([paragraph, banned, expect], idx) => {
  const answer = mostCommonWord(paragraph, banned);
  expect === answer
    ? console.log("pass")
    : console.error(`fail(${idx}): ${expect} !== ${answer}`);
});

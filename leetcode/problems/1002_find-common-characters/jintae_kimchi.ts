/**
 * https://leetcode.com/problems/find-common-characters/description/
 * Runtime 89 ms Beats 38% Memory 53.2 MB Beats 18%
 *
 * easy | string | array
 *
 * 심플한 문제설명과 복잡한 풀이방식
 */

function commonChars(words: string[]): string[] {
  // 초기 단어로 사전 구성
  const dict: { [k: string]: number } = {};
  for (let i = 0; i < words[0].length; i++) {
    dict[words[0][i]] = (dict[words[0][i]] ?? 0) + 1;
  }

  // 나머지 단어들에 대한 비교
  for (let i = 1; i < words.length; i++) {
    // 단어마다 사전으로 만듬
    const word = words[i];
    const wordDict: { [k: string]: number } = {};
    for (let j = 0; j < word.length; j++) {
      wordDict[word[j]] = (wordDict[word[j]] ?? 0) + 1;
    }
    // 기존 사전에 있는 값이면 더 작은값, 없으면 제거
    for (const key in dict) {
      if (wordDict[key]) {
        dict[key] = Math.min(dict[key], wordDict[key]);
      } else {
        delete dict[key];
      }
    }
  }

  // 최소중복 사전을 배열화
  const ans: string[] = [];
  for (const key in dict) {
    for (let i = 0; i < dict[key]; i++) {
      ans.push(key);
    }
  }

  return ans;
}

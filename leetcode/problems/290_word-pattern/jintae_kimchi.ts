/**
 * https://leetcode.com/problems/word-pattern/description/
 * Runtime 59 ms Beats 40.99% Memory 43.1 MB Beats 31.8%
 *
 * array | map | easy
 * 테스트케이스를 다양하게 구성해서 테스트 해봐야 함
 */

function wordPattern(pattern: string, s: string): boolean {
  const arr = s.split(" ");
  const map = new Map<string, string>();
  const wordSet = new Set<string>();
  if (arr.length !== pattern.length) return false;
  const n = pattern.length;
  for (let i = 0; i < n; i++) {
    const pch = pattern[i];
    const word = arr[i];
    if (map.has(pch)) {
      const mapWordVal = map.get(pch);
      if (mapWordVal !== word) return false;
    } else {
      if (wordSet.has(word)) return false;
      map.set(pch, word);
      wordSet.add(word);
    }
  }

  return true;
}
const tcList = [
  {
    params: ["aaa", "a a a a"],
    expect: false,
  },
  {
    params: ["aaaa", "a a a a"],
    expect: true,
  },
  {
    params: ["aaaa", "a b c d"],
    expect: false,
  },
  {
    params: ["abcd", "a b c d"],
    expect: true,
  },
  {
    params: ["abba", "dog dog dog dog"],
    expect: false,
  },
  {
    params: ["abba", "dog cat cat dog"],
    expect: true,
  },
  {
    params: ["abba", "dog cat cat fish"],
    expect: false,
  },
  {
    params: ["abba", "dog cat cat dog"],
    expect: true,
  },
];

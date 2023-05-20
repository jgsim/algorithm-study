/**
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * Runtime: 451 ms, faster than 7.38% of JavaScript online submissions for Implement Trie (Prefix Tree).
 * Memory Usage: 61.5 MB, less than 65.99% of JavaScript online submissions for Implement Trie (Prefix Tree).
 * 예상과는 다르게 런타임이 더 안좋게 나왔다. 그래서 반복문 형태로 개선한 결과가 아래
 * Runtime: 200 ms, faster than 93.07% of JavaScript online submissions for Implement Trie (Prefix Tree).
 * Memory Usage: 58.2 MB, less than 84.91% of JavaScript online submissions for Implement Trie (Prefix Tree).
 *
 * 문제설명
 * 트라이 구현
 * Trie: 이니셜라이즈
 * Trie.insert: 문자열을 트라이 트리에 삽입
 * Trie.search: 입력문자로 트라이에서 검색되는 단어가 있으면 true
 * Trie.startsWith: 검색할 접두어로 검색되는 단어가 있으면 true
 * ! 영문 소문자만 취급함
 *
 * 나의 해결방법
 * 문자 인덱스마다 사전으로 데이터 기록
 * {
 *   a: {
 *      a: {
 *          a: {},
 *          ...
 *      },
 *      b: {},
 *   }
 *   b: {}
 *   ...
 * }
 * insert로 받는 마지막 글자에 해당하는 사전은 word: true 플래그 삽입하여 단어로 판별
 * 탐색은 n이 되는데 워스트 케이스의 공간복잡도는 27 ** word.length 가 됨
 */

var Trie = function () {
  this.dict = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let dict = this.dict;
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (!dict[ch]) dict[ch] = {}; // 트리에 없으면 추가함
    dict = dict[ch];
  }
  dict.word = true; // 마지막 노드는 단어라는 플래그 설정

  // const insertCh = (start, end, dict) => {
  //   if (end - start <= 0) {
  //     dict.word = true; // 마지막 위치에 단어임을 표시
  //     return;
  //   }
  //   // 삽입문자
  //   const ch = word[start];
  //   // 키가 없으면 추가
  //   if (dict[ch] === undefined) dict[ch] = {};
  //   // 다음 케이스 호출
  //   insertCh(start + 1, end, dict[ch]);
  // };
  // insertCh(0, word.length, this.dict);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (!word.length) return false;
  let dict = this.dict;
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (!dict[ch]) return false;
    dict = dict[ch];
  }
  return dict.word ? true : false; // 탐색결과가 단어인지 확인해야 함

  // let result = false;
  // const searchCh = (start, end, dict) => {
  //   if (end <= start) {
  //     // 마지막 탐색 위치가 단어이면 true
  //     if (dict.word) result = true;
  //     return;
  //   }
  //   const nextDict = dict[word[start]];
  //   if (nextDict) searchCh(start + 1, end, nextDict);
  // };
  // searchCh(0, word.length, this.dict);

  // return result;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (!prefix.length) return false; // 빈 prefix는 *의미가 아님
  let dict = this.dict;
  for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i];
    if (!dict[ch]) return false;
    dict = dict[ch];
  }
  return true; // 탐색이 끝난 뒤의 문자는 검사할 필요 없이 단어임

  // let result = false;
  // const searchWith = (start, end, dict) => {
  //   if (end <= start) {
  //     // insert 시 끝이 항상 단어이므로 무조건 단어가 있음
  //     result = true;
  //     return;
  //   }
  //   const nextDict = dict[prefix[start]];
  //   if (nextDict) searchWith(start + 1, end, nextDict);
  // };
  // searchWith(0, prefix.length, this.dict, false);
  // return result;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const assert = require("assert");
const test = new Trie();
test.insert("asdf");
// 일치
assert.equal(test.search("asdf"), true);
// 부분일치
assert.equal(test.search("asd"), false);
// 하나도 일치하지 않음
assert.equal(test.search("fdsa"), false);
// 빈값
assert.equal(test.search(""), false);
// 부분일치도 단어로 추가
test.insert("asd");
assert.equal(test.search("asd"), true);
assert.equal(test.startsWith("a"), true);
assert.equal(test.startsWith(""), false);
assert.equal(test.startsWith("aa"), false);
assert.equal(test.startsWith("aaaaaaa"), false);
assert.equal(test.startsWith("asdf"), true);
assert.equal(test.startsWith("asdfg"), false);
console.log("pass");

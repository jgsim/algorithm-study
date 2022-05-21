/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Runtime: 95 ms, faster than 85.99% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 49.5 MB, less than 20.29% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * ..?
 * slice(29%) 쓰지말고 substring(85%) 쓰자
 * 풀긴했는데 문자열 더하는 연산과 자르는 연산이 들어있어도 성능이 좋은게 의아했음
 * 공간복잡도 기준으로 3가지 유형의 코드로 나뉘는데 가장 성능좋은 솔루션을 분석해보았다
 *
 * Runtime: 140 ms, faster than 49.85% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 47.9 MB, less than 59.66% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * 책의 방법대로 풀었을때 확실히 공간복잡도는 올라간 걸 확인할 수 있었다.
 * 그리고 테스트케이스가 가혹해져도 문제가 없는 방식이다.
 *
 * 문제설명
 * 주어진 문자열 중 중복없는 가장 큰 부분 문자열 길이 리턴
 * abcabcbb
 * -> 중복없는 가장 긴 길이는 3인 케이스 두가 abc, abc
 */

/**
 * 내 방식대로 푼 내용
 * 1. 빈 사전에 문자를 등록하면서 카운트함
 * 2. 중복문자 발생 시 사전 초기화, 카운트한 기록 최대값 기록
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // init
  let maxLen = 0; // 최대길이 기록용
  let curStr = ""; // 현재 최대길이에 대한 문자열
  let dict = {}; // 문자열 등록할 해시

  // iteration
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (dict[ch]) {
      // duplicate case
      // 현재 최대길이 문자열의 자를 위치 계산
      let sliceIdx = 0; // 중복되는 문자를 자를 위치
      for (; sliceIdx < curStr.length; sliceIdx++) {
        const curCh = curStr[sliceIdx];
        if (ch === curCh) break;
        delete dict[curCh]; // 중복되는 문자 이전은 사전에서 제거
      }
      sliceIdx += 1; // 인덱스 보정
      if (maxLen < sliceIdx) maxLen = sliceIdx; // 잘리는 문자열이 최대길이면 업데이트
      curStr = curStr.substring(sliceIdx) + ch; // 중복되는 부분까지 문자열 자르기, 남은 문자열에 현재 문자 붙임
    } else {
      // not duplicate case
      dict[ch] = 1; // 해시에 기록
      curStr += ch; // 현재문자열에 추가
      if (maxLen < curStr.length) maxLen = curStr.length; // 최대값 갱신
    }
  }

  return Math.max(curStr.length, maxLen);
};

const 책보고푼거 = (s) => {
  let left = 0;
  let right = 0;
  let max = 0;
  const hash = {};

  for (; right < s.length; right++) {
    const ch = s[right];
    const dupIdx = hash[ch];
    if (dupIdx !== undefined && dupIdx >= left) {
      // 중복되는 위치가 left 보다
      // 크다: left 위치 갱신
      // 작다: left 냅두고 사전만 업데이트
      left = dupIdx + 1;
    } else {
      // 중복되지 않는 경우만 길이가 늘어나기 때문에 max는 여기서만
      if (right - left + 1 > max) max = right - left + 1;
    }
    hash[ch] = right;
  }

  return max;
};

const tcList = [
  ["tmmzuxt", 5],
  ["aabaab!bb", 3],
  ["dvdf", 3],
  ["abcabcbb", 3],
  ["bbbbb", 1],
  ["pwwkew", 3],
];
tcList.forEach(([str, expect]) => {
  const result = 책보고푼거(str);
  result === expect
    ? console.log("pass")
    : console.error("fail", result, expect);
});

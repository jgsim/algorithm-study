/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Runtime: 140 ms, faster than 72.37% of JavaScript online submissions for Longest Palindromic Substring.
 * Memory Usage: 50.3 MB, less than 20.37% of JavaScript online submissions for Longest Palindromic Substring.
 * 
 * Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */

/**
 * 문자열 인덱스 하나씩 진행하면서
 * 각 반복마다,
 * -> 현재 케이스 최소 홀, 짝 회문 세팅
 * -> 각각 회문검사
 * -> 회문이면 max 갱신시도
 * -> 양쪽 한칸씩 확장하여 회문검사
 * -> ...
 * @param {string} s
 * @return {string}
 */
const longestPalindrome_1 = (s) => {
  if (s.length === 1) return s;

  /**
   * 회문검사 로직
   * @param {string} s
   * @param {number} left : ;
   * @param {number} right : ;
   * @returns {boolean}
   */
  const isPalindrome = (s, left, right) => {
    if (left > right) return false;
    // 양쪽끝부터 비교하면서 회문검사
    while (left <= right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };
  /**
   * 더 긴 문자열 리턴, 값은값이면 유지함
   * @param {string} oldValue
   * @param {string} newValue
   * @returns {string}
   */
  const getMax = (oldValue, newValue) =>
    oldValue.length >= newValue.length ? oldValue : newValue;
  /**
   * 현재 좌표기준 최대길이의 회문 검사하여 리턴
   * @param {string} str
   * @param {number} left : ;
   * @param {number} right : ;
   * @param {string} max
   * @returns {string}
   */
  const expand = (str, left, right, max) => {
    if (left < 0 || right >= str.length) return max;
    if (isPalindrome(str, left, right)) {
      max = getMax(max, str.slice(left, right + 1));
      return expand(str, left - 1, right + 1, max);
    }
    return max;
  };

  let max = s[0];
  // 탐색
  for (let i = 0; i < s.length; i++) {
    if (i > 0) max = expand(s, i - 1, i + 1, max);
    max = expand(s, i, i + 1, max);
  }

  return max;
};
/**
 * Runtime: 2824 ms, faster than 9.88% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 50.9 MB, less than 17.86% of JavaScript online submissions for Longest Palindromic Substring.
 */

const solution = function (s) {
  let resultStart = 0,
    resultLength = 0;

  function expandRange(str, begin, end) {
    // console.log('check', begin, end);
    while (begin >= 0 && end < str.length && str[begin] == str[end]) {
      begin--;
      end++;
    }
    // console.log('check2', begin, end);

    if (resultLength < end - begin - 1) {
      resultStart = begin + 1;
      resultLength = end - begin - 1;
    }
    // console.log('check3', begin, end, resultStart);
  }

  if (s.length < 2) return s;
  for (let start = 0; start < s.length - 1; start++) {
    expandRange(s, start, start);
    expandRange(s, start, start + 1);
  }
  return s.slice(resultStart, resultStart + resultLength);
};

/**
 * [동일] 문자열의 처음부터 끝까지 탐색
 * [동일] 각 반복마다 홀, 짝 케이스에 대한 검사
 *
 * [솔루션] 현재 문자열이 회문이 아닐때까지 탐색
 * [나] 현재 문자열의 회문검사, 최댓값 갱신, 확장하여 반복 -> 여기서 성능 조지는듯
 */
const longestPalindrome = (s) => {
  if (s.length === 1) return s;

  const getMax = (oldValue, newValue) => {
    const [oldL, oldR] = oldValue;
    const [newL, newR] = newValue;
    return oldR - oldL >= newR - newL ? oldValue : newValue;
  };
  const expand = (str, left, right, max) => {
    if (left < 0 || right >= str.length) return max;
    // 현재 문자열로 가능한 최대 길이 회문 위치 계산
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    // 회문검사
    if (str[left + 1] === str[right - 1]) {
      max = getMax(max, [left + 1, right - 1]);
    }
    return max;
  };

  let [maxL, maxR] = [0, 0];
  // 탐색
  for (let i = 0; i < s.length; i++) {
    if (i > 0) [maxL, maxR] = expand(s, i - 1, i + 1, [maxL, maxR]);
    [maxL, maxR] = expand(s, i, i + 1, [maxL, maxR]);
  }

  return s.slice(maxL, maxR + 1);
};
/**
 * Runtime: 140 ms, faster than 72.37% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 50.3 MB, less than 20.37% of JavaScript online submissions for Longest Palindromic Substring.
 */

const tcList = [
  ["babad", "bab"], // "aba"도 정답으로 쳐줌
  ["cbbd", "bb"],
  ["a", "a"],
  ["ac", "a"], // 정답이 한
];

tcList.forEach(([s, expect]) => {
  const ans = longestPalindrome(s);
  // const ans = solution(s);
  ans === expect
    ? console.log("pass")
    : console.error("fail", ans, "!==", expect);
});

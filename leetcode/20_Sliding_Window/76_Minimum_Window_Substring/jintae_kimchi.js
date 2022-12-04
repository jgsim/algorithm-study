/**
 * https://leetcode.com/problems/minimum-window-substring/
 * Runtime: 127 ms, faster than 67.92% of JavaScript online submissions for Minimum Window Substring.
 * Memory Usage: 44.9 MB, less than 79.37% of JavaScript online submissions for Minimum Window Substring.
 *
 * 문제설명
 * s, t 두 문자열이 주어지면 t의 모든 문자를 가진 s의 가장 작은 부분집합을 구하라
 * ex) 'abc', 'bc' => 'bc'
 * 제시되는 테스트케이스는 답이 유일하다고 가정한다
 * t의 부분집합이 s에 없으면 [''] 리턴
 * ex) 'a', 'ab' => ''
 *
 * 시간복잡도를 O(m + n) 으로 구현하는것이 목표
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  /**
   * 문자열을 분석하여 해시형태로 만듬
   * len은 키 개수(문자만)를 의미
   * sMap: { a: 0, b: 0, c: 0, len: 0, add: fn(), remove: fn() }
   * tMap: { a: 3, b: 1, c: 1, len: 3 }
   */
  const add = (sMap, tMap, ch) => {
    if (tMap[ch]) {
      sMap[ch] += 1;
      if (sMap[ch] === tMap[ch]) sMap.len += 1;
    }
  };
  const remove = (sMap, tMap, ch) => {
    if (tMap[ch]) {
      sMap[ch] -= 1;
      if (sMap[ch] < tMap[ch]) sMap.len -= 1;
    }
  };
  const tMap = {};
  const sMap = {
    add,
    remove,
  };
  sMap.len = 0;
  tMap.len = 0;
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    sMap[ch] = 0;
    if (tMap[ch]) tMap[ch] += 1;
    else {
      tMap[ch] = 1;
      tMap.len += 1;
    }
  }

  // 0 ~ x까지 t의 부분집합인 초기 케이스 찾기
  let left = 0;
  let right = 0;
  while (right < s.length) {
    const ch = s[right];
    sMap.add(sMap, tMap, ch);
    // 아직 부분집합이 아니면 계속 탐색
    if (tMap.len !== sMap.len) right++;
    else break;
  }
  if (right >= s.length) return ""; // 전체 길이 중에서도 부분집합이 없음

  // 초기 최소값
  let minLeft = left; // 왼쪽은 더 줄일 수 있을 수도 있지만 아래 로직에서 자연스럽게 처리되므로 일단 left 설정
  let minRight = right;
  let min = minRight - minLeft;
  const updateMin = (left, right) => {
    if (sMap.len === tMap.len && min > right - left) {
      minLeft = left;
      minRight = right;
      min = minRight - minLeft;
    }
  };

  // 이제 left, right 이동하면서 최소값 구하기
  while (left <= right && right < s.length) {
    // Left 포인터 조작
    while (left <= right) {
      // 포인터 이동 전 부분집합원소면 업데이트
      const prevCh = s[left];
      sMap.remove(sMap, tMap, prevCh);
      left++;
      const ch = s[left];
      // 부분집합문자이면 해시업데이트
      if (tMap[ch]) {
        // 부분집합이면 최소길이 업데이트
        updateMin(left, right);
        // 부분집합이 아니면 오른쪽 포인터 조정하기 위해 종료
        if (sMap.len < tMap.len) break;
      }
    }

    // Right 포인터 조작
    while (right < s.length) {
      right++;
      const ch = s[right];
      if (tMap[ch]) {
        // 해당 문자 업데이트하고
        sMap.add(sMap, tMap, ch);
        // 부분집합을 만족하면 다시 왼쪽을 이동하기 위해 종료
        if (sMap.len === tMap.len) {
          // 최소값 업데이트
          updateMin(left, right);
          break;
        }
      }
    }
  }

  return s.slice(minLeft, minRight + 1);
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: ["ABAACBAB", "ABC"],
      expect: "ACB",
    },
    {
      params: ["ADOBECODEBANC", "ABC"],
      expect: "BANC",
    },
    {
      params: ["a", "a"],
      expect: "a",
    },
    {
      params: ["a", "aa"],
      expect: "",
    },
  ],
  minWindow
);

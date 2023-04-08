/**
 * https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/
 * Runtime 111 ms Beats 22.22% Memory 47 MB Beats 22.22%
 *
 * 문제)
 * 0과 1로 이루어진 문자열이 주어짐
 * 0과 1이 짝이 맞는 (0->1 순서로) 문자열 중 가장 긴 길이를 구하라
 * 1010001110 => 1_01_000111_0 => 6
 *
 * 해설)
 * 0부터 시작하는 개수를 세고
 * 1부터 시작하는 개수를 세서 검사
 * 다음 케이스 진행의 로직으로 작성.
 *
 * T: O(N) S: O(1)으로 구현했으나 성능이 낮게 나옴
 * 솔루션 글 중에 나랑 똑같은 로직을 발견함
 * https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3368491/c-one-iteration-two-counters/
 */

function findTheLongestBalancedSubstring(s: string): number {
  let max = 0;
  let idx = 0;
  while (idx < s.length) {
    let zero = 0;
    let zeroIdx = idx;
    while (s[zeroIdx] === "0") {
      zero++;
      zeroIdx++;
    }
    let one = 0;
    let oneIdx = zeroIdx;
    while (s[oneIdx] === "1") {
      one++;
      oneIdx++;
    }
    max = Math.max(max, Math.min(zero, one));
    idx = oneIdx;
  }

  return max * 2;
}

function 다른멋진알고리즘(s: string): number {
  let tmp = "01";
  while (s.includes(tmp)) {
    tmp = `0${tmp}1`;
  }
  return tmp.length - 2;
}

function 다른멋진알고리즘2(s: string): number {
  let max: string = "";
  let a: string = "0";
  let b: string = "1";
  let search: string = `${a}${b}`;

  while (s.match(RegExp(search))) {
    max = search;
    a = a.concat("0");
    b = b.concat("1");
    search = `${a}${b}`;
  }

  return max.length > 0 ? max.length : 0;
}

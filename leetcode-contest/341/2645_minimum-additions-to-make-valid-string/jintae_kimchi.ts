/**
 * https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/
 * Runtime 94 ms Beats 21.21% Memory 45.2 MB Beats 63.64%
 *
 * 문제)
 * word 라는 문자열이 주어짐
 * 문자열은 'a', 'b', 'c' 로만 구성되어 있음
 * 입력 문자열에 'a', 'b', 'c' 를 마음대로 붙여 'abc' 값만 존재하도록 만들어야 함
 *      a__ab_abc__c
 *   => abcabcabcabc
 * 위 예에서는 5개의 문자를 추가해야 조건을 만족
 * 조건을 만족할 수 있는 최소삽입 개수를 구하여 리턴
 *
 * 풀이)
 * 문자열을 순회하면서 각 문자와 인접한 문자를 검사하여 추가할 개수를 정하고 인덱스를 조정하는 식으로 함
 * 그 결과 조건문으로 떡칠한 극혐코드가 생성됨
 */

function addMinimum(word: string): number {
  let ans = 0;
  for (let i = word.length - 1; i >= 0; i--) {
    const ch = word[i];
    switch (ch) {
      case "a": // cur + bc
        ans += 2;
        break;
      case "b": // check or a + cur + c
        if (word[i - 1] === "a") {
          i -= 1;
          ans += 1;
        } else {
          ans += 2;
        }
        break;
      case "c": // check or a + check or b + cur
        if (word[i - 1] === "b") {
          // _bc or abc
          // _bc: _abc
          // abc: abc
          if (word[i - 2] === "a") {
            i -= 2;
          } else {
            i -= 1;
            ans += 1;
          }
        } else {
          // cc or ac or _c
          // cc: c(ab)c
          // ac: a(b)c
          // _c: (ab)c
          if (word[i - 1] === "a") {
            i -= 1;
            ans += 1;
          } else {
            ans += 2;
          }
        }
        break;
    }
  }
  return ans;
}

/**
 * 이런식으로 우아하게 간략화 가능했다 ㅋㅋ..
 * 특정문자가 왔을 때
 * a: abc가 오면 인덱스만 증가. 그 외의 문자이면 삽입이 필요하니 카운트하여 가상의 abc 문자열을 만듬
 * b: ab 케이스가 자동으로 걸러지고 cb, bb 같은거만 고려하면 되는 상황 a가 카운트 되고 b는 건너 뛰고 다음 c에 대한 검사도 함
 * c: cc에 대한 처리만 함 a, b는 카운트 되고 c는 인덱스 진행
 */
function addMinimum_solution_1(word: string): number {
  let ans = 0;
  let i = 0;
  while (i < word.length) {
    word[i] === "a" ? i++ : ans++;
    word[i] === "b" ? i++ : ans++;
    word[i] === "c" ? i++ : ans++;
  }
  return ans;
}

/**
 * abcabc... 는 오름차순을 기준으로 분리됨
 * 최종 abc 셋의 개수를 알 수 있으면 그 길이에 원본 길이를 빼면 삽입할 문자의 개수를 구할 수 있음
 * 그래서 현재 문자가 이전문자의 오름차순이 아닐때의 개수를 세면 됨
 */
function addMinimun_solution_2(word: string): number {
  let set = 0;
  let prev = "z";
  for (let i = 0; i < word.length; i++) {
    word[i] <= prev ? set++ : null;
    prev = word[i];
  }
  return set * 3 - word.length;
}

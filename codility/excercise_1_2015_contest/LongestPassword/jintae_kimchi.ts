/**
 * https://app.codility.com/demo/results/trainingWCNAZ5-N6S/
 * Task Score 100% Correctness 100%
 *
 * 문제)
 * 비밀번호를 a-z or A-Z or 0-9 문자 만으로 구성해야 한다
 * 그리고 알파벳은 짝수개(0개포함) 숫자는 홀수개로 이루어져야 함
 *
 * 입력값으로는 문자열이 주어지는데 띄어쓰기를 기준으로 단어를 구분할 수 있도록 제공한다
 * 각 단어마다 비밀번호로 사용하기 유효한지 검사하여 가장 긴 암호의 길이를 리턴하라
 * 만약 유효한 단어가 없으면 -1 리턴
 *
 * 풀이)
 * 공백을 기준으로 단어를 나눈 후
 * 패스워드 규칙에 맞는지 검사하여 필터링
 *      정규식이나 다른 좋은 방법이 있었는지 모르겠지만 나는 단어마다 루프를 돌려서 검사했다.
 * 필터링 된 것 중 가장 긴 단어길이 또는 -1 리턴
 * 성능적인 면은 평가하지 않는 문제임
 * O(N ** 2)
 *
 * 여담)
 * 제대로 작성한 것 같았는데 리턴 -1 처리를 안해서 60퍼가 나왔었다
 * 아무리 급해도 입출력을 자세히 숙지하자..
 */

function solution(S: string): number {
  // a-z, A-Z, 0-9
  const words = S.split(" ")
    .filter((word) => {
      // a-z
      let cCount = 0;
      let nCount = 0;
      for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
          cCount += 1;
        } else if (ch >= "0" && ch <= "9") {
          nCount += 1;
        } else {
          return false;
        }
      }
      return cCount % 2 === 0 && nCount % 2 === 1;
    })
    .sort((a, b) => b.length - a.length);
  return words[0]?.length ?? -1;
}

/**
 * https://leetcode.com/problems/number-of-even-and-odd-bits/
 * Runtime 77 ms Beats 58.82% Memory 44.9 MB Beats 50%
 *
 * 문제)
 * 양의 정수 n 을 이진수로 변환한 뒤 낮은 자리수부터 0으로 시작하는 인덱스를 잡음
 * 인덱스의 이진수 값이 1인 경우 짝수/홀수 번째 인덱스인지에 따라 개수 누적함
 * [짝수개수, 홀수개수] 형태로 리턴
 *
 * 풀이)
 * 이진수 끝자리부터 하나씩 검사하면 홀수/짝수 위치에 값 누적
 * 다른풀이)
 * 문자열로 만들지 않고 비트연산으로 하나씩 밀면서 할 수도 있음
 */

function evenOddBit(n: number): number[] {
  const str = n.toString(2);
  let e_o = 0;
  const ans: number[] = [0, 0];
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "1") ans[e_o] += 1;
    e_o = e_o === 0 ? 1 : 0;
  }

  return ans;
}

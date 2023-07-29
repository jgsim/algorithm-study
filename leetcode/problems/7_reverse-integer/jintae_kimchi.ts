/**
 * https://leetcode.com/problems/reverse-integer/description/
 * Runtime 69 ms Beats 86.4% Memory 45.2 MB Beats 35.52%
 * Runtime 47 ms Beats 100% Memory 44.4 MB Beats 88.24% (solution based)
 *
 * math or string,array? | medium
 *
 * 문제에 정수 범위를 명시해놨다 부호 있는 64bit 자리수로.
 * 뒤집으면 오버플로우일 수 있으므로 검사가 필요
 *
 * 10진수를 간편히 다루기 위해 배열화하여 절반을 기준으로 뒤집고 앞의 0을 제거하는 식으로 풀었다.
 * 솔루션은 mod, div 로 수학적으로 푸는 방법이었다
 * 나머지 연산으로 현 자리수를 얻고
 * 나누기 연산으로 한 자리씩 줄여나가는 방식
 */

function reverse(x: number): number {
  const sign = x < 0;
  const arr = x.toString().split("");
  if (sign) arr.splice(0, 1);
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    const tmp = arr[i];
    arr[i] = arr[len - i - 1];
    arr[len - i - 1] = tmp;
  }
  let sliceIdx = 0;
  for (let i = 0; i < len && arr[i] === "0"; i++) {
    sliceIdx++;
  }
  const reversed = arr.slice(sliceIdx).join("");
  const ans = (sign ? -1 : 1) * Number(reversed);
  return ans < -2147483648 || ans > 2147483647 ? 0 : ans;
}

function reverse_solution(x: number): number {
  let ans = 0;
  const MIN = -2147483648;
  const MAX = 2147483648;
  const sign = x < 0;
  x = Math.abs(x);
  while (x != 0) {
    const pop = x % 10; // 1234 => 4
    x = Math.floor(x / 10); // 1234 => 123
    ans = ans * 10 + pop; // 0 * 10 + 4 = 4

    // 123 => 3
    // 123 => 12
    // 4 * 10 + 3 = 43

    // 12 => 2
    // 12 => 1
    // 430 + 2 = 432

    // 1 => 1
    // 1 => 0
    // 4320 + 1 = 4321
  }
  return ans < MIN || MAX < ans ? 0 : (sign ? -1 : 1) * ans;
}

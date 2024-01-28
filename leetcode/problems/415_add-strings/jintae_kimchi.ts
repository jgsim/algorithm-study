/**
 * https://leetcode.com/problems/add-strings/description/
 * Runtime 55 ms Beats 92.14% of users with TypeScript
 * Memory 52.12 MB Beats 12.14% of users with TypeScript
 *
 * easy | math | string
 *
 * ! BigInt 사용 금지
 * - 문자열을 바로 붙이는 것 보다 배열에 담아서 합치는 게 효율적임
 */

function addStrings(num1: string, num2: string): string {
  let num1Idx = num1.length - 1;
  let num2Idx = num2.length - 1;
  let carry = 0;
  let ans: number[] = [];

  for (; num1Idx >= 0 || num2Idx >= 0; ) {
    const num1Val = Number(num1[num1Idx] ?? 0);
    const num2Val = Number(num2[num2Idx] ?? 0);

    const sum = num1Val + num2Val + carry;
    ans.push(sum % 10);
    carry = Math.floor(sum / 10);

    num1Idx--;
    num2Idx--;
  }
  if (carry) {
    ans.push(carry);
  }
  return ans.reverse().join("");
}

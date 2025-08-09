/**
 * https://leetcode.com/problems/divide-two-integers/description/
 * medium
 */

function divide(dividend: number, divisor: number): number {
  if (dividend === 0) return 0;

  const MAX = 2147483647;
  const MIN = -2147483648;

  const getMaxDivisor = (current: number, divisor: number) => {
    let maxDivisor = divisor;
    let quo = -1;
    while (current - maxDivisor < maxDivisor) {
      maxDivisor <<= 1;
      quo <<= 1;
    }
    return [maxDivisor, quo];
  };

  const sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
  let remain = dividend > 0 ? -dividend : dividend;
  divisor = divisor > 0 ? -divisor : divisor;
  let ans = 0;
  while (remain <= divisor) {
    const [maxDivisor, quo] = getMaxDivisor(remain, divisor);
    ans += quo;
    remain -= maxDivisor;
  }
  return sign ? Math.min(-ans, MAX) : Math.max(ans, MIN); // overflow 처리
}

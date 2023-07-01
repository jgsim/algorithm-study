/**
 * https://leetcode.com/problems/roman-to-integer/description/
 * Runtime 131 ms Beats 71.41% Memory 47.8 MB Beats 86.76%
 *
 * array, map
 *
 * IX, IV 같은 케이스인 경우 4xx 9xx 형태로 계산하고 인덱스 조정
 */

function romanToInt(s: string): number {
  const romanDict: { [key: string]: number } = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const num = romanDict[ch];
    const nextCh = s[i + 1];
    if (nextCh) {
      const nextNum = romanDict[nextCh];
      // 9 or 4
      if (num < nextNum) {
        ans += nextNum - num;
        i++;
      } else {
        ans += num;
      }
    } else {
      ans += num;
    }
  }

  return ans;
}

/**
 * https://leetcode.com/problems/string-to-integer-atoi/description/
 * Runtime 0ms Beats 100.00% (버근가?)
 * Memory 59.10MB Beats 13.62%
 *
 * medium
 *
 * TODO:
 * - numStr 불필요. 값을 읽으면서 바로 계산하는 방식으로 할 것 (trim용 while, 계산용 while 두 개만 사용하는 방식으로 줄이기)
 * - 32bit integer 값 초과하기 전에 검사하는 게 더 안정적이고 정석적임 (더하기 바로 전에 미리 검사)
 */
function myAtoi(s: string): number {
  // edge case
  // (2 ** -31) ~ (2 ** 31 - 1)

  s = s.trim();

  let numStr = "";

  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // check negative/positive
  let dir = 1;
  let point = 0;
  if (s[0] === "-") {
    dir = -1;
    point = 1;
  } else if (s[0] === "+") {
    point = 1;
  } else if (s[0] !== "" && !digits.includes(s[0])) {
    // invalid
    return 0;
  }

  // trim zero
  while (point < s.length) {
    if (digits.includes(s[point])) {
      if (s[point] === "0") {
        point += 1;
        continue;
      }
      break;
    }
    return 0;
  }

  // filtering
  while (point < s.length) {
    if ("0" <= s[point] && s[point] <= "9") {
      numStr += s[point];
      point += 1;
    } else {
      break;
    }
  }

  // converting
  let num = 0;
  let idx = numStr.length - 1;
  let dec = 1;
  const min = 2 ** 31;
  const max = 2 ** 31 - 1;
  while (idx > -1) {
    const digit = Number(numStr[idx]);
    const value = digit * dec;

    num += value;

    // check under/overflow
    if (dir === -1 && min < num) return -min;
    if (dir === 1 && max < num) return max;

    idx -= 1;
    dec *= 10;
  }

  return num * dir;
}

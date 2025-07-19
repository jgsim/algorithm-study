/**
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * medium
 * hash table, math, string, greedy
 * time: 29min
 */

function intToRoman(num: number): string {
  /**
   * I: 1
   * V: 5
   * X: 10
   * L: 50
   * C: 100
   * D: 500
   * M: 1000
   */
  let dec = 1000;
  let ans = "";

  const dict: { [key in number]: string } = {
    1000: "M",
    2000: "MM",
    3000: "MMM",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  };
  while (1 <= dec) {
    const current = Math.floor(num / dec) * dec;

    // get a roman ch
    if (current > 0) {
      ans += dict[current];
    }

    // next num
    num = num % dec;
    dec = dec / 10;
  }

  return ans;
}

function intToRomanGreedy(num: number): string {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let ans = "";
  for (let i = 0; 0 < num; i++) {
    while (num >= nums[i]) {
      ans += romans[i];
      num -= nums[i];
    }
  }
  return ans;
}

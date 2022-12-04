/**
 * https://leetcode.com/problems/valid-parentheses/
 * Runtime: 79 ms, faster than 56.42% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 42 MB, less than 80.22% of JavaScript online submissions for Valid Parentheses.
 *
 * 문제설명
 * 괄호 짝이 유효한지 검사
 * ({[]}): true
 * ({[])}: false
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * 입력값은 괄호만 있음: (){}[]
 * 1 <= 길이 <= 10^4
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const open = "([{";
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (open.includes(ch)) {
      // open 그냥 넣으면 됨
      stack.push(ch);
    } else {
      // close 마지막 항목이 짝이 안맞으면 바로 false
      const popped = stack.pop();
      if (brackets[popped] !== ch) return false;
    }
  }

  return stack.length === 0;
};

const tcList = [
  ["()", true],
  ["()[]{}", true],
  ["{]", false],
  ["(())(({})[([])])", true],
];
tcList.forEach(([str, expect]) => {
  const ans = isValid(str);
  ans === expect ? console.log("pass") : console.error(`${ans} !== ${expect}`);
});

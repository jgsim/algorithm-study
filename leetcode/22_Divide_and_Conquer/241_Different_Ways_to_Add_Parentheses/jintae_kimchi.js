/**
 * https://leetcode.com/problems/different-ways-to-add-parentheses/
 * Runtime: 76 ms, faster than 85.92% of JavaScript online submissions for Different Ways to Add Parentheses.
 * Memory Usage: 44.7 MB, less than 51.46% of JavaScript online submissions for Different Ways to Add Parentheses.
 */

/**
 * 숫자와 연산자(+, -, *)로 이루어진 문자열이 입력으로 들어오면
 * 순서를 유지한 상태로 괄호를 이것저것 붙여 가능한 모든 연산결과를 배열로 출력해야 함
 * 계산결과가 같아도 다 포함해야 함 ex) [0, 0, 1, 2]
 *
 * ex) 2-1-1
 * ((2 - 1) - 1) = 0
 * (2 - (1 - 1)) = 2
 * ((2) - (1) - (1)) <-- 이건 안치는듯?
 *
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  // 연산자 기준으로 시작 루프 정해보기
  const divideAndConquer = (str) => {
    // 종료조건: 1+2, 11, 1 => 99이하의 숫자만 취급하므로 2글자 이하는 무조건 숫자임
    if (str.length < 3) return [parseInt(str)];

    // sub string 이 두개 이상 나올 수 있음
    const currResult = [];
    for (let i = 0; i < str.length; i++) {
      // 연산자 기준으로 '좌' '연산자' '우' 나눔
      if ("+-*".indexOf(str[i]) > -1) {
        const operator = str[i];
        const leftStr = str.substring(0, i); // slice 쓰면 다매요
        const rightStr = str.substring(i + 1);

        const leftVals = divideAndConquer(leftStr);
        const rightVals = divideAndConquer(rightStr);

        leftVals.forEach((lv) => {
          rightVals.forEach((rv) => {
            currResult.push(calc(lv, operator, rv));
          });
        });
      }
    }
    return currResult;
  };
  const calc = (left, operator, right) => {
    switch (operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
    }
    return 0;
  };
  return divideAndConquer(expression);
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: ["0+1"],
      expect: [1],
    },
    {
      params: ["2-1-1"],
      expect: [0, 2],
    },
    {
      params: ["2*3-4*5"],
      expect: [-34, -14, -10, -10, 10],
    },
  ],
  diffWaysToCompute,
  (a, b) => {
    a.sort();
    b.sort();
    return JSON.stringify(a) === JSON.stringify(b);
  }
);

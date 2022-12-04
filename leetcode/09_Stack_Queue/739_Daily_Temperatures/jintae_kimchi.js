/**
 * https://leetcode.com/problems/daily-temperatures/
 * dailyTemperatures_bruteforce
 * Runtime: 1525 ms, faster than 20.64% of JavaScript online submissions for Daily Temperatures.
 * Memory Usage: 65.5 MB, less than 36.92% of JavaScript online submissions for Daily Temperatures.
 * 다행히 통과는 시켜줬지만 역시 n^2로 풀면 성능이 안좋음
 *
 * dailyTemperatures_stack
 * Runtime: 306 ms, faster than 66.34% of JavaScript online submissions for Daily Temperatures.
 * Memory Usage: 64.4 MB, less than 52.42% of JavaScript online submissions for Daily Temperatures.
 * unshift 쓰는거 보다 push and reverse 가 성능이 더 잘나왔다
 * 책 내용을 보니 나와 반대 방향으로 처리했다
 *
 * 문제설명
 * 날짜순으로 표현된 온도 목록이 주어진다
 * 각 인덱스(날짜)마다 그날 기온보다 높은 날이 되려면 몇일이 지나야 하는지 계산한 배열을 리턴하라
 * 더 높은 온도가 없으면 0이 된다
 *
 */

const { arrayResult } = require("../../utils");

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures_bruteforce = function (temperatures) {
  const result = [];
  temperatures.forEach((tmp, i) => {
    let curVal = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (tmp < temperatures[j]) {
        curVal = j - i;
        break;
      }
    }
    result.push(curVal);
  });

  return result;
};

/**
 * 배열의 뒤부터 내림차순으로 스택에 쌓음
 * 스택에 쌓을때 인덱스를 이용하여 값 계산
 * @param {*} temperatures
 */
const dailyTemperatures_stack = (temperatures) => {
  const stack = []; // [[value, index], ...]
  const result = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const temp = temperatures[i];

    if (!stack.length) {
      // 스택이 비어있으면 0이고 현재 값을 스택에 넣음
      stack.push(i);
      result.push(0);
      continue;
    }

    // 현재값보다 큰 값이 나올때까지 스택뒤짐
    if (temperatures[stack[stack.length - 1]] > temp) {
      // 스택의 마지막 값이 현재값보다 크면 1이니까
      stack.push(i);
      result.push(1);
    } else {
      // 현재값보다 작지 않은게 나올때까지 뒤짐
      while (stack.length && temperatures[stack[stack.length - 1]] <= temp) {
        stack.pop();
      }
      if (!stack.length) {
        // 스택이 비어있으면 0이고 현재 값을 스택에 넣음
        stack.push(i);
        result.push(0);
        continue;
      } else {
        result.push(stack[stack.length - 1] - i);
        stack.push(i);
      }
    }
  }

  return result.reverse();
};
const dailyTemperatures_stack_refactored = (temperatures) => {
  const stack = []; // [index]
  const result = [];
  //   let count = 0;
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const temp = temperatures[i];

    // 현재값보다 작지 않은게 나올때까지 뒤짐
    while (stack.length && temperatures[stack[stack.length - 1]] <= temp) {
      stack.pop();
      //   count++;
    }
    // 스택의 마지막 값과 인덱스 차이를 계산(스택이 없으면 0)
    result.push(stack.length ? stack[stack.length - 1] - i : 0);
    stack.push(i);
  }
  // console.log(count);
  // 8 4 0 0

  return result.reverse();
};

const solution = (temperatures) => {
  const len = temperatures.length;
  const result = Array.from({ length: len }).fill(0);
  const stack = [];
  //   let count = 0;
  for (let i = 0; i < len; i++) {
    const curr = temperatures[i];
    // 현재 값이 스택 값보다 높으면
    while (stack.length && curr > temperatures[stack[stack.length - 1]]) {
      // 스택에서 이전값 제거하고
      const last = stack.pop();
      // 그 이전값의 답을 기록
      result[last] = i - last;
      //   count++;
    }
    stack.push(i);
  }
  //   console.log(count);
  // 8 6 3 2
  return result;
};

const tcList = [
  //   [
  //     [89, 62, 70, 58, 47, 47, 46, 76, 100, 70],
  //     [8, 1, 5, 4, 3, 2, 1, 1, 0, 0],
  //   ],
  [
    [73, 74, 75, 71, 69, 72, 76, 73],
    [1, 1, 4, 2, 1, 1, 0, 0],
  ],
  [
    [30, 40, 50, 60],
    [1, 1, 1, 0],
  ],
  [
    [30, 60, 90],
    [1, 1, 0],
  ],
];
tcList.forEach(([temperatures, expect]) => {
  const ans = arrayResult(solution(temperatures));
  const exp = arrayResult(expect);
  ans === exp ? console.log("pass") : console.error(`${ans} !== ${expect}`);
});

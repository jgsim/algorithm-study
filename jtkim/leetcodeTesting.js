/**
 * leetcode local testing 을 위한 간단한 코드 모음
 *
 * 작성기준
 * ! 최대한 단순하게
 * ! 실제 필요한 부분만 구현
 */

const { TestCase, ListNode } = require("./models");
const assert = require("assert");

/**
 * Serialize Linked List
 * @param {ListNode} node
 * @returns {string} serialized linked list
 */
const listNodeToString = (node) => {
  try {
    if (!(node instanceof ListNode)) {
      throw new Error("이 매서드가 이해하는 ListNode 형태가 아닌 것 같네요");
    }
    let str = "";
    while (node) {
      str += node.val;
      node = node.next;
    }
    return str;
  } catch (error) {
    console.error(error);
  }
};
/**
 * Serialize Array
 * @param {unknown[]} array
 * @returns {string} serialized array string
 */
const arrayToString = (array) => {
  if (!Array.isArray(array)) throw new Error("Array 타입이 아닌 값을 받음");
  return JSON.stringify(array);
};
/**
 *
 * @param {*} result
 * @param {unknown} expectType
 * @returns
 */
const serializeResult = (result) => {
  if (result instanceof ListNode) {
    return listNodeToString(result);
  } else if (Array.isArray(result)) {
    return arrayToString(result);
  }
  return result;
};

/**
 * 알고리즘 문제를 실행하기 위한 함수
 * @param {TestCase[]} param.tcList 테스트케이스 배열
 * @param {(...args: any[]) => any} param.solution 풀어야 할 문제함수
 * @param {<T>(result: T, expect: T) => boolean} param.customAssertFn Assertion 조건이 특이한 문제에 적용할 검증 함수
 */
const runTestCase = ({ tcList = [], solution, customAssertFn = null }) => {
  try {
    tcList.forEach(({ params, expect }, idx) => {
      if (!Array.isArray(params)) {
        throw new Error("테스트 파라미터는 배열 형태로 만들어야 함");
      }
      const result = serializeResult(solution(...params));
      customAssertFn && typeof customAssertFn === "function"
        ? assertFn(result, expect)
        : assert.deepEqual(result, expect);

      console.log(`pass ${idx + 1} / ${tcList.length}`);
    });
  } catch (error) {
    console.error("test failed", error);
  }
};

const testingModule = module.exports;
testingModule.runTestCase = runTestCase;

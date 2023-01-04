/**
 * leetcode local testing 을 위한 간단한 코드 모음
 *
 * 작성기준
 * ! 최대한 단순하게
 * ! 실제 필요한 부분만 구현
 */

import { ListNode, TestCase, ParamType } from "./models";
import assert from "assert";

/**
 * Serialize Linked List
 * @returns {string} serialized linked list
 */
export const listNodeToString = <T>(node: ListNode<T>) => {
  try {
    if (!(node instanceof ListNode)) {
      throw new Error("이 매서드가 이해하는 ListNode 형태가 아닌 것 같네요");
    }
    let str = "";
    while (node) {
      str += node.val;
      if (node.next) node = node.next;
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
export const arrayToString = <T>(array: T[]) => {
  if (!Array.isArray(array)) throw new Error("Array 타입이 아닌 값을 받음");
  return JSON.stringify(array);
};
/**
 * 원시값이 아닌 결과에 대한 문자열화
 * @returns {string} serialized string result
 */
const serializeResult = (result: unknown) => {
  if (result instanceof ListNode) {
    return listNodeToString(result);
  } else if (Array.isArray(result)) {
    return arrayToString(result);
  }
  return result;
};

interface runTestCaseParams<Param, Expect> {
  tcList: ParamType<Param, Expect>[]; // 테스트케이스 배열
  solution: (...args: any) => any; // 풀어야 할 문제함수
  customAssertFn?: (...args: any) => any; // Assertion 조건이 특이한 문제에 적용할 검증 함수
}
/**
 * 알고리즘 문제를 실행하기 위한 함수
 */
export const runTestCase = <Param, Expect>(
  args: runTestCaseParams<Param, Expect>
) => {
  try {
    const { tcList, solution, customAssertFn } = args;
    tcList.forEach(({ params, expect }, idx) => {
      if (!Array.isArray(params)) {
        throw new Error("테스트 파라미터는 배열 형태로 만들어야 함");
      }
      const result = serializeResult(solution(...params));
      const expectResult = serializeResult(expect);
      customAssertFn && typeof customAssertFn === "function"
        ? customAssertFn(result, expectResult)
        : assert.deepEqual(result, expectResult);

      console.log(`pass ${idx + 1} / ${tcList.length}`);
    });
  } catch (error) {
    console.error("test failed", error);
  }
};

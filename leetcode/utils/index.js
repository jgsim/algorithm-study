const assert = require("assert");

exports.ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

exports.linkConcat = (node) => {
  let str = "";
  while (node) {
    str += node.val;
    node = node.next;
  }

  return str;
};

exports.arrayResult = (array) => {
  if (!Array.isArray(array)) return "";
  return JSON.stringify(array);
};

exports.runTestCase = (tcList, solution, assertFn) => {
  tcList.forEach(({ params, expect }) => {
    if (!Array.isArray(params)) {
      throw "테스트 파라미터는 배열 형태로 만들어야 함";
    }
    const result = solution(...params);
    assertFn && typeof assertFn === "fuction"
      ? assertFn(result, expect)
      : assert.deepEqual(result, expect);
  });
  console.log("test done");
};

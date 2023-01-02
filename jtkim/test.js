/**
 * 테스팅 모듈을 테스팅하는 테스트
 */

const { ListNode } = require("./models");
const { runTestCase } = require("./leetcodeTesting");

const basic = () => {
  const solution = (x) => {
    return x;
  };
  runTestCase({
    tcList: [
      // pass
      {
        params: [1],
        expect: 1,
      },
      // pass
      {
        params: [2],
        expect: 2,
      },
      // fail
      {
        params: [1],
        expect: 2,
      },
    ],
    solution,
  });
};
const arrayBasic = () => {
  const solution = (x) => {
    return [x];
  };
  runTestCase({
    tcList: [
      // pass
      {
        params: [1],
        expect: [1],
      },
      // pass
      {
        params: [2],
        expect: [2],
      },
      // fail
      {
        params: [1],
        expect: [2],
      },
    ],
    solution,
  });
};
const listNodeBasic = () => {
  const solution = (x) => {
    const head = new ListNode(null);
    let pointer = head;
    x.forEach((y, i) => {
      const curNode = new ListNode(y);
      pointer.next = curNode;
      pointer = curNode;
    });
    return head.next;
  };
  runTestCase({
    tcList: [
      // pass
      {
        params: [[1]],
        expect: new ListNode(1),
      },
      // pass
      {
        params: [[1, 2]],
        expect: new ListNode(1, new ListNode(2)),
      },
      // fail
      {
        params: [[1]],
        expect: new ListNode(2),
      },
    ],
    solution,
  });
};

const run = () => {
  [basic, arrayBasic, listNodeBasic].forEach((x) => {
    try {
      x();
    } catch (error) {}
  });
};
run();

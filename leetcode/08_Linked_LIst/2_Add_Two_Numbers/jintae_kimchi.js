/**
 * https://leetcode.com/problems/add-two-numbers/
 * addTwoNumbers
 * Runtime: 117 ms, faster than 74.14% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 47.6 MB, less than 35.72% of JavaScript online submissions for Add Two Numbers.
 * addTwoNumbers_220423
 * Runtime: 115 ms, faster than 76.20% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 47.7 MB, less than 29.77% of JavaScript online submissions for Add Two Numbers.
 *
 * 문제설명
 * 연결리스트 두개가 주어지는데 십진수 형태로 두 리스트를 계산한 결과를 연결리스트 형태로 반환
 * 2->4->3, 5->6->4
 * => 342 + 465 = 807
 * => 7->0->8 리턴
 *
 * 연결리스트니까.. 숫자로 만들어서 계산하는건 반칙
 * 책에서의 풀이
 * 1) 숫자로 만들어 계산
 * 연결리스트 뒤집은거로 int 형으로 만들어서 계산하고 리스트화해서 리턴
 * 이것도 통과는 된다고 함
 * 2) 전가산기 구현
 * 내가 푼 방식
 *
 * 1 <= 연결리스트길이 <= 100
 * 0 <= 노드 값 <= 9
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var result = new ListNode();
  var aa = l1;
  var bb = l2;
  var rr = result;
  var carry = 0;
  // 끝자릿수부터 계산하여 저장, 올림수 발생 시 다음 값에 고려하여 계산
  while (aa !== null || bb !== null) {
    var aval = aa ? aa.val : 0;
    var bval = bb ? bb.val : 0;
    var sum = aval + bval + carry;
    rr.next = new ListNode(sum % 10);
    rr = rr.next;
    // 올림수 있으면 설정, 없으면 초기화
    carry = sum > 9 ? 1 : 0;
    aa = aa && aa.next;
    bb = bb && bb.next;
  }
  // 올려야 할 수가 있다면 추가
  if (carry === 1) {
    rr.next = new ListNode(1);
  }

  return result.next;
};

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
const addTwoNumbers_220423 = (l1, l2) => {
  // 각 노드의 가장 뒷자리부터 순회
  // 자릿수가 작은거 기준으로 끝남
  let head = new ListNode(null);
  const result = head;
  let carry = 0;

  const sumAndMod = (v1, v2, c) => {
    const v = v1 + v2 + c;
    return [v % 10, v > 9 ? 1 : 0];
  };

  while (l1 || l2) {
    // 각 노드끼리 더하기
    const [curVal, nextCarry] = sumAndMod(
      l1 ? l1.val : 0,
      l2 ? l2.val : 0,
      carry
    );
    // 현재 자릿수 기록
    head.next = new ListNode(curVal);

    carry = nextCarry;
    head = head.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  // 마지막 캐리 처리
  if (carry) {
    head.next = new ListNode(carry);
  }

  return result.next;
};

const tcList = [
  [
    // 342 + 465 = 807
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4))),
    new ListNode(7, new ListNode(0, new ListNode(8))),
  ],
  [
    // 0 + 0 = 0
    new ListNode(0),
    new ListNode(0),
    new ListNode(0),
  ],
  [
    // 9999 + 999 = 10998
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
    new ListNode(9, new ListNode(9, new ListNode(9))),
    new ListNode(
      8,
      new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(1))))
    ),
  ],
];

const { linkConcat } = require("../../utils");
tcList.forEach(([l1, l2, expect]) => {
  const ans = linkConcat(addTwoNumbers_220423(l1, l2));
  const expectStr = linkConcat(expect);
  ans === expectStr && ans.length && expectStr.length
    ? console.log("pass")
    : console.error(`${ans} !== ${expectStr}`);
});

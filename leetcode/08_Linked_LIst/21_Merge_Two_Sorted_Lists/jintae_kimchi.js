/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * mergeTwoLists
 * Runtime: 74 ms, faster than 77.54% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 44 MB, less than 76.18% of JavaScript online submissions for Merge Two Sorted Lists.
 * mergeTwoLists_220423
 * Runtime: 72 ms, faster than 83.71% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 43.7 MB, less than 96.81% of JavaScript online submissions for Merge Two Sorted Lists.
 *
 * 문제설명
 * 정렬된 두 링크드리스트를 받음
 * 정렬순서를 유지하면서 병합하라
 * 중복값이면 순서 상관없음
 *
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order
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
var mergeTwoLists = function (l1, l2) {
  var nullhead = new ListNode();
  var node = nullhead;

  // 비교하면서 하나라도 다 연결될때까지 진행
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      // l2
      node.next = l2;
      l2 = l2.next;
    } else {
      // l1
      node.next = l1;
      l1 = l1.next;
    }
    node = node.next;
  }

  // 한쪽이 끝나면 남은 노드 그대로 이으면 끝
  node.next = l1 || l2;

  return nullhead.next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists_220423 = (l1, l2) => {
  let head = new ListNode();
  const result = head;

  // 하나라도 끝나면 탐색 종료
  while (l1 && l2) {
    // 두개의 값을 비교하여 더 작은거를 넣음
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  // 남은거 뒤에 붙임
  const remained = l1 ? l1 : l2;
  if (remained) {
    head.next = remained;
  }

  return result.next;
};

const tcList = [
  [
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    ),
  ],
  [null, null, null],
  [null, new ListNode(0), new ListNode(0)],
];

const { linkConcat } = require("../../utils");
tcList.forEach(([l1, l2, expect]) => {
  const ans = linkConcat(mergeTwoLists_220423(l1, l2));
  const expectStr = linkConcat(expect);
  ans === expectStr
    ? console.log("pass")
    : console.error(`${ans} !== ${expectStr}`);
});

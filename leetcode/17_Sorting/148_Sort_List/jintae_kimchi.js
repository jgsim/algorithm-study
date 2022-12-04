/**
 * https://leetcode.com/problems/sort-list/
 * Runtime: 221 ms, faster than 75.95% of JavaScript online submissions for Sort List.
 * Memory Usage: 68 MB, less than 52.14% of JavaScript online submissions for Sort List.
 * 이게 왜 됨? 느낌으로 풀림;
 *
 * 문제설명
 * 링크드리스트의 헤더가 주어지면 오름차순으로 정렬하라
 *
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
 * ! n log n 성능이 나와야 함
 * ! 추가메모리 공간 사용하지 않아야 함
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  /**
   * 링크드리스트 분할
   * 홀수: [1, 2] [3, 4, 5]
   * 짝수: [1, 2] [3, 4]
   * @param {ListNode} head
   * @returns {[ListNode, ListNode]}
   */
  const divide = (head) => {
    let slowEnd = head;
    let slow = head;
    let fast = head;
    while (fast.next) {
      if (!fast.next.next) {
        fast = fast.next;
      } else {
        fast = fast.next.next;
      }
      slowEnd = slow;
      slow = slow.next;
    }
    slowEnd.next = null;

    return [head, slow];
  };
  /**
   * 오름차순 기준으로 병합
   * @param {ListNode} left
   * @param {ListNode} right
   * @returns {ListNode}
   */
  const merge = (left, right) => {
    const dummyHead = new ListNode(undefined); // 리턴 포인터
    let node = dummyHead; // 병합 포인터
    while (left && right) {
      // 오름차순으로 작은 노드를 선택적으로 연결
      if (left.val <= right.val) {
        node.next = left;
        left = left.next;
      } else {
        node.next = right;
        right = right.next;
      }
      node = node.next;
    }
    if (left) {
      node.next = left;
    }
    if (right) {
      node.next = right;
    }
    return dummyHead.next;
  };
  const divideMerge = (head) => {
    if (!head || !head.next) {
      return head;
    }
    // 반 나눔
    let [left, right] = divide(head);
    if (left.next) {
      left = divideMerge(left);
    }
    if (right.next) {
      right = divideMerge(right);
    }

    return merge(left, right);
  };

  return divideMerge(head);
};

const tcodd = new ListNode(
  5,
  new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
);
const tceven = new ListNode(
  -1,
  new ListNode(0, new ListNode(3, new ListNode(4)))
);
sortList(tcodd);
sortList(tceven);

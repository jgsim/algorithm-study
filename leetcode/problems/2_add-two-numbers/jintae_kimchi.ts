/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * Runtime 112 ms Beats 47.37% Memory 48.4 MB Beats 60.41%
 *
 * linked list
 *
 * 두 리스트를 탐색하며 carry 를 고려해서 더해나가면 됨
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const ans = new ListNode();
  let sumList = ans;
  let inc = 0;

  while (l1 || l2) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + inc;
    if (sum > 9) {
      inc = 1;
      sum = sum % 10;
    } else {
      inc = 0;
    }
    sumList.next = new ListNode(sum);
    sumList = sumList.next;
    if (l1) l1 = l1?.next;
    if (l2) l2 = l2?.next;
  }
  if (inc === 1) {
    sumList.next = new ListNode(1);
  }

  return ans.next;
}

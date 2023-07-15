/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/description/
 * Runtime 73 ms Beats 59.49% Memory 45.2 MB Beats 26.58%
 *
 * linked list
 *
 * 낚시성(?) 문제
 * 삭제할 노드에 다음노드 정보를 복사하고 다음 노드를 끊으면 됨
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  if (!node) return;
  node.val = node.next!.val;
  node.next = node.next!.next;
}

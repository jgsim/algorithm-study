/**
 * https://leetcode.com/problems/add-two-numbers-ii/submissions/1065662371/
 * Runtime 92 ms Beats 85% Memory 47.9 MB Beats 85%
 *
 * medium | linked list | stack
 *
 * 노드의 끝부터 더해야 하는 방식이기 때문에 역순으로 하기 위한 스택을 활용.
 * 스택에 쌓고 pop 하면서 캐리를 고려하여 더하면 됨.
 *
 * 성능이 별로라 리펙토링을 수행했는데 수정한 부분은
 * 스택에 쌓을 때 각 링크드리스트를 별개의 while 문으로 분리한 것과
 * 결과를 더할 때 자릿수 합을 배열로 만들어서 링크드 리스트를 만든 부분을 바로 만들도록 수정했다.
 * (전자로 바꾸니 바로 성능이 올라감;)
 */

function addTwoNumbers_refactored(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const l1Stack: number[] = [];
  const l2Stack: number[] = [];
  let l1Node = l1;
  let l2Node = l2;
  while (l1Node) {
    l1Stack.push(l1Node.val);
    l1Node = l1Node.next;
  }
  while (l2Node) {
    l2Stack.push(l2Node.val);
    l2Node = l2Node.next;
  }
  let carry = 0;
  let ansHead = new ListNode();
  while (l1Stack.length || l2Stack.length) {
    const l1Val = l1Stack.pop() ?? 0;
    const l2Val = l2Stack.pop() ?? 0;
    const currentSum = l1Val + l2Val + carry;
    carry = currentSum > 9 ? 1 : 0;
    const currentVal = currentSum % 10;

    const tmp = new ListNode(currentVal, ansHead.next);
    ansHead.next = tmp;
  }
  if (carry === 1) {
    const tmp = new ListNode(1, ansHead.next);
    ansHead.next = tmp;
  }
  return ansHead.next;
}

function addTwoNumbers_first_tried(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const l1Stack: number[] = [];
  const l2Stack: number[] = [];
  let l1Node = l1;
  let l2Node = l2;
  while (l1Node || l2Node) {
    if (l1Node) {
      l1Stack.push(l1Node.val);
      l1Node = l1Node.next;
    }
    if (l2Node) {
      l2Stack.push(l2Node.val);
      l2Node = l2Node.next;
    }
  }
  let carry = 0;
  const ansStack: number[] = [];
  while (l1Stack.length || l2Stack.length) {
    const l1Val = l1Stack.pop() ?? 0;
    const l2Val = l2Stack.pop() ?? 0;
    const currentSum = l1Val + l2Val + carry;
    carry = currentSum > 9 ? 1 : 0;
    const currentVal = currentSum % 10;
    ansStack.push(currentVal);
  }
  if (carry === 1) ansStack.push(carry);

  const ansHead = new ListNode();
  ansStack.reduceRight((node, val) => {
    node.next = new ListNode(val);
    return node.next;
  }, ansHead);

  return ansHead.next;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

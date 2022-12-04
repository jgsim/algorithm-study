/**
 * https://leetcode.com/problems/odd-even-linked-list/
 * oddEvenList
 * Runtime: 100 ms, faster than 45.70% of JavaScript online submissions for Odd Even Linked List.
 * Memory Usage: 44.1 MB, less than 97.27% of JavaScript online submissions for Odd Even Linked List.
 * 성능이 애매하게 나왔는데 솔루션 코드와 논리적 구조는 같음
 *
 * oddEvenList_220423
 * Runtime: 127 ms, faster than 16.54% of JavaScript online submissions for Odd Even Linked List.
 * Memory Usage: 45 MB, less than 19.27% of JavaScript online submissions for Odd Even Linked List.
 * 예전에 풀었던 건 두 칸씩 건너가서 당연히 플래그로 푼게 성능이 떨어지는 결과가 나왔다
 *
 * 문제설명
 * 연결리스트를 홀수노드 다음에 짝수노드가 오도록 재구성하라
 * 공간복잡도 O(1) 시간복잡도 O(n)으로 풀어라
 *
 * 값은 신경쓸 필요 없음
 * 연결리스트의 순서를 섞는거임
 * 홀수번째노드들을 먼저 연결하고 짝수번째 노드들을 연결하면 되는 것
 *
 * 공간복잡도를 제한하였으니 추가 리스트를 만들어선 안됨
 * 시간복잡도 제한으로 한번만 탐색해야 함
 *
 * n == number of nodes in the linked list
 * 0 <= n <= 104
 * -10^6 <= Node.val <= 10^6
 */

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
const { ListNode, linkConcat } = require("../../utils");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  // 홀수번째 노드들과 짝수번째 노드들 정리
  if (!head || !head.next) return head;

  // 홀수와 짝수 노드들을 연결하는 포인터 노드 두개를 이용해서 각각 연결함
  var odd = head;
  var even = head.next;
  var oddHead = head;
  var evenHead = head.next;
  while (odd.next !== null && even.next !== null) {
    // 홀수의 다음은 짝수의 다음
    odd.next = even.next;
    // 포인터 이동
    odd = even.next;
    // 그럼 짝수의 다음은 홀수의 다음임
    even.next = odd.next;
    // 마찬가지로 포인터 이동
    even = odd.next;
  }
  // 홀수 노드 끝에 짝수 노드 붙이면 끝
  odd.next = evenHead;

  return oddHead;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList_220423 = (head) => {
  let odd = new ListNode();
  let even = new ListNode();
  const oddHead = odd;
  const evenHead = even;

  let isOdd = true;
  while (head) {
    if (isOdd) {
      odd.next = head;
      odd = odd.next;
    } else {
      even.next = head;
      even = even.next;
    }
    isOdd = !isOdd;
    head = head?.next;
  }
  // 홀수노드 뒤에 짝수노드 연결해줌
  even.next = null;
  odd.next = evenHead.next;

  return oddHead.next;
};

const tcList = [
  [
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ),
    new ListNode(
      1,
      new ListNode(3, new ListNode(5, new ListNode(2, new ListNode(4))))
    ),
  ],
  [
    // [2,1,3,5,6,4,7]
    new ListNode(
      2,
      new ListNode(
        1,
        new ListNode(
          3,
          new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7))))
        )
      )
    ),
    // [2,3,6,7,1,5,4]
    new ListNode(
      2,
      new ListNode(
        3,
        new ListNode(
          6,
          new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(4))))
        )
      )
    ),
  ],
];

tcList.forEach(([head, expect]) => {
  const ans = linkConcat(oddEvenList_220423(head));
  const expectStr = linkConcat(expect);
  ans === expectStr
    ? console.log("pass")
    : console.error(`${ans} !== ${expectStr}`);
});

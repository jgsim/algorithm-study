/**
 * https://leetcode.com/problems/insertion-sort-list/
 * Runtime: 118 ms, faster than 66.67% of JavaScript online submissions for Insertion Sort List.
 * Memory Usage: 44.5 MB, less than 56.79% of JavaScript online submissions for Insertion Sort List.
 *
 * 문제설명
 * 주어진 연결리스트를 삽입정렬 방식으로 정렬하라
 *
 * 삽입정렬이란?
 * 1. 처음 인덱스부터 하나씩 진행
 * 2. 기존 정렬된 상태의 리스트와 비교하여 적절한 위치를 찾음
 * 3. 위치 결정되면 스왑
 *
 * 시간복잡도는 하한 N 상한 n^2 으로 정렬된 상태가 좋을수록 성능이 좋음
 * 테스트 케이스도 이거에 기반하여 주어졌을 것 같음
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
var insertionSortList = function (head) {
  const root = new ListNode();
  let target = head;
  while (target) {
    // root 링크 중 들어갈 위치 찾기
    let rootNode = root;
    while (true) {
      // root만 존재할때 (초기상태)
      // or 끝까지 탐색했을 때
      if (!rootNode.next) {
        break;
      }
      // target 값이 더 크면 root 계속 탐색
      if (target.val > rootNode.next.val) {
        rootNode = rootNode.next;
      } else {
        break;
      }
    }

    // 위치 잡았으면 root 리스트에 해당 target 노드 포함

    // 다음 target 저장
    let nextTarget = target.next;
    target.next = rootNode.next;
    rootNode.next = target;
    target = nextTarget;
  }

  return root.next;
};

const tcReverse = new ListNode(
  4,
  new ListNode(3, new ListNode(2, new ListNode(1)))
);
insertionSortList(tcReverse);

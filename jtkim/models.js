/**
 * 여기는 알고리즘에 사용되는 자료구조에 대한 정의
 * 트리나 링크드리스트 등의 클래스를 정의함
 * 예외 케이스로 설계문제 등에서 제시하는 인터페이스가 있는데 일반화할 수 있는지 생각해보자
 */

class TestCase {
  constructor(params = [], expect) {
    this.params = params;
    this.expect = expect;
  }
}
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

module.exports = {
  ListNode,
  TestCase,
};

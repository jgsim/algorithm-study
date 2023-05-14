/**
 * https://leetcode.com/problems/implement-queue-using-stacks/submissions/949341135/
 * Runtime 65 ms Beats 32.97% Memory 42.6 MB Beats 82.21%
 *
 * 문제)
 * 자바스크립트로 큐를 구현
 * push: 큐에 삽입
 * pop: 첫 요소 추출
 * peek: 첫 요소 조회
 * empty: 비어있는지 검사
 *
 * 풀이)
 * 예전과 보일러플레이트 코드가 바뀌었지만 푸는 방식은 동일
 * 두 개의 스택으로 옮겨담기를 통해 뒤집어서 pop
 */

class MyQueue {
  // push 할땐 여기에
  first: number[];
  // pop 할땐 여기에 옮겨서 pop
  second: number[];
  constructor() {
    this.first = [];
    this.second = [];
  }

  push(x: number): void {
    this.first.push(x);
  }

  pop(): number {
    if (!this.second.length) this._reverse();
    return this.second.pop()!; // All the calls to pop and peek are valid.
  }

  peek(): number {
    if (!this.second.length) this._reverse();
    return this.second[this.second.length - 1];
  }

  empty(): boolean {
    return !this.first.length && !this.second.length;
  }

  _reverse() {
    while (this.first.length) {
      const x = this.first.pop();
      x && this.second.push(x);
    }
  }
}

/**
 * https://leetcode.com/problems/implement-queue-using-stacks/
 * Runtime: 115 ms, faster than 5.71% of JavaScript online submissions for Implement Queue using Stacks.
 * Memory Usage: 41.5 MB, less than 98.00% of JavaScript online submissions for Implement Queue using Stacks.
 * shift 매서드의 시간복잡도가 O(n)이다
 * 결론적으로 두 개의 배열로 push pop을 이용하여 구현하라는 말이 된다
 *
 * Runtime: 59 ms, faster than 89.02% of JavaScript online submissions for Implement Queue using Stacks.
 * Memory Usage: 42 MB, less than 62.13% of JavaScript online submissions for Implement Queue using Stacks.
 * 성능이 좀 이상하게 나옴..
 *
 * 문제설명
 * 스택 두개로 선입선출큐를 만들어라
 * push, peek, pop, empty 기능도 구현하라
 *
 * 큐에 들어가는 요소
 * 1 <= x <= 9
 * 각 매서드는 O(1) 으로 설계
 *
 * shift의 시간복잡도를 생각하지 않아 성능이 구려졌다
 * 이참에 주요 배열 매서드 정리해보자
 * O(1): push, pop
 * O(n): unshift, shift
 * https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg
 */

var MyQueue = function () {
  this.queue = [];
  this.queue2 = [];
};

/**
 * 큐에 추가
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * 디큐
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // return this.queue.shift();

  // queue에는 그냥 쌓고, queue2에는 역순으로 쌓이게 해 queue2 에서 pop하면 바로 나오게
  const { queue, queue2 } = this;
  // #1 queue2에 들어 있으면 바로 뽑으면 됨
  if (queue2.length) return queue2.pop();

  // #2 queue2에 채우는 과정
  while (queue.length) {
    queue2.push(queue.pop());
  }
  return queue2.pop();
};

/**
 * 큐 제일 앞의 요소 리턴
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  //return this.queue[0];
  const { queue, queue2 } = this;
  return queue2.length ? queue2[queue2.length - 1] : queue[0];
};

/**
 * 큐 비어있나
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.queue.length && !this.queue2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
var peeked = myQueue.peek(); // return 1
var popped = myQueue.pop(); // return 1, queue is [2]
var isEmpty = myQueue.empty(); // return false
debugger;

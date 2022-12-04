/**
 * https://leetcode.com/problems/design-circular-deque/
 * Runtime: 100 ms, faster than 98.18% of JavaScript online submissions for Design Circular Deque.
 * Memory Usage: 50.1 MB, less than 85.45% of JavaScript online submissions for Design Circular Deque.
 * 살짝 지림
 *
 * 문제설명
 * 순환 디큐 구현
 *
 * 문제에서 제시한 스펙을 제대로 정독하자.. 최대크기 제대로 안보고 했다가 고생함
 * - 제시한 사이즈로 데크 초기화
 * - 하나만 존재할 때 자신을 순환하도록 설계함
 *
 * maximum size: 1 <= k <= 1000
 * value range: 0 <= value <= 1000
 */

var DequeNode = function (k, prev = null, next = null) {
  this.val = k;
  this.prev = prev;
  this.next = next;
};

/**
 * MyCircularDeque(int k) Initializes the deque with a maximum size of k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  // 사이즈 범위 벗어나면 문제에서 제시한 경계값으로 설정했음
  this.size = k < 1 ? 1 : k > 1000 ? 1000 : k;
  // 데크 사이즈 값
  this.length = 0;
  // 포인터 초기화
  this.head = null;
  this.tail = null;
};

/**
 * boolean insertFront() Adds an item at the front of Deque.
 * Returns true if the operation is successful, or false otherwise.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.size <= this.length) return false;

  // 새 노드 생성
  const node = new DequeNode(value, this.tail, this.head);

  this.length++;
  if (this.length === 1) {
    // 빈 공간에 추가 시 스스로 참조하도록
    this.tail = node;
    this.head = node;
    node.next = this.tail;
    node.prev = this.tail;
    return true;
  }
  // 일반적인 케이스, 기존 영향받는 노드 연결관계 업데이트
  this.head.prev = node;
  this.tail.next = node;
  // head 변경
  this.head = node;

  return true;
};

/**
 * boolean insertLast() Adds an item at the rear of Deque.
 * Returns true if the operation is successful, or false otherwise.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.size <= this.length) return false;

  const node = new DequeNode(value, this.tail, this.head);

  this.length++;
  if (this.length === 1) {
    this.head = node;
    this.tail = node;
    node.next = this.head;
    node.prev = this.head;
    return true;
  }
  this.head.prev = node;
  this.tail.next = node;
  this.tail = node;

  return true;
};

/**
 * boolean deleteFront() Deletes an item from the front of Deque.
 * Returns true if the operation is successful, or false otherwise.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  // 지금 노드 이전와 다음을 이어줌, 삭제 대상 노드는 가비지 컬렉션으로 처리되는걸 기대
  const front = this.head;
  // 비어 있다?
  if (!front) {
    return false;
  }

  this.length--;

  if (front === front.next) {
    // 하나이다?
    this.head = null;
    this.tail = null;
    return true;
  }

  // 두개이다?
  // head가 지워지는거니까 다음 노드가 물려받고 tail의 연결관계 업데이트
  const prev = front.prev;
  const next = front.next;
  this.head = next;
  this.head.prev = prev;
  prev.next = this.head;

  return true;
};

/**
 * boolean deleteLast() Deletes an item from the rear of Deque.
 * Returns true if the operation is successful, or false otherwise.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  const last = this.tail;
  if (!last) {
    return false;
  }
  this.length--;
  if (last === last.prev) {
    this.head = null;
    this.tail = null;
    return true;
  }
  const prev = last.prev;
  const next = last.next;
  this.tail = prev;
  this.tail.next = next;
  next.prev = this.tail;
  return true;
};

/**
 * int getFront() Returns the front item from the Deque.
 * Returns -1 if the deque is empty.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.head ? this.head.val : -1;
};

/**
 * int getRear() Returns the last item from Deque.
 * Returns -1 if the deque is empty.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.tail ? this.tail.val : -1;
};

/**
 * boolean isEmpty() Returns true if the deque is empty, or false otherwise.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.length === 0;
};

/**
 * boolean isFull() Returns true if the deque is full, or false otherwise.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.length === this.size;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

// 매서드 별 기본기능 테스트

const insertFrontTest = () => {
  const queue = new MyCircularDeque(4);
  queue.insertFront(1);
  queue.insertFront(2);
  queue.insertFront(3);
  queue.insertFront(4);
  // expect: (1) - 4 - 3 - 2 - 1 - (4)
  console.log("insertFrontTest");
  console.log(queue.head.val === 4);
  console.log(queue.tail.val === 1);
};
const insertLastTest = () => {
  const queue = new MyCircularDeque(4);
  queue.insertLast(1);
  queue.insertLast(2);
  queue.insertLast(3);
  queue.insertLast(4);
  // expect: (4) - 1 - 2 - 3 - 4 - (1)
  console.log("insertLastTest");
  console.log(queue.head.val === 1);
  console.log(queue.tail.val === 4);
  const dict = {
    1: queue.head,
    2: queue.head.next,
    3: queue.head.next.next,
    4: queue.head.next.next.next,
    1: queue.head.next.next.next.next,
    2: queue.head.next.next.next.next.next,
  };
  console.log(Object.entries(dict).every(([k, v]) => Number(k) === v.val));
};
const deleteFrontTest = () => {
  const queue = new MyCircularDeque(3);
  queue.insertLast(1);
  queue.insertLast(2);
  queue.insertLast(3);
  console.log("deleteFrontTest");
  console.log(queue.head.val === 1);
  queue.deleteFront();
  console.log(queue.head.val === 2);
  queue.deleteFront();
  console.log(queue.head.val === 3);
  queue.deleteFront();
  console.log(queue.head == null);
  queue.deleteFront();
  console.log(queue.head == null);
};
const deleteLastTest = () => {
  const queue = new MyCircularDeque(3);
  queue.insertLast(1);
  queue.insertLast(2);
  queue.insertLast(3);
  console.log("deleteLastTest");
  console.log(queue.tail.val === 3);
  queue.deleteLast();
  console.log(queue.tail.val === 2);
  queue.deleteLast();
  console.log(queue.tail.val === 1);
  queue.deleteLast();
  console.log(queue.tail == null);
  queue.deleteLast();
  console.log(queue.tail == null);
};
const getFrontTest = () => {
  console.log("getFrontTest");
  const queue = new MyCircularDeque(3);
  queue.insertFront(1);
  console.log(queue.getFront() === 1);
  queue.insertFront(2);
  console.log(queue.getFront() === 2);
  queue.deleteFront();
  console.log(queue.getFront() === 1);
  queue.deleteFront();
  console.log(queue.getFront() === -1);
};
const getRearTest = () => {
  console.log("getLastTest");
  const queue = new MyCircularDeque(3);
  queue.insertLast(1);
  console.log(queue.getRear() === 1);
  queue.insertLast(2);
  console.log(queue.getRear() === 2);
  queue.deleteLast();
  console.log(queue.getRear() === 1);
  queue.deleteLast();
  console.log(queue.getRear() === -1);
};
const isEmptyTest = () => {
  console.log("isEmptyTest");
  const queue = new MyCircularDeque(3);
  console.log(queue.isEmpty() === true);
  queue.insertFront(1);
  console.log(queue.isEmpty() === false);
};
const isFullTest = () => {
  console.log("isFullTest");
  const queue = new MyCircularDeque(2);
  console.log(queue.isFull() === false);
  queue.insertFront(1);
  queue.insertFront(1);
  console.log(queue.isFull() === true);
};

insertFrontTest();
insertLastTest();
deleteFrontTest();
deleteLastTest();
getFrontTest();
getRearTest();
isEmptyTest();
isFullTest();

// 통과 못한 케이스 모음
// const tcList = [
//   [
//     [
//       "MyCircularDeque",
//       "insertFront",
//       "getFront",
//       "isEmpty",
//       "deleteFront",
//       "insertLast",
//       "getRear",
//       "insertLast",
//       "insertFront",
//       "deleteLast",
//       "insertLast",
//       "isEmpty",
//     ],
//     [[8], [5], [], [], [], [3], [], [7], [7], [], [4], []],
//   ],
// ];
// const q = new MyCircularDeque(8);
// q.insertFront(5);
// q.getFront();
// q.isEmpty();
// q.deleteFront();
// q.insertLast(3);
// q.getRear();
// q.insertLast(7);
// q.insertFront(7);
// q.deleteLast();
// q.insertLast(4);
// q.isEmpty();

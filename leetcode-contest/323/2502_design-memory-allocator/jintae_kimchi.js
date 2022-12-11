/**
 * https://leetcode.com/contest/weekly-contest-323/problems/design-memory-allocator/
 *
 * @param {number} n
 */
var Allocator = function (n) {
  // 메모리 할당 시 인덱스를 요구하므로 하나의 배열에서 관리하는 제약이 있음
  this.memory = new Array(n).fill(null);
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number} 새로 할당한 블록 중 가장 왼쪽 인덱스
 */
Allocator.prototype.allocate = function (size, mID) {
  // 삽입 가능한 빈 공간 찾기
  let len = 0;
  let startIdx = -1;
  for (let i = 0; i < this.memory.length; i++) {
    if (this.memory[i] == null) {
      len += 1;
      if (startIdx === -1) startIdx = i;
    } else if (this.memory[i] != null) {
      len = 0;
      startIdx = -1;
    }
    if (len === size) break;
  }
  if (startIdx === -1) return -1;
  if (len < size) return -1;

  // allocate
  for (let i = startIdx; i < startIdx + size; i++) {
    this.memory[i] = mID;
  }
  return startIdx;
};

/**
 * @param {number} mID
 * @return {number} 아이디 못찾으면 0 리턴
 */
Allocator.prototype.free = function (mID) {
  if (!this.memory.includes(mID)) return 0;
  let cnt = 0;
  for (let i = 0; i < this.memory.length; i++) {
    if (this.memory[i] === mID) {
      this.memory[i] = null;
      cnt += 1;
    }
  }
  return cnt;
};
[
  (function () {
    const obj = new Allocator(5);
    console.log(obj.free(4));
    console.log(obj.allocate(9, 5));
    console.log(obj.allocate(5, 8));
    console.log(obj.allocate(4, 8));
    console.log(obj.allocate(3, 2));
    console.log(obj.free(6));
    console.log(obj.allocate(9, 9));
    console.log(obj.free(6));
    // [null,0,-1,0,-1,-1,0,-1,0]
  })(),
  (function () {
    const obj = new Allocator(10);
    console.log(obj.allocate(1, 1));
    console.log(obj.allocate(1, 2));
    console.log(obj.allocate(1, 3));
    console.log(obj.free(2));
    console.log(obj.allocate(3, 4));
    console.log(obj.allocate(1, 1));
    console.log(obj.allocate(1, 1));
    console.log(obj.free(1));
    console.log(obj.allocate(10, 2));
    console.log(obj.free(7));
    // [null,0,1,2,1,3,1,6,3,-1,0]
  })(),
];
console.log("aa");

/** 
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 * 
 * Input
["Allocator", "allocate", "allocate", "allocate", "free", "allocate", "allocate", "allocate", "free", "allocate", "free"]
[
    [10],       [_, _, _, _, _, _, _, _, _, _,] // 할당
    [1, 1],     [1, _, _, _, _, _, _, _, _, _,] // 0
    [1, 2],     [1, 2, _, _, _, _, _, _, _, _,] // 1
    [1, 3],     [1, 2, 3, _, _, _, _, _, _, _,] // 2
    [2],        [1, _, 3, _, _, _, _, _, _, _,] // 1
    [3, 4],     [1, _, 3, 4, 4, 4, _, _, _, _,] // 3 여기가 이해가 안됨 => 0번 인덱스 부터 연속된 빈 공간 찾아보고 있으면 넣고 없으면 잘라 넣기?
    [1, 1],     [1, 1, 3, 4, 4, 4, _, _, _, _,] // 1 일반적으론 포인터 저장해논 위치에 넣고 일치하는 아이디 있으면 그 뒤에 붙이나?
    [1, 1],     [1, 1, 3, 4, 4, 4, 1, _, _, _,] // 6 근데 아이디 있어도 바로 옆에 자리 없으면? 가장 가까운 인덱스냐 포인터냐
    [1],        [_, _, 3, 4, 4, 4, _, _, _, _,] // 3
    [10, 2],    [_, _, 3, 4, 4, 4, _, _, _, _,] // -1
    [7]         [_, _, 3, 4, 4, 4, _, _, _, _,] // 0
]
Output
[null, 0, 1, 2, 1, 3, 1, 6, 3, -1, 0]
 */

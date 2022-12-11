/**
 * https://leetcode.com/contest/weekly-contest-323/problems/design-memory-allocator/
 * @param {number} n
 */
var Allocator = function (n) {
  this.system = {
    maxSize: n,
    allocated: 0,
    pointer: 0,
  };

  // 메모리 할당 시 인덱스를 요구하므로 하나의 배열에서 관리하는 제약이 있음
  this.memory = new Array(n).fill(null);

  this.canAllocate = (size) => {
    const { allocated, maxSize } = this.system;
    return maxSize - allocated >= size;
  };
  this.setIndex = (idx = 0) => {
    return idx % this.system.maxSize;
  };
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number} 새로 할당한 블록 중 가장 왼쪽 인덱스
 */
Allocator.prototype.allocate = function (size, mID) {
  // 일단 공간 있는지 확인
  if (!this.canAllocate(size)) return -1;

  // 할당위치 설정
  // 기존에 등록된 아이디가 있으면 그 다음 위치
  // 그 다음위치가 비어있지 않거나 최초면 포인터로 할당
  const { memory, system, setIndex } = this;
  // 일단 시작점으로 할당할 아이디의 마지막 인덱스 찾아보기
  const lastIndex = Array.prototype.lastIndexOf.call(this.memory, mID);
  let idx = lastIndex === -1 ? system.pointer : lastIndex;
  // 하지만 원형 배열임을 감안해서 현재 아이디가 어디까지 연속되는지 찾아야 함
  // 근데 마지막 위치를 찾았다 해도 할당 과정에서 중간에 건너뛰는 처리가 필요
  let allocateCnt = size;
  let result = -1;
  while (allocateCnt > 0) {
    if (memory[idx]) {
      // already allocated
      idx = setIndex(idx + 1);
      continue;
    }
    // current first alloc
    if (result === -1) result = idx;
    memory[idx] = mID;
    idx = setIndex(idx + 1);
    allocateCnt -= 1;
  }
  system.allocated += size;
  system.pointer = idx;

  return result;
};

/**
 * @param {number} mID
 * @return {number} 아이디 못찾으면 0 리턴
 */
Allocator.prototype.free = function (mID) {
  if (!this.memory.includes(mID)) return -1;
  let cnt = 0;
  for (let i = 0; i < this.system.maxSize; i++) {
    if (this.memory[i] === mID) {
      this.memory[i] = null;
      cnt += 1;
    }
  }
  this.system.allocated -= cnt;
  return cnt;
};

// const obj = new Allocator(10);
// // obj.allocate(1, 1);
// // obj.allocate(1, 2);
// // obj.allocate(1, 3);
// // obj.free(2);
// // obj.allocate(3, 4);
// // obj.allocate(1, 1);
// // obj.allocate(1, 1);
// // obj.free(1);
// // obj.allocate(10, 2);
// // obj.free(7);
// const result = [
//   obj.allocate(1, 1),
//   obj.allocate(1, 2),
//   obj.allocate(1, 3),
//   obj.free(2),
//   obj.allocate(3, 4),
//   obj.allocate(1, 1),
//   obj.allocate(1, 1),
//   obj.free(1),
//   obj.allocate(10, 2),
//   obj.free(7),
// ];
// console.log(result);

const obj = new Allocator(50);
obj.allocate(12, 6);
obj.allocate(28, 16);
obj.allocate(17, 23);
obj.allocate(50, 23);
obj.free(6);
obj.free(10);
obj.free(10);
obj.allocate(16, 8);
console.log("aa");
// [[50],[12,6],[28,16],[17,23],[50,23],[6],[10],[10],[16,8]
// [[7], [7, 8], [8, 7], [6, 2], [9], [8], [7, 6], [9], [10, 9]];

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
    [2],        [1, _, 3, _, _, _, _, _, _, _,] // 2
    [3, 4],     [1, _, 3, 4, 4, 4, _, _, _, _,] // 3 여기가 이해가 안됨 => 0번 인덱스 부터 연속된 빈 공간 찾아보고 있으면 넣고 없으면 잘라 넣기?
    [1, 1],     [1, 1, 3, 4, 4, 4, _, _, _, _,] // 1 일반적으론 포인터 저장해논 위치에 넣고 일치하는 아이디 있으면 그 뒤에 붙이나?
    [1, 1],     [1, 1, 3, 4, 4, 4, 1, _, _, _,] // 6 근데 아이디 있어도 바로 옆에 자리 없으면? 가장 가까운 인덱스냐 포인터냐
    [1],        [_, _, 3, 4, 4, 4, _, _, _, _,] // 1
    [10, 2],    [_, _, 3, 4, 4, 4, _, _, _, _,] // -1
    [7]         [_, _, 3, 4, 4, 4, _, _, _, _,] // 0
]
Output
[null, 0, 1, 2, 1, 3, 1, 6, 3, -1, 0]
 */

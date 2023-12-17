/**
 * https://leetcode.com/problems/range-sum-query-mutable/description/
 * Runtime 473 ms Beats 100.00% of users with TypeScript
 * Memory 97.46 MB Beats 100.00% of users with TypeScript
 *
 * Medium | Array | Design | Binary Indexed Tree | Segment Tree
 *
 * segment tree 를 구현하는 문제임.
 * prefix sum으로 푸는 건 차선책.
 * O(N) 으로 푸는 건 초보
 */

class NumArray {
  private tree: number[]; // segment tree
  private n: number;
  private arr: number[]; // 원본배열

  constructor(arr: number[]) {
    this.n = arr.length;
    this.arr = arr;
    this.tree = this.buildTree(arr);
  }

  private searchExample(len: number) {
    const searchFn = (idx: number, start: number, end: number) => {
      // found
      if (start === end || start > end) return;
      const mid = Math.floor((start + end) / 2);
      // left
      searchFn(idx * 2, start, mid);
      // right
      searchFn(idx * 2 + 1, mid + 1, end);
    };

    const rootIdx = 1;
    const startIdx = 0;
    const endIdx = len - 1;
    searchFn(rootIdx, startIdx, endIdx);
  }

  private buildTree(arr: number[]): number[] {
    // n ~> 2n 까지 입력값 채움
    // perfect binary tree 만들기위해 4n 개로 생성?
    // 2n으로 만들면 같은 레벨에 존재하지 않을 수 있음
    const n = this.n;
    const tree: number[] = new Array(n * 4).fill(0);

    // 재귀적으로 생성
    // idx: 현재 노드 위치
    // start: 합계 범위 시작
    // end: 합계 범위 끝
    // start ~ end 까지의 합이 현재 노드의 값이라는 의미임
    const build = (idx: number, start: number, end: number): number => {
      // 범위가 하나의 값이면 리프 노드임
      if (start === end) {
        tree[idx] = arr[start];
        return tree[idx];
      }
      // 중간값을 기준으로 범위를 나눠서 왼쪽/오른쪽 노드를 계산하여 현재 노드에 합계 반영
      const mid = Math.floor((start + end) / 2);
      tree[idx] = build(idx * 2, start, mid) + build(idx * 2 + 1, mid + 1, end);
      return tree[idx];
    };
    build(1, 0, n - 1);

    return tree;
  }

  update(index: number, val: number): void {
    const tree = this.tree;
    /**
     * 특정 인덱스의 값과 그에 해당하는 부모노드들 업데이트
     * @param idx 노드 인덱스
     * @param start 시작범위
     * @param end 끝범위
     * @param targetIdx 업데이트 할 인덱스
     * @param diff 업데이트 할 노드의 변화량
     */
    const updateFn = (
      idx: number,
      start: number,
      end: number,
      targetIdx: number,
      diff: number
    ) => {
      // 업데이트 범위를 벗어남
      if (targetIdx < start || targetIdx > end) return;
      // 현재 노드 업데이트
      tree[idx] += diff;
      // 마지막 노드까지 업데이트 대상임
      if (start === end) return;
      // 탐색하며 계속 업데이트
      const mid = Math.floor((start + end) / 2);
      updateFn(idx * 2, start, mid, targetIdx, diff);
      updateFn(idx * 2 + 1, mid + 1, end, targetIdx, diff);
    };
    // diff 계산, 원본배열 업데이트
    const diff = val - this.arr[index];
    this.arr[index] = val;
    // tree 업데이트
    updateFn(1, 0, this.n - 1, index, diff);
  }

  sumRange(left: number, right: number): number {
    const n = this.n;
    const tree = this.tree;
    const sum = (
      idx: number,
      start: number,
      end: number,
      left: number,
      right: number
    ): number => {
      // 범위를 벗어남
      if (end < left || start > right) return 0;
      // 범위 안이면 값 리턴
      if (start >= left && end <= right) return tree[idx];
      // 재귀적으로 탐색
      const mid = Math.floor((start + end) / 2);
      return (
        // left node
        sum(idx * 2, start, mid, left, right) +
        // right node
        sum(idx * 2 + 1, mid + 1, end, left, right)
      );
    };

    return sum(1, 0, n - 1, left, right);
  }
}

/**
 * 문제의도를 파악하지 못한 3분요리 같은 코드
 * Runtime 2657 ms Beats 16.00% of users with TypeScript
 * Memory 99.37 MB Beats 68.00% of users with TypeScript
 */
class NumArray_Dumb {
  arr: number[] = [];
  constructor(nums: number[]) {
    this.arr = nums;
  }

  update(index: number, val: number): void {
    this.arr[index] = val;
  }

  sumRange(left: number, right: number): number {
    let acc = 0;
    for (let i = left; i <= right; i++) {
      acc += this.arr[i];
    }
    return acc;
  }
}

const testFn = () => {
  const narr = new NumArray([0, 9, 5, 7, 3]);
  console.log(narr.sumRange(4, 4));
  console.log(narr.sumRange(2, 4));
  console.log(narr.sumRange(3, 3));
  narr.update(4, 5);
  narr.update(1, 7);
  narr.update(0, 8);
  console.log(narr.sumRange(1, 2));
  narr.update(1, 9);
  console.log(narr.sumRange(4, 4));
  narr.update(3, 4);
};

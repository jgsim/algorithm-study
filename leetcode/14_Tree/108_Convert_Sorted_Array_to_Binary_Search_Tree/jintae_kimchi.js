/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * Runtime: 104 ms, faster than 43.84% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
 * Memory Usage: 44.5 MB, less than 67.44% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
 *
 * 문제설명
 * 오름차순으로 정렬된 배열이 주어진다
 * 이 배열을 높이균형트리로 만들어라
 * 리프노드 위치 때문에 답이 복수개임(반으로 나눴을때 어느 방향을 취하는냐 차이)
 *
 * [-10, -3, 0, 5, 9]
 *  => 가운데가 0
 *
 * [-10, -3] 0 [5, 9]
 * => 나눠진 배열끼리 재귀적으로 진행
 *
 * ([-10] -3 [])    ([5] 9 [])
 * => 짝수개면 오른쪽을 취한다고 했을 때 형태
 *
 * ([] -10 [])     ([] 5 [])
 * => 자식이 없으므로 종료
 *
 * 트리화 결과
 *                 0
 *              /     \
 *            -3       9
 *            /       /
 *         -10       5
 *
 * 시간복잡도: 배열 모든 요소에 대한 탐색을 하므로 O(N)
 * 공간복잡도: 배열 요소만큼 노드를 만들기 때문에 2N => O(N)
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const divider = (leftIdx, rightIdx, arr) => {
    if (leftIdx >= rightIdx) return null;
    // 배열 범위를 주고 가운데를 계산하기 때문에 시작위치만큼 추가하는거 주의
    const mid = Math.floor((rightIdx - leftIdx) / 2) + leftIdx;
    const node = new TreeNode(arr[mid]);
    node.left = divider(leftIdx, mid, arr);
    node.right = divider(mid + 1, rightIdx, arr);
    return node;
  };

  return divider(0, nums.length, nums);
};

// tree serizlizer 만들어야 하나..
const tc1 = sortedArrayToBST([-10, -3, 0, 5, 9]);
debugger;

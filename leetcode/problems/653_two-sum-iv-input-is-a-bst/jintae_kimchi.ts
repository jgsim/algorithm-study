/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
 * Runtime 77 ms Beats 84.31% of users with TypeScript
 * Memory 58.70 MB Beats 90.20% of users with TypeScript
 *
 * easy | Hash Table, Two Pointers, Tree, Depth-First Search, Breadth-First Search, Binary Search Tree, Binary Tree
 *
 * k 값과 특정 노드의 차이를 구하고 그게 트리에 존재하는지 검사하는 것.
 * 모든 노드가 후보가 될 수 있으니 전체 탐색해야 함
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>(); // k 값을 만족하는 후보들을 관리함
  let ans = false;
  const search = (node: TreeNode | null) => {
    if (!node) return;
    if (ans) return;
    // k 값 만족하는 노드 찾으면 종료
    if (set.has(node.val)) {
      ans = true;
      return;
    }
    // 현재 노드로 k 값 만들 수 있는 수를 기록
    set.add(k - node.val);
    // 탐색
    search(node.left);
    search(node.right);
  };
  search(root);
  return ans;
}

// const testRoot = new TreeNode(5);
// testRoot.left = new TreeNode(3);
// testRoot.right = new TreeNode(6);
// testRoot.left.left = new TreeNode(2);
// testRoot.left.right = new TreeNode(4);
// testRoot.right.right = new TreeNode(7);

// runTestCase({
//     solution: findTarget,
//     tcList: [
//         {
//             params: [testRoot, 9],
//             expect: true,
//         },
//         {
//             params: [testRoot, 28],
//             expect: false,
//         },
//     ],
// });

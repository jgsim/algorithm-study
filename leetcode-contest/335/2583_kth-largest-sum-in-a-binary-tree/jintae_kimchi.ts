/**
 * https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/description/
 * Runtime 406 ms Beats 68.18% Memory 85.3 MB Beats 95.45%
 *
 * 깊이 우선 탐색으로 레벨마다 합계 저장하고 k번째 인덱스 값 리턴
 */

/**
 * Definition for a binary tree node.
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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (!root) return -1;
  const sums: number[] = [];

  // bfs
  let currLevel = [root];
  while (currLevel.length) {
    // current level sum
    sums.push(currLevel.reduce((acc, cur) => acc + cur.val, 0));
    // next level
    const nextNodes: TreeNode[] = [];
    currLevel.forEach((n) => {
      if (n.left) nextNodes.push(n.left);
      if (n.right) nextNodes.push(n.right);
    });
    currLevel = nextNodes;
  }

  if (sums.length < k) return -1;
  sums.sort((a, b) => b - a);
  return sums[k - 1];
}

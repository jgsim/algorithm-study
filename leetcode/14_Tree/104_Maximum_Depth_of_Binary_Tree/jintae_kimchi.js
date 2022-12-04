/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Runtime: 76 ms, faster than 78.52% of JavaScript online submissions for Maximum Depth of Binary Tree.
 * Memory Usage: 45.2 MB, less than 49.76% of JavaScript online submissions for Maximum Depth of Binary Tree.
 *
 * 문제설명
 * 이진트리의 루트가 주어지면 최대깊이를 구하라
 *
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
 * so easy~
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;
  if (!root) return max;

  const search = (node, depth) => {
    // 더이상 진행할 노드 없으면 해당 leaf 높이 검사 후 종료
    if (!node.left && !node.right) {
      max = Math.max(max, depth);
      return;
    }
    // 좌, 우 탐색
    if (node.left) {
      search(node.left, depth + 1);
    }
    if (node.right) {
      search(node.right, depth + 1);
    }
  };

  search(root, 1);

  return max;
};

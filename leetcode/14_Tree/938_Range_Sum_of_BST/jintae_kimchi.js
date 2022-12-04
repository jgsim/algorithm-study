/**
 * https://leetcode.com/problems/range-sum-of-bst/
 * Runtime: 234 ms, faster than 64.82% of JavaScript online submissions for Range Sum of BST.
 * Memory Usage: 74.1 MB, less than 83.05% of JavaScript online submissions for Range Sum of BST.
 * ez~
 *
 *
 * 문제설명
 * 이진탐색트리와 두 int 값이 low, high가 주어짐
 * low <= x <= high 범위 내의 노드의 합을 구하라
 *
 * 해결방법
 * 주어진 트리가 이진탐색트리 형태이기 때문에 정렬이 되어 있단 걸 써먹어야 함
 * 문제설명을 보면 inorder 형태
 * Depth First Traversals:
 * (a) Inorder (Left, Root, Right)
 * (b) Preorder (Root, Left, Right)
 * (c) Postorder (Left, Right, Root)
 *
 *             Node
 *         Left    Right
 *          -> Low <= Node <= High 이면 값 추가
 *          -> Left: Low < Node 이면 탐색
 *          -> Right: Node < High 이면 탐색
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
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sums = 0;
  const search = (node) => {
    if (!node) return;
    if (low <= node.val && node.val <= high) sums += node.val;
    low <= node.val && search(node.left);
    node.val <= high && search(node.right);
  };

  search(root);

  return sums;
};

/**
 * https://leetcode.com/problems/leaf-similar-trees/description/
 * Runtime 59 ms Beats 71.16% of users with TypeScript
 * Memory 45.11 MB Beats 55.81% of users with TypeScript
 *
 * easy | tree | DFS
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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const result1: number[] = [];
  const result2: number[] = [];
  const leafSearch = (node: TreeNode | null, bag: number[]) => {
    if (!node) return;
    if (!node.left && !node.right) {
      bag.push(node.val);
      return;
    }
    leafSearch(node.left, bag);
    leafSearch(node.right, bag);
  };
  leafSearch(root1, result1);
  leafSearch(root2, result2);

  if (result1.length != result2.length) return false;
  return result1.every((x, i) => result2[i] === x);
}

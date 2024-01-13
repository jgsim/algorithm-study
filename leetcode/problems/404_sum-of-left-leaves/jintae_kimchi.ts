/**
 * https://leetcode.com/problems/sum-of-left-leaves/description/
 * Runtime 69 ms Beats 18.46% of users with TypeScript
 * Memory 44.48 MB Beats 98.46% of users with TypeScript
 *
 * easy | tree | dps
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;
  const dfs = (node: TreeNode | null, left: boolean) => {
    if (!node) return;
    if (node.left) {
      dfs(node.left, true);
    } else if (left && !node.right) {
      sum += node.val;
    }
    if (node.right) {
      dfs(node.right, false);
    }
  };
  dfs(root, false);

  return sum;
}

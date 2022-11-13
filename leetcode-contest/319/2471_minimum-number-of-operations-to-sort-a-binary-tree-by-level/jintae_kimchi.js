/**
 * https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/
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
 * @return {number}
 */
var minimumOperations = function (root) {
  let count = 0;

  if (!root) return 0;
  const queue = [root];
  const bfs = (queue = []) => {
    while (queue.length) {
      // queue는 현재 레벨의 노드들 목록임
      // 가작 작은거부터 왼쪽에 놓이도록 반복
      for (let i = 0; i < queue.length; i++) {
        const targetNode = queue[i];
        let minNode = null;
        for (let j = i + 1; j < queue.length; j++) {
          if (targetNode.val > queue[j].val) {
            if (!minNode || minNode.val > queue[j].val) {
              minNode = queue[j];
            }
          }
        }
        // swap value
        if (minNode) {
          [targetNode.val, minNode.val] = [minNode.val, targetNode.val];
          count += 1;
        }
      }
      // next nodes
      const nextQueue = [];
      queue.forEach((node) => {
        if (node.left) nextQueue.push(node.left);
        if (node.right) nextQueue.push(node.right);
      });
      queue = nextQueue;
    }
  };
  bfs(queue);

  return count;
};
// 11 min left

minimumOperations(
  new TreeNode(
    1,
    new TreeNode(4, new TreeNode(7), new TreeNode(6)),
    new TreeNode(
      3,
      new TreeNode(8, new TreeNode(9)),
      new TreeNode(5, new TreeNode(10))
    )
  )
);

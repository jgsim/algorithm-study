/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 * mergeTrees_retry
 * Runtime: 159 ms, faster than 25.80% of JavaScript online submissions for Merge Two Binary Trees.
 * Memory Usage: 50.1 MB, less than 58.41% of JavaScript online submissions for Merge Two Binary Trees.
 *
 * mergeTrees
 * Runtime: 177 ms, faster than 12.59% of JavaScript online submissions for Merge Two Binary Trees.
 * Memory Usage: 50.7 MB, less than 10.01% of JavaScript online submissions for Merge Two Binary Trees.
 *
 * 문제설명
 * 이진트리 두개가 주어진다
 * 두 이진트리의 같은 위치 값끼리 더한 트리를 리턴하라
 * [1, 2, 4, 5]
 * [1, , 2, 4, 6]
 * => [2, 2, 6, 9, 6]
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
 * root1 대상으로 머지한 결과 나오도록 수정함
 * 솔루션 코드 참고하였는데 시간복잡도는 다르게 나옴
 * @param {*} root1
 * @param {*} root2
 * @returns
 */
const mergeTrees_retry = (root1, root2) => {
  if (!root1 && !root2) return null;

  const merge = (node1, node2) => {
    // if (!node1 && !node2) return null;
    if (!node1) return node2;
    if (!node2) return node1;

    node1.val = node1.val + node2.val;

    node1.left = merge(node1.left, node2.left);
    node1.right = merge(node1.right, node2.right);

    return node1;
  };

  return merge(root1, root2);
};

/**
 * 새로운 트리를 만들었더니 메모리에서 낮은 점수가 나왔다
 * 그리고 코드에 갈고리가 너무 많아 읽기 힘들다
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  const result = new TreeNode("dummy");

  const merge = (mergeNode, node1, node2) => {
    if (!node1 && !node2) return;
    mergeNode.val = (node1 ? node1.val : 0) + (node2 ? node2.val : 0);
    if (node1?.left || node2?.left) mergeNode.left = new TreeNode();
    if (node1?.right || node2?.right) mergeNode.right = new TreeNode();
    merge(mergeNode.left, node1?.left, node2?.left);
    merge(mergeNode.right, node1?.right, node2?.right);
  };

  merge(result, root1, root2);

  return result;
};

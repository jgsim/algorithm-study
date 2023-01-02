/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * Runtime: 104 ms, faster than 49.45% of JavaScript online submissions for Balanced Binary Tree.
 * Memory Usage: 47.3 MB, less than 54.25% of JavaScript online submissions for Balanced Binary Tree.
 *
 * 문제설명
 * 주어진 트리가 균형잡힌 트리인지 판별하라
 * 균형잡힌 트리란?
 * - 서브트리 깊이 차이가 1이하인 트리
 * 서브트리 깊이 차이는 뭔데요
 * - 노드 기준으로 좌우 자식의 최대 탐색 깊이
 *
 * 정리하면 아래와 같은 형태로 생각할 수 있다
 * 현재노드 깊이 x
 * 왼쪽 최대 깊이 y
 * 오른쪽 최대 깊이 z
 *                   Node, depth: x
 *
 *      Left, maxDepth: y     Right, maxDepth: z
 *
 * x, y, z 값에 따라 판별조건이 3가지로 나뉘어진다
 *
 * if (y, z)
 *    abs(y, z) <= 1
 *
 * if (!y, z)
 *    abs(y - x) <= 1
 *
 * if (y, !z)
 *    abs(y - x) <= 1
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
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  let answer = true;

  // left, right, parent
  const postorder = (node, depth) => {
    if (!answer) return;
    if (!node) return -1;
    const left = postorder(node.left, depth + 1);
    const right = postorder(node.right, depth + 1);

    if (left > -1 && right > -1) {
      if (Math.abs(left - right) > 1) {
        answer = false;
        return;
      }
    } else if (left > -1) {
      if (left - depth > 1) {
        answer = false;
        return;
      }
    } else if (right > -1) {
      if (right - depth > 1) {
        answer = false;
        return;
      }
    }
    return Math.max(depth, left, right);
  };
  postorder(root, 0);

  return answer;
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
const tcList = [
  {
    // [1,2,3,4,5,6,null,8]
    params: [
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5)),
        new TreeNode(3, new TreeNode(6))
      ),
    ],
    expect: true,
  },
  {
    // params: [[3, 9, 20, null, null, 15, 7]],
    params: [
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7))
      ),
    ],
    expect: true,
  },
  {
    // [1,null,2,null,3]
    params: [new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))],
    expect: false,
  },
];
runTestCase(tcList, isBalanced);

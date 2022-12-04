/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Runtime: 127 ms, faster than 64.66% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
 * Memory Usage: 44.8 MB, less than 87.83% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
 *
 * 문제설명
 * 두 배열이 주어지는데 preorder, inorder 형태로 정렬되어 있다
 * 이 배열들로 이진트리를 만들어서 리턴하라
 *
 * 해결방법
 * preorder와 inorder 배열에서 현재 노드를 뽑고 좌우로 가르는 작업을 반복하면 됨
 * 문제에서 중복되는 값은 없다고 보장함
 *
 *
 *              A
 *           /     \
 *          B        C
 *         /  \    /   \
 *        D    E  F     G
 *
 * pre: [A, B, D, E, C, F, G]
 * in : [D, B, E, A, F, C, G] 라고 주어지면,
 *
 *      [A, B, D, E, C, F, G]
 *       ^
 *      [D, B, E, A, F, C, G]
 *                ^
 *      pre의 첫번째 요소 A 가 현재 노드가 됨
 *      in의 A 를 기준으로 좌우로 나눔
 *
 *      [B, D, E, C, F, G]
 *            ~3
 *      [D, B, E] [F, C, G]
 *            ~3
 *      나누어진 in의 길이 기준으로로 나눔
 *      in의 왼쪽이 빈 배열이면 [], [...] 형태가 됨
 *
 *      그럼 좌우로 나뉘어진 다음 파라미터 형태가 됨. 각각 계속 탐색하면 끝
 *      Left            Right
 *      [B, D, E]       [C, F, G]
 *      [D, B, E]       [F, C, G]
 *
 *      ...
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
 * 인덱스 형태로 개선
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (!preorder.length) return null;

  const maker = (node, start, end) => {
    const val = preorder.shift();
    node.val = val;
    const inorderMid = inorder.indexOf(val); // 가르는 기준점

    if (inorderMid > start) {
      node.left = new TreeNode();
      maker(node.left, start, inorderMid); // 처음부터 가운데 전까지
    }
    if (inorderMid < end - 1) {
      node.right = new TreeNode();
      maker(node.right, inorderMid + 1, end); // 가운데 다음부터 끝까지
    }
  };

  const root = new TreeNode(); // 꼬리재귀 회피 목적으로 별도 리턴 없음
  maker(root, 0, preorder.length); // 초기값

  return root;
};

/**
 * 배열조작 때문에 성능망함
 * Runtime: 224 ms, faster than 22.64% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
 * Memory Usage: 136.7 MB, less than 14.60% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree_bad = function (preorder, inorder) {
  if (!preorder.length) return null;
  const root = new TreeNode();
  const maker = (node, preo = [], ino = []) => {
    const val = preo.shift();
    node.val = val;

    // inorder 분리
    const iIdx = ino.indexOf(val);
    const leftI = ino.slice(0, iIdx);
    const rightI = ino.slice(iIdx + 1);

    // preorder 분리
    const leftP = preo.slice(0, leftI.length);
    const rightP = preo.slice(leftI.length);

    if (leftP.length) {
      node.left = new TreeNode();
      maker(node.left, leftP, leftI);
    }
    if (rightP.length) {
      node.right = new TreeNode();
      maker(node.right, rightP, rightI);
    }
  };
  maker(root, preorder, inorder);

  return root;
};

const { runTestCase } = require("../../utils");
const tcList = [
  //   {
  //     params: [
  //       [1, 2, 3],
  //       [3, 2, 1],
  //     ],
  //     expect: [1, 2, null, 3],
  //   },
  {
    params: [
      [3, 9, 20, 15, 7],
      [9, 3, 15, 20, 7],
    ],
    expect: [3, 9, 20, null, null, 15, 7],
  },
];

runTestCase(tcList, buildTree, () => {
  console.log("TODO: bfs 로 배열만들기");
});

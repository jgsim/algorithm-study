/**
 * https://leetcode.com/problems/longest-univalue-path/
 * Runtime: 335 ms, faster than 53.70% of JavaScript online submissions for Longest Univalue Path.
 * Memory Usage: 100.1 MB, less than 17.59% of JavaScript online submissions for Longest Univalue Path.
 *
 * 문제설명
 * 같은 요소 값을 가진 노드들로 이루어진 최대 경로를 구하라
 *
 * ex1
 *      1
 *    2   1
 *          1
 * 1의 경로: 3(0, 2, 6)
 *
 * ex2
 *      1
 *    1   1
 * 1의 경로: 3(1, 0, 2)
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
 * 자력으로 못풀어서 솔루션 찾아봄
 *
 * node 인터페이스를 아래처럼 생각하기
 *
 * val: 현재 노드의 값
 * leftLen, rightLen: 같은 값을 가진 자식 노드의 길이 + 1
 * maxChild: Max(leftLen, rightLen)
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let max = 0;
  if (!root) return max;

  const dfs = (node) => {
    // 종료조건
    if (!node) return 0;

    // 현재 위치 기준 좌측, 우측 탐색 결과: 0 ~ x
    const left = dfs(node.left);
    const right = dfs(node.right);

    // 여기까지 dfs 과정이고 아래에선 각 노드의 dfs 리턴값으로 길이 계산
    // 이 리턴값을 사용하는 과정이 너무 어려워서 구현 실패함
    //-------------------------------------------------

    // 자식 탐색 결과 + 1, 각 노드마다 탐색된 최대값 갱신을 시도함
    let leftCheck = node.left && node.left.val === node.val ? left + 1 : 0;
    let rightCheck = node.right && node.right.val === node.val ? right + 1 : 0;

    // 현재 탐색 위치의 좌우를 더한 길이가 최대인지 검사
    max = Math.max(max, leftCheck + rightCheck);
    // 현재 노드의 left, right 탐색 결과 중 큰 값을 취하여 부모가 사용하게 함
    return Math.max(leftCheck, rightCheck);
  };

  dfs(root);

  return max;
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
const tcList = [
  {
    // params: [5, 4, 5, 1, 1, 5],
    params: [
      new TreeNode(
        5,
        new TreeNode(4, new TreeNode(1), new TreeNode(1)),
        new TreeNode(5, new TreeNode(5))
      ),
    ],
    expect: 2,
  },
];
runTestCase(tcList, longestUnivaluePath);

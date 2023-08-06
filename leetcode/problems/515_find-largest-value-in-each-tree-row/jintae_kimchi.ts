/**
 * https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/
 * Runtime 79 ms Beats 68.18% Memory 48.1 MB Beats 31.82%
 *
 * medium | tree, BFS
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

function largestValues(root: TreeNode | null): number[] {
  if (!root) return []; // 경계값
  const queue = [root]; // 초기값
  const ans: number[] = []; // 결과 배열
  while (queue.length) {
    // 현재 레벨의 노드 목록
    const currentNodes: TreeNode[] = [];
    while (queue.length) {
      const node = queue.pop();
      node && currentNodes.push(node);
    }
    // 현재 레벨 최대값 저장
    ans.push(Math.max(...currentNodes.map((x) => x.val)));

    // 다음 레벨 적용
    currentNodes.forEach((node) => {
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    });
  }
  return ans;
}

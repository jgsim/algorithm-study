/**
 * https://leetcode.com/problems/trim-a-binary-search-tree/description/
 * Runtime 71 ms Beats 35.29% Memory 48.8 MB Beats 41.18%
 *
 * medim | tree
 *
 * 이진탐색트리 구조의 특징을 활용하여 low, high 범위를 벗어나면 한방향을 쳐낼 수 있다.
 * 현재 노드가 유효하지 않으면 자식 노드로 교체해야 하는 부분에서 혼동하여 제한시간 내에 풀지 못하였다.
 * 결과적으로 아래와 같이 간단하게 표현이 가능했다.
 */

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) return null;

  // 현재 노드 기준으로 자식노드에게 트리밍 진행
  // 재귀 구조 상 아래에서 올라오는 형태로 트리밍이 진행됨
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  // 이진탐색트리의 특징을 활용하여 현재, 왼쪽, 오른쪽 노드 중 하나를 리턴
  if (root.val < low) {
    return root.right;
  } else if (root.val > high) {
    return root.left;
  }
  return root;
}

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

/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree/description/
 *
 * Tree | BFS | medium
 *
 * 모든 레벨 중 왼쪽과 오른쪽 간의 간격이 가장 긴 값을 구하라.
 *
 * 개판인 성능으로 풀고 (widthOfBinaryTree_withBigInt)
 * 솔루션 공부해서 다시 품. (widthOfBinaryTree)
 * (DFS 솔루션도 있긴 하지만 넘어감..)
 */

/**
 * Runtime 79 ms Beats 34.78% Memory 47.7 MB Beats 73.91%
 *
 * 일반적인 BFS 솔루션.
 * 레벨마다 1 ~ 2^depth 까지 순서를 매기고 거리를 비교.
 * 원래라면 31 depth 넘어가면 터질 수 있지만 문제에서 오버플로우 제한함
 *  "It is guaranteed that the answer will in the range of a 32-bit signed integer."
 */
function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  root.val = 0;
  let queue = [root];
  let max = 1;
  while (queue.length) {
    const first = queue[0];
    const last = queue[queue.length - 1];
    max = Math.max(max, last.val - first.val + 1);

    const curLen = queue.length;
    const nextQueue: TreeNode[] = [];
    for (let i = 0; i < curLen; i++) {
      const node = queue[i];
      if (node.left) {
        node.left.val = (node.val - first.val) * 2;
        nextQueue.push(node.left);
      }
      if (node.right) {
        node.right.val = (node.val - first.val) * 2 + 1;
        nextQueue.push(node.right);
      }
    }
    queue = nextQueue;
  }

  return max;
}

/**
 * Runtime 120 ms Beats 8.70% Memory 50.9 MB Beats 13.4%
 *
 * 모든 노드에 순서를 부여하여 각 레벨의 처음과 끝의 순서를 비교하여 거리 계산함
 * 깊이가 일정부분 깊어지면 노드번호가 Infinity 값이 되어 bigint 타입으로 계산함.
 * 역시 성능이 엄청 안좋게 나옴
 * @param root
 * @returns
 */
function widthOfBinaryTree_withBigInt(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  root.val = 1;
  const queue: { node: TreeNode; pos: bigint }[] = [
    { node: root, pos: BigInt(1) },
  ];
  let max = 1;
  let depth = 1;
  while (queue.length) {
    const nextQueue: { node: TreeNode; pos: bigint }[] = [];
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      const { node, pos } = item;
      if (node?.left) {
        node.left && nextQueue.push({ node: node.left, pos: pos * BigInt(2) });
      }
      if (node?.right) {
        node.right &&
          nextQueue.push({
            node: node.right,
            pos: pos * BigInt(2) + BigInt(1),
          });
      }
    }
    if (nextQueue.length) {
      const { pos: firstPos } = nextQueue[0];
      const { pos: lastPos } = nextQueue[nextQueue.length - 1];
      max = Math.max(max, Number(lastPos - firstPos) + 1);
    }
    queue.push(...nextQueue);
    depth++;
  }
  return max;
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

////////////////////////////////////////////////////////////////////////
// test cases
////////////////////////////////////////////////////////////////////////

const veryLongDistance = ((node: TreeNode) => {
  let left = node.left;
  let right = node.right;
  for (let i = 0; i < 30; i++) {
    if (left) {
      left.left = new TreeNode(i);
      left = left.left;
    }
    if (right) {
      right.right = new TreeNode(i);
      right = right.right;
    }
  }
  return node;
})(new TreeNode(1, new TreeNode(), new TreeNode()));
const longSingleTree = ((root) => {
  let right = root;
  for (let i = 0; i < 500; i++) {
    root.right = new TreeNode();
    right = root.right;
  }
  right.left = new TreeNode(1);
  right.right = new TreeNode(2);
  return root;
})(new TreeNode());

const tcList = [
  {
    // left-left... 와 right-right... 인 가능한 가장 긴 트리
    params: [veryLongDistance],
    expect: 2147483648,
  },
  {
    // 한줄기로 엄청 길고 마지막이 갈리진 트리
    params: [longSingleTree],
    expect: 2,
  },
  {
    // [1, 3, 2, 5, 3, null, 9];
    params: [
      new TreeNode(
        1,
        new TreeNode(3, new TreeNode(5), new TreeNode(3)),
        new TreeNode(2, null, new TreeNode(9))
      ),
    ],
    expect: 4,
  },
  {
    //[1,3,2,5,null,null,9,6,null,7]
    params: [
      new TreeNode(
        1,
        new TreeNode(3, new TreeNode(5, new TreeNode(6))),
        new TreeNode(2, null, new TreeNode(9, new TreeNode(7)))
      ),
    ],
    expect: 7,
  },
  {
    //[1,3,2,5]
    params: [
      new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2)),
    ],
    expect: 2,
  },
];

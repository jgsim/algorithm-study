# 662. Maximum Width of Binary Tree
# Medium
# https://leetcode.com/problems/maximum-width-of-binary-tree/

from typing import Optional
from collections import deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        max_width = 0
        q = deque([(root, 1)])

        while q:
            max_width = max(max_width, q[-1][1] - q[0][1] + 1)
            for _ in range(len(q)):
                n, i = q.popleft()
                if n.left:
                    q.append((n.left, i * 2))
                if n.right:
                    q.append((n.right, i * 2 + 1))

        return max_width


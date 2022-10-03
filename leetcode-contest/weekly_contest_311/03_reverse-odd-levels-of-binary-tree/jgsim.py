# 2415. Reverse Odd Levels of Binary Tree
# Medium
# https://leetcode.com/contest/weekly-contest-311/problems/reverse-odd-levels-of-binary-tree/

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        nodes = [root]
        level = 1
        while nodes:
            next_nodes = []
            for node in nodes:
                if node.left:
                    next_nodes.append(node.left)
                if node.right:
                    next_nodes.append(node.right)
            nodes = next_nodes
            level += 1
            if level % 2 == 0:
                for i in range(len(nodes) // 2):
                    nodes[i].val, nodes[-(i + 1)].val = nodes[-(i + 1)].val, nodes[i].val
        return root



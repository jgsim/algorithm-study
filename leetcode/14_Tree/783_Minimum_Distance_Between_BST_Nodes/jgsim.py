# 783. Minimum Distance Between BST Nodes
# Easy
# https://leetcode.com/problems/minimum-distance-between-bst-nodes/

from typing import Optional
import sys

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        self.min_dist = 10 ** 5
        self.prev = -10 ** 5

        def inorder(node):
            if node.left:
                inorder(node.left)
            
            self.min_dist = min(self.min_dist, node.val - self.prev)
            self.prev = node.val
            
            if node.right:
                inorder(node.right)
        
        inorder(root)

        return self.min_dist
# 1038. Binary Search Tree to Greater Sum Tree
# Medium
# https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:
        self.val = 0
        def dfs(node: TreeNode):
            if node:
                dfs(node.right)
                self.val += node.val
                node.val = self.val
                dfs(node.left)
        
        dfs(root)

        return root
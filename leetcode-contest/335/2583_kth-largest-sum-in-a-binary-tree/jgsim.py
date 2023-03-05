# 2583. Kth Largest Sum in a Binary Tree
# Medium
# https://leetcode.com/contest/weekly-contest-335/problems/kth-largest-sum-in-a-binary-tree/
from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def kthLargestLevelSum(self, root: Optional[TreeNode], k: int) -> int:
        nodes = [root]
        level_sums = []
        while nodes:
            level_sum = 0
            children = []
            for node in nodes:
                level_sum += node.val
                if node.left:
                    children.append(node.left)
                if node.right:
                    children.append(node.right)
            level_sums.append(level_sum)
            nodes = children
        if len(level_sums) < k:
            return -1
        level_sums.sort(reverse=True)
        return level_sums[k - 1]
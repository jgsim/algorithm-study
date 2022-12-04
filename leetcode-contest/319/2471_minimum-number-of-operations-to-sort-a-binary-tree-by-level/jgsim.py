# 2471. Minimum Number of Operations to Sort a Binary Tree by Level
# medium
# https://leetcode.com/contest/weekly-contest-319/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/


from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def calc_counts(self, nodes):
        nl = [node.val for node in nodes]
        nd = {n: i for i, n in enumerate(nl)}
        count = 0

        for i, n in enumerate(sorted(nl)):
            origin_i = nd[n]
            origin_n = nl[i]
            if i != origin_i:
                count += 1
                nl[i], nl[origin_i] = nl[origin_i], nl[i]
                nd[n], nd[origin_n] = nd[origin_n], nd[n]
        return count

    def minimumOperations(self, root: Optional[TreeNode]) -> int:
        nodes = [root]
        count = 0
        while nodes:
            next_nodes = []
            for node in nodes:
                if node.left:
                    next_nodes.append(node.left)
                if node.right:
                    next_nodes.append(node.right)
            count += self.calc_counts(next_nodes)
            nodes = next_nodes
        return count
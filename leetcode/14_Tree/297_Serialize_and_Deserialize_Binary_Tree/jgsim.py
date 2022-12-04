# 297. Serialize and Deserialize Binary Tree
# Hard
# https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

import collections

# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        Q = collections.deque([root])
        result = []
        while Q:
            node = Q.popleft()
            if node:
                result.append(str(node.val))
                Q.append(node.left)
                Q.append(node.right)
            else:
                result.append('n')

        return ' '.join(result)

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        if data == 'n':
            return None
        
        strs = data.split()

        root = TreeNode(strs[0])
        Q = collections.deque([root])
        idx = 1
        while Q:
            node = Q.popleft()

            if strs[idx] != 'n':
                node.left = TreeNode(strs[idx])
                Q.append(node.left)
            idx += 1

            if strs[idx] != 'n':
                node.right = TreeNode(strs[idx])
                Q.append(node.right)
            idx += 1
        return root




# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
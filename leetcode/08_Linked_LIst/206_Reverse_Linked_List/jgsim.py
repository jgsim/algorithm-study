# 206. Reverse Linked List
# Easy
# https://leetcode.com/problems/reverse-linked-list/

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        rev, node = None, head
        while node:
            node.next, rev, node = rev, node, node.next
        return rev
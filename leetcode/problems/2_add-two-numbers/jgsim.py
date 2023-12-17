# 2. Add Two Numbers
# Medium
# https://leetcode.com/problems/add-two-numbers/description/

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        head = ListNode(None)
        node = head
        while l1 or l2 or carry:
            s = carry
            carry = 0
            if l1:
                s += l1.val
                l1 = l1.next
            if l2:
                s += l2.val
                l2 = l2.next
            if s >= 10:
                s = s % 10
                carry = 1
            node.next = ListNode(s)
            node = node.next
        return head.next
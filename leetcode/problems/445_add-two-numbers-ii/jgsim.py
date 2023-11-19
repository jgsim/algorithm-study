# 445. Add Two Numbers II
# Medium
# https://leetcode.com/problems/add-two-numbers-ii/description/

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        s1, s2 = [], []

        while l1:
            s1.append(l1.val)
            l1 = l1.next
        while l2:
            s2.append(l2.val)
            l2 = l2.next
        
        carry = 0
        head = None

        while s1 or s2 or carry:
            v1, v2 = 0, 0
            if s1: v1 = s1.pop()
            if s2: v2 = s2.pop()

            total = v1 + v2 + carry
            carry = total // 10

            node = ListNode(total % 10)
            node.next = head
            head = node
        
        return head
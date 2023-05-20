# 24. Swap Nodes in Pairs
# Medium
# https://leetcode.com/problems/swap-nodes-in-pairs/

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, node = None, head

        if head and head.next:
            head = head.next
        
        while node and node.next:
            first, second = node, node.next

            second.next, first.next = first, second.next
            if prev:
                prev.next = second
                
            prev, node = first, first.next
        
        return head
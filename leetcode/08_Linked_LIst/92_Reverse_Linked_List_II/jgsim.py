# 92. Reverse Linked List II
# Medium
# https://leetcode.com/problems/reverse-linked-list-ii/

from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if not head or left == right:
            return head
        
        root = start = ListNode(None)
        root.next, idx = head, 1
        while idx < left:
            start = start.next
            idx += 1
        end = start.next

        # 반복하면서 노드 차례로 뒤집기
        while idx < right:
            tmp = start.next
            start.next = end.next
            end.next = end.next.next
            start.next.next = tmp
            idx += 1
        
        return root.next

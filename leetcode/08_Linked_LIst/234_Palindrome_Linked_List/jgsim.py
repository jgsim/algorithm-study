# 234. Palindrome Linked List
# Easy
# https://leetcode.com/problems/palindrome-linked-list/

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        rev: ListNode = None
        slow: ListNode = head
        fast: ListNode = head
        # 런너를 이용해 역순 연결리스트 적용
        while fast and fast.next:
            fast = fast.next.next
            rev, rev.next, slow = slow, rev, slow.next
        if fast:
            slow = slow.next
        
        # Palindrome 여부 확인
        while rev:
            if rev.val != slow.val:
                return False
            rev, slow = rev.next, slow.next
        return True

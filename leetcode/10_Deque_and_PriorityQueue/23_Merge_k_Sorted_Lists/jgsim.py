# 23. Merge k Sorted Lists
# Hard
# https://leetcode.com/problems/merge-k-sorted-lists/

from typing import List, Optional
import heapq

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        root = result = ListNode(None)
        heap: List = []

        # 각 연결 list를 heap에 저장
        for i in range(len(lists)):
            if lists[i]:
                heapq.heappush(heap, (lists[i].val, i, lists[i]))
        
        # 힙 추출 후 다음 노드 저장
        while heap:
            _, i, node = heapq.heappop(heap)
            result.next = node

            result = result.next
            if result.next:
                heapq.heappush(heap, (result.next.val, i, result.next))

        return root.next
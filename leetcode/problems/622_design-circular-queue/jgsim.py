# 622. Design Circular Queue
# Medium
# https://leetcode.com/problems/design-circular-queue/

class MyCircularQueue:

    def __init__(self, k: int):
        self.size = k
        self.front_idx = 0
        self.rear_idx = 0
        self.empty = True
        self.arr = [None] * k

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        if not self.isEmpty():
            self.rear_idx = (self.rear_idx + 1) % self.size
        self.arr[self.rear_idx] = value
        self.empty = False
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        elif self.front_idx == self.rear_idx:
            self.empty = True
        else:
            self.front_idx = (self.front_idx + 1) % self.size
        return True

    def Front(self) -> int:
        return -1 if self.empty else self.arr[self.front_idx]

    def Rear(self) -> int:
        return -1 if self.empty else self.arr[self.rear_idx]

    def isEmpty(self) -> bool:
        return self.empty

    def isFull(self) -> bool:
        full_idx = self.front_idx - 1
        if full_idx < 0:
            full_idx = self.size - 1
        # size 1일경우 예외처리
        return not self.isEmpty() and full_idx == self.rear_idx


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
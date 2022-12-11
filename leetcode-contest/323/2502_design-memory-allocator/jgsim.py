# 2502. Design Memory Allocator
# Medium
# https://leetcode.com/contest/weekly-contest-323/problems/design-memory-allocator/

class Allocator:

    def __init__(self, n: int):
        self.memory = [0] * n

    def allocate(self, size: int, mID: int) -> int:
        start, count, flag = 0, 0, False

        for i in range(len(self.memory)):
            if self.memory[i] == 0:
                count += 1
                if count == size:
                    flag = True
                    break
            else:
                count = 0
                start = i + 1
        
        if flag:
            for i in range(start, start + size):
                self.memory[i] = mID
            return start
        
        return -1

    def free(self, mID: int) -> int:
        count = 0
        for i in range(len(self.memory)):
            if self.memory[i] == mID:
                self.memory[i] = 0
                count += 1
        return count


# Your Allocator object will be instantiated and called as such:
# obj = Allocator(n)
# param_1 = obj.allocate(size,mID)
# param_2 = obj.free(mID)
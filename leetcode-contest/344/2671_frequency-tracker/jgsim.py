# 2671. Frequency Tracker
# Medium
# https://leetcode.com/contest/weekly-contest-344/problems/frequency-tracker/
from collections import defaultdict

class FrequencyTracker:
    def __init__(self):
        self.counter = defaultdict(int)
        self.cache = defaultdict(set)

    def add(self, number: int) -> None:
        if self.counter[number] > 0:
            self.cache[self.counter[number]].remove(number)
        self.counter[number] += 1
        self.cache[self.counter[number]].add(number)

    def deleteOne(self, number: int) -> None:
        if number is None or self.counter[number] == 0:
            return
        self.cache[self.counter[number]].remove(number)
        self.counter[number] -= 1
        if self.counter[number] > 0:
            self.cache[self.counter[number]].add(number)

    def hasFrequency(self, frequency: int) -> bool:
        return bool(self.cache[frequency])


# Your FrequencyTracker object will be instantiated and called as such:
# obj = FrequencyTracker()
# obj.add(number)
# obj.deleteOne(number)
# param_3 = obj.hasFrequency(frequency)

if __name__ == '__main__':
    obj = FrequencyTracker()
    obj.add(1)
    obj.add(1)
    obj.deleteOne(1)
    obj.deleteOne(None)
    obj.deleteOne(1)
    assert obj.hasFrequency(1) == False
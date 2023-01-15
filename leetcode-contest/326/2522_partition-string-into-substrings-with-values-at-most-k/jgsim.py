# 2522. Partition String Into Substrings With Values at Most K
# Medium
# https://leetcode.com/contest/weekly-contest-326/problems/partition-string-into-substrings-with-values-at-most-k/

class Solution:
    def minimumPartition(self, s: str, k: int) -> int:
        start, end, count = 0, 0, 0
        while end < len(s):
            while end+1 < len(s) and int(s[start:end+2]) <= k:
                end += 1
            if int(s[start:end+1]) > k:
                return -1
            count += 1
            end += 1
            start = end
        return count

if __name__ == '__main__':
    s = Solution()
    assert s.minimumPartition("165462", 60) == 4
    assert s.minimumPartition("238182", 5) == -1
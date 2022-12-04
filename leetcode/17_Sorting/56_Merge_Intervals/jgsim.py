# 56. Merge Intervals
# Medium
# https://leetcode.com/problems/merge-intervals/

class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        sorted_intervals = sorted(intervals, key=lambda x: x[0])
        merged = [sorted_intervals[0]]
        for i in range(1, len(intervals)):
            if merged[-1][1] >= sorted_intervals[i][0]:
                if merged[-1][1] < sorted_intervals[i][1]:
                    merged[-1][1] = sorted_intervals[i][1]
            else:
                merged.append(sorted_intervals[i])
        return merged


## test cases
# [[1,3],[2,6],[8,10],[15,18]]
# [[1,4],[4,5]]
# [[1,10],[2,3],[2,5],[3,9]]
# [[1,2]]
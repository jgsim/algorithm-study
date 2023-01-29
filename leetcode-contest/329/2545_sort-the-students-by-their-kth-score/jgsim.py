# 2545. Sort the Students by Their Kth Score
# Medium
# https://leetcode.com/contest/weekly-contest-329/problems/sort-the-students-by-their-kth-score/
from typing import List

class Solution:
    def sortTheStudents(self, score: List[List[int]], k: int) -> List[List[int]]:
        return sorted(score, key=lambda record: record[k], reverse=True)
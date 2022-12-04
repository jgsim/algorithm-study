# 937. Reorder Data in Log Files
# Easy
# https://leetcode.com/problems/reorder-data-in-log-files/
from typing import List


class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        letters: List[str] = []
        digits: List[str] = []

        for log in logs:
            first_content = log.split()[1]
            if first_content.isnumeric():
                digits.append(log)
            else:
                letters.append(log)
        
        letters = sorted(letters, key=lambda log: (log.split()[1:], log.split()[0]))

        return letters + digits
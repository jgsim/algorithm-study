from typing import List

class Solution:
    def hardestWorker(self, n: int, logs: List[List[int]]) -> int:
        counter = [0] * n
        prev_val = 0
        for i in range(len(logs)):
            counter[logs[i][0]] = max(counter[logs[i][0]], logs[i][1] - prev_val)
            prev_val = logs[i][1]

        max_id, max_val = n, -1
        for i in range(n - 1, -1, -1):
            if max_val <= counter[i]:
                max_id = i
                max_val = counter[i]

        return max_id
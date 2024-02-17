# 957. Prison Cells After N Days
# Medium
# https://leetcode.com/problems/prison-cells-after-n-days/

class Solution:
    def prisonAfterNDays(self, cells: List[int], n: int) -> List[int]:
        seen = {}
        while n:
            seen.setdefault(str(cells), n)
            n -= 1
            cells = [0] + [ cells[i-1] ^ cells[i+1] ^ 1 for i in range(1, 7) ] + [0]
            cells_str = str(cells)
            if cells_str in seen:
                n %= seen[cells_str] - n
        return cells
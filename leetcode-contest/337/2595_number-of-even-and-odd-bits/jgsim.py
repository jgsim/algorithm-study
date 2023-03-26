# 2595. Number of Even and Odd Bits
# Easy
# https://leetcode.com/contest/weekly-contest-337/problems/number-of-even-and-odd-bits/
from typing import List


class Solution:
    def evenOddBit(self, n: int) -> List[int]:
        even, odd, idx = 0, 0, 0

        while n > 0:
            if idx % 2:
                odd += n % 2
            else:
                even += n % 2
            n //= 2
            idx += 1
        
        return [even, odd]

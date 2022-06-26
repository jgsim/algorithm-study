# 179. Largest Number
# Medium
# https://leetcode.com/problems/largest-number/


# 책에 나온 솔루션: 하위 5%
# Runtime: 158 ms, faster than 5.05% of Python3 online submissions for Largest Number.
# Memory Usage: 13.9 MB, less than 21.00% of Python3 online submissions for Largest Number.
class Solution_0:
    @staticmethod
    def to_swap(n1: int, n2: int) -> bool:
        return str(n1) + str(n2) < str(n2) + str(n1)

    def largestNumber(self, nums: list[int]) -> str:
        i = 1
        while i < len(nums):
            j = i
            while j > 0 and self.to_swap(nums[j-1], nums[j]):
                nums[j], nums[j-1] = nums[j-1], nums[j]
                j -= 1
            i += 1
        result = ''.join(map(str, nums))
        # "00" 예외처리
        return str(int(result))

# 기존 sorted 함수를 custom compare로 사용
# Runtime: 47 ms, faster than 81.94% of Python3 online submissions for Largest Number.
# Memory Usage: 13.7 MB, less than 97.54% of Python3 online submissions for Largest Number.
from functools import cmp_to_key

class Solution:
    def largestNumber(self, nums: list[int]) -> str:
        def compare(x: str, y: str) -> int:
            if x+y > y+x:
                return -1
            elif x+y == y+x:
                return 0
            else:
                return 1
        
        str_nums = map(str, nums)
        sorted_nums = sorted(str_nums, key=cmp_to_key(compare))
        largest_num = ''.join(sorted_nums)
        return '0' if largest_num[0] == '0' else largest_num
# 169. Majority Element
# Easy
# https://leetcode.com/problems/majority-element/


class Solution:
    def recursive(self, nums: list[int], start: int, end: int) -> int:
        if start == end:
            return nums[start]

        half = (start + end) // 2
        a = self.recursive(nums, start, half)
        b = self.recursive(nums, half + 1, end)
        
        a_count = 0
        for i in range(start, end + 1):
            if nums[i] == a:
                a_count += 1

        return a if a_count > (end - start + 1) // 2 else b

    def majorityElement(self, nums: list[int]) -> int:
        return self.recursive(nums, 0, len(nums) - 1)

    

if __name__ == '__main__':
    s = Solution()
    assert s.majorityElement([3,2,3]) == 3
    assert s.majorityElement([2,2,1,3,1,1,4,1,1,5,1,1,6]) == 1
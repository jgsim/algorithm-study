# 349. Intersection of Two Arrays
# Easy
# https://leetcode.com/problems/intersection-of-two-arrays/


class Solution:
    def bi_search(self, nums: list[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
            else:
                return mid
        return -1
    
    def intersection(self, nums1: list[int], nums2: list[int]):
        nums2.sort()
        result: set[int] = set()

        for n1 in nums1:
            i2 = self.bi_search(nums2, n1)
            if i2 >= 0:
                result.add(n1)
        
        return result


if __name__ == '__main__':
    s = Solution()
    assert s.intersection([1,2,2,1], [2,2]) == set([2])
    assert s.intersection([4,9,5], [9,4,9,8,4]) == set([9, 4])

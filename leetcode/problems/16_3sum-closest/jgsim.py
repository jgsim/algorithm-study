# 16. 3Sum Closest
# medium
# https://leetcode.com/problems/3sum-closest/description/

class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        result = nums[0] + nums[1] + nums[2]

        for i in range(len(nums) - 2):
            left, right = i + 1, len(nums) - 1

            while left < right:
                total = nums[i] + nums[left] + nums[right]
                
                if abs(result - target) > abs(total - target):
                    result = total
                
                if total == target:
                    return target
                elif total > target:
                    right -= 1
                else:
                    left += 1
        
        return result
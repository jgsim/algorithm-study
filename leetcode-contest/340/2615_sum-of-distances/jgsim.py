# 2615. Sum of Distances
# Medium
# https://leetcode.com/contest/weekly-contest-340/problems/sum-of-distances/
from typing import List
from collections import defaultdict

# timeout
class Solution_failed:
    def distance(self, nums: List[int]) -> List[int]:
        D = defaultdict(list)
        for i, num in enumerate(nums):
            D[num].append(i)
        
        ans = [0] * len(nums)
        for i, num in enumerate(nums):
            if len(D[num]) > 1:
                val = 0
                for idx in D[num]:
                    if i == idx:
                        pass
                    val += abs(i - idx)
                ans[i] = val
        return ans
    

class Solution:
    def distance(self, nums: List[int]) -> List[int]:
        D = defaultdict(list)
        for i, num in enumerate(nums):
            D[num].append(i)

        ans = [0] * len(nums)
        for num in D:
            arr, l = D[num], len(D[num])
            if l > 1:
                all_sum = sum(arr)
                left_sum = 0
                for i in range(l):
                    now = arr[i]
                    # left diff sum
                    if i > 0:
                        ans[now] += now * i - left_sum
                    left_sum += now
                    # right diff sum
                    right_sum = all_sum - left_sum
                    if i < l - 1:
                        ans[now] += right_sum - now * (l - i - 1)

        return ans
                    
                    
if __name__ == '__main__':
    s = Solution()
    assert s.distance([1,3,1,1,2]) == [5,0,3,4,0]
    assert s.distance([0,5,3]) == [0,0,0]
    assert s.distance([2,0,2,2,6,5,2]) == [11,0,7,7,0,0,13]
    assert s.distance([0,5,3,1,2,8,6,6,6]) == [0,0,0,0,0,0,3,2,3]
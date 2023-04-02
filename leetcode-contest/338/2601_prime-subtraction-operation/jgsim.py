# 2601. Prime Subtraction Operation
# Medium
# https://leetcode.com/contest/weekly-contest-338/problems/prime-subtraction-operation/
from typing import List

class Solution:
    def primeSubOperation(self, nums: List[int]) -> bool:
        def get_primes(n=1000):
            arr = [True] * (n + 1)
            arr[0] = arr[1] = False
            for i in range(2, n + 1):
                if arr[i]:
                    k = 2
                    while i * k <= n:
                        arr[i * k] = False
                        k += 1
            return [i for i, b in enumerate(arr) if b]
        
        primes = get_primes(max(nums))

        for i in range(len(nums)-1, 0, -1):
            j = 0
            if nums[i] <= nums[i-1]:
                while nums[i] <= nums[i-1] - primes[j] and j < len(primes)-1:
                    j += 1
                nums[i-1] -= primes[j]
                if nums[i-1] >= nums[i] or nums[i-1] < 1:
                    return False

        return True
        

if __name__ == '__main__':
    s = Solution()
    assert s.primeSubOperation([4,9,6,10]) == True
    assert s.primeSubOperation([6,8,11,12]) == True
    assert s.primeSubOperation([5,8,3]) == False
    assert s.primeSubOperation([2,2]) == False
    assert s.primeSubOperation([998,2]) == True

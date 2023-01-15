# 2537. Count the Number of Good Subarrays
# Medium
# https://leetcode.com/contest/weekly-contest-328/problems/count-the-number-of-good-subarrays/
from typing import List
from collections import Counter

# Time Limit Exceeded
class Solution_failed:
    def countGood(self, nums: List[int], k: int) -> int:
        l = len(nums)
        good_subarray_cnt = 0
        for start in range(l):
            for end in range(start, l):
                counter = Counter(nums[start:end+1])
                good_cnt = 0
                for val in counter.values():
                    good_cnt += int(val * (val - 1) / 2)
                if good_cnt >= k:
                    good_subarray_cnt += 1
        return good_subarray_cnt


from collections import defaultdict

# Sliding Window
# https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052586/sliding-window/
class Solution:
    def countGood(self, nums: List[int], k: int) -> int:
        start, end, size = 0, 0, len(nums)
        counter = defaultdict(int)
        combi_cnt, result = 0, 0

        while end < size:
            counter[nums[end]] += 1
            # 숫자 A가 n개 있을경우 페어 갯수  => (n-1)+...+3+2+1
            combi_cnt += counter[nums[end]] - 1 
            while combi_cnt >= k and start < end:
                # 조합의 갯수가 k개 이상인 경우, end 뒤의 부분집합도 모두 해당됨
                result += size - end 
                # 조합 갯수 줄임
                combi_cnt -= counter[nums[start]] - 1
                counter[nums[start]] -= 1
                start += 1
            end += 1
        
        return result


if __name__ == '__main__':
    s = Solution()
    assert s.countGood([1,1,1,1,1], 10) == 1
    assert s.countGood([3,1,4,3,2,2,4], 2) == 4
# 239. Sliding Window Maximum
# Hard
# https://leetcode.com/problems/sliding-window-maximum/

from collections import deque

# Time Limit Exceeded
class Solution_failed:
    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:
        win_q = deque(nums[:k])
        win_max = max(win_q)
        result = [win_max]
        for i in range(k, len(nums)):
            prev = win_q.popleft()
            win_q.append(nums[i])
            if prev == win_max:
                win_max = max(win_q)
            else:
                win_max = max(win_max, nums[i])
            result.append(win_max)
        return result


from collections import deque

# Runtime: 2961 ms, faster than 37.23% of Python3 online submissions for Sliding Window Maximum.
# Memory Usage: 30 MB, less than 64.57% of Python3 online submissions for Sliding Window Maximum.
class Solution:
    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:
        result = []
        bigger = deque()
        for i, n in enumerate(nums):
            # deque 오른쪽의 n보다 작은 값들은 모두 제거(해당 값들은 필요X)
            while bigger and nums[bigger[-1]] < n:
                bigger.pop()
            
            # deque에 index 저장
            bigger.append(i)

            # deque 첫번째 요소가 k 범위 밖이면 제거
            if i - bigger[0] >= k:
                bigger.popleft()
            
            # 인덱스가 window 시작 위치인지 확인 후 최대값 저장
            # bigger의 첫번째 요소는 항상 최대값
            if i + 1 >= k:
                result.append(nums[bigger[0]])
        return result
            


if __name__ == '__main__':
    s = Solution()
    assert s.maxSlidingWindow(nums=[1,3,-1,-3,5,3,6,7], k=3) == [3,3,5,5,6,7]
    assert s.maxSlidingWindow(nums=[1], k=1) == [1]
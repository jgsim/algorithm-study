# 424. Longest Repeating Character Replacement
# Medium
# https://leetcode.com/problems/longest-repeating-character-replacement/

from collections import Counter

# Runtime: 608 ms, faster than 5.78% of Python3 online submissions for Longest Repeating Character Replacement.
# Memory Usage: 14 MB, less than 19.59% of Python3 online submissions for Longest Repeating Character Replacement.
class Solution_slow:
    def characterReplacement(self, s: str, k: int) -> int:
        left = right = 0
        counts = Counter()
        for right in range(1, len(s) + 1):
            counts[s[right - 1]] += 1
            # 가장 많이 등장하는 char 개수 조회
            max_char_n = counts.most_common(1)[0][1]
            
            # 다른 char 개수가 k 초과시 left 이동
            if right - left - max_char_n > k:
                counts[s[left]] -= 1
                left += 1
        # 조건에 맞지 않으면 left, right는 둘다 +1씩 index가 증가하므로 max_len 계산 불필요
        return right - left
            

# Runtime: 176 ms, faster than 69.17% of Python3 online submissions for Longest Repeating Character Replacement.
# Memory Usage: 14 MB, less than 57.73% of Python3 online submissions for Longest Repeating Character Replacement.
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        A_ord = ord('A')
        counts = [0] * 26
        start = maxCount = maxLenth = 0
        for end in range(len(s)):
            end_idx = ord(s[end]) - A_ord
            counts[end_idx] += 1
            maxCount = max(maxCount, counts[end_idx])
            while end - start + 1 - maxCount > k:
                start_idx = ord(s[start]) - A_ord
                counts[start_idx] -= 1
                start += 1
            maxLenth = max(maxLenth, end - start + 1)
        return maxLenth


if __name__ == '__main__':
    s = Solution()
    assert s.characterReplacement('ABAB', 2) == 4
    assert s.characterReplacement('AABABBA', 1) == 4
# 2645. Minimum Additions to Make Valid String
# Medium
# https://leetcode.com/contest/weekly-contest-341/problems/minimum-additions-to-make-valid-string/


d = {
    'a': 0, 'b': 1, 'c': 2
}

# class Solution:
#     def addMinimum(self, word: str) -> int:
#         ans = 0
#         for i, c in enumerate(word):
#             now, expect = d[c], i % 3
#             if now > expect:
#                 ans += now - expect
#             elif now < expect:
#                 ans +=  
#             # while now != expect:
#             #     now = (now + 1) % 3
#             #     ans += 1
#         return ans

class Solution:
    def addMinimum(self, word: str) -> int:
        prev = 2
        ans = 0
        for c in word:
            expect = (prev + 1) % 3
            now = d[c]
            diff = now - expect
            if diff < 0:
                diff += 3
            ans += diff
            prev = now
        ans += 2 - prev
        return ans
    
# 푸는중
        

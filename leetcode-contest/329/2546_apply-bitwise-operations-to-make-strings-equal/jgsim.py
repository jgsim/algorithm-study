# 2546. Apply Bitwise Operations to Make Strings Equal
# Medium
# https://leetcode.com/contest/weekly-contest-329/problems/apply-bitwise-operations-to-make-strings-equal/

# 설명
#    OR XOR
# 11  1  0
# 01  1  1
# 10  1  1
# 00  0  0
# ---
# 11 <-> 10 <-> 01
# ---
# 0000001
# 0000011
# 0000111
# ...
# 1111111
# 1110111
# ...
# 결론은 1이 하나라도 포함되어 있으면,
# 어떤 형태든지 변환이 가능하다.
# ---
# 1. s가 1이 한개이상, t가 1이 한개이상
# 2. s가 1이 한개이상, t가 0만 있음
# 3. t가 1이 한개이상, s가 0만 있음
# 4. s가 0만 있음, t가 0만 있음
# ---
# 11 -> 1
# 10 -> 0
# 01 -> 0
# 00 -> 1
# ---
# not XOR로 볼 수 있다

class Solution:
    def makeStringsEqual(self, s: str, target: str) -> bool:
        s_flag = s.count('1') > 0
        t_flag = target.count('1') > 0
        return not (s_flag ^ t_flag)
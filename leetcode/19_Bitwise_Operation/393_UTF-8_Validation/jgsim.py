# 393. UTF-8 Validation
# Medium
# https://leetcode.com/problems/utf-8-validation/

class Solution:
    def validUtf8(self, data: list[int]) -> bool:
        i = 0
        while i < len(data):
            # check header byte
            byte = data[i]
            count = 0
            while byte & 0b10000000:
                count += 1
                byte <<= 1
            if count == 1 or count > 4:
                return False
            i += 1
            # check content bytes
            if count > 1:
                for _ in range(count - 1):
                    if i > len(data) - 1 or 0b11000000 & data[i] != 0b10000000:
                        return False
                    i += 1
        return True


if __name__ == '__main__':
    s = Solution()
    assert s.validUtf8([197,130,1]) == True
    assert s.validUtf8([235,140,4]) == False
    assert s.validUtf8([255]) == False
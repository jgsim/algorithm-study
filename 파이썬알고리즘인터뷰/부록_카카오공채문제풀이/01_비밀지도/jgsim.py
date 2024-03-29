
# 1: 예외 케이스 추가: zfill

class Solution:
    def secretMap(self, n, arr1, arr2):
        result = []
        for i in range(n):
            v = arr1[i] | arr2[i]
            binStr = bin(v)[2:]
            result.append(
                binStr.zfill(n)
                .replace('0', ' ')
                .replace('1', '#')
            )
        return result


if __name__ == '__main__':
    s = Solution()
    assert s.secretMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]) == ['#####', '# # #', '### #', '#  ##', '#####']
    assert s.secretMap(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]) == ['######', '###  #', '##  ##', ' #### ', ' #####', '### # ']
# 240. Search a 2D Matrix II
# Medium
# https://leetcode.com/problems/search-a-2d-matrix-ii/

class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        if not matrix:
            return False
        x, y = len(matrix[0]) - 1, 0
        while x >= 0 and y < len(matrix):
            if target == matrix[y][x]:
                return True
            # target이 작은경우 왼쪽으로
            elif target < matrix[y][x]:
                x -= 1
            # target이 큰경우 아래쪽으로
            elif target > matrix[y][x]:
                y += 1
        return False

if __name__ == '__main__':
    s = Solution()
    assert s.searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5) == True
    assert s.searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20) == False
    assert s.searchMatrix([[1,1]], 0) == False
    assert s.searchMatrix([], 0) == False
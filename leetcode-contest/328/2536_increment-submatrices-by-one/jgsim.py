# 2536. Increment Submatrices by One
# Medium
# https://leetcode.com/contest/weekly-contest-328/problems/increment-submatrices-by-one/
from typing import List

# Time Limit Exceeded 
class Solution_failed:
    def rangeAddQueries(self, n: int, queries: List[List[int]]) -> List[List[int]]:
        matrix = [[0] * n for i in range(n)]
        
        for row1, col1, row2, col2 in queries:
            for row in range(row1, row2+1):
                for col in range(col1, col2+1):
                    matrix[row][col] += 1
        
        return matrix

# Range Caching
# https://leetcode.com/problems/increment-submatrices-by-one/solutions/3052675/python3-sweep-line-range-addition-with-visualization-clean-concise/
class Solution:
    def rangeAddQueries(self, n: int, queries: List[List[int]]) -> List[List[int]]:
        matrix = [[0] * n for _ in range(n)]

        for row1, col1, row2, col2 in queries:
            for row in range(row1, row2+1):
                matrix[row][col1] += 1
                if col2 + 1 < n :
                    matrix[row][col2 + 1] -= 1
        
        for row in range(n):
            for col in range(1, n):
                matrix[row][col] += matrix[row][col - 1]

        return matrix
                

if __name__ == '__main__':
    s = Solution()
    assert s.rangeAddQueries(3, [[1,1,2,2],[0,0,1,1]]) == [[1,1,0],[1,2,1],[0,1,1]]
    assert s.rangeAddQueries(3, [[1,1,2,2],[0,0,1,1]]) == [[1,1,0],[1,2,1],[0,1,1]]

    assert s.rangeAddQueries(13, [[3,1,7,3],[7,5,7,8],[4,12,6,12],[2,8,6,11],[9,11,10,11],[9,3,11,11],[0,12,10,12],[10,5,11,12],[4,7,6,12],[0,2,9,6],[12,7,12,11],[2,7,3,8],[2,9,6,12],[10,7,10,12],[11,6,11,7],[3,2,12,9]]) == [[0,0,1,1,1,1,1,0,0,0,0,0,1],[0,0,1,1,1,1,1,0,0,0,0,0,1],[0,0,1,1,1,1,1,1,2,2,2,2,2],[0,1,3,3,2,2,2,2,3,3,2,2,2],[0,1,3,3,2,2,2,2,3,4,3,3,4],[0,1,3,3,2,2,2,2,3,4,3,3,4],[0,1,3,3,2,2,2,2,3,4,3,3,4],[0,1,3,3,2,3,3,2,2,1,0,0,1],[0,0,2,2,2,2,2,1,1,1,0,0,1],[0,0,2,3,3,3,3,2,2,2,1,2,1],[0,0,1,2,2,3,3,4,4,4,3,4,3],[0,0,1,2,2,3,4,4,3,3,2,2,1],[0,0,1,1,1,1,1,2,2,2,1,1,0]]
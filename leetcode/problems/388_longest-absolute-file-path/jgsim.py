# 388. Longest Absolute File Path
# Medium
# https://leetcode.com/problems/longest-absolute-file-path

class Solution:
    def lengthLongestPath(self, input: str) -> int:
        stack = []
        res = 0
        for line in input.split('\n'):
            tabs = 0
            while line[tabs] == '\t':
                tabs += 1
            name = line[tabs:]
            while len(stack) > tabs:
                    stack.pop()
            if '.' in name:
                dir_path = '/'.join(stack)
                res = max(res, len(dir_path) + len(name) + 1 if len(stack) > 0 else len(name))
                print(dir_path+'/'+name)
            else:
                stack.append(name)
        return res
    
'''
# 예외 케이스
file1.txt\nfile2.txt\nlongfile.txt -> root 디렉토리가 없는거 예외처리
dir\n        file.txt -> 파일의 경우에는 stack pop 안해서 생김
'''
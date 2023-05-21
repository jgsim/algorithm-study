# 551. Student Attendance Record I
# Easy
# https://leetcode.com/problems/student-attendance-record-i/

class Solution:
    def checkRecord(self, s: str) -> bool:
        absent_cnt = 0
        late_cnt = 0
        prev = None
        for c in s:
            if prev != 'L':
                late_cnt = 0
                
            if c == 'L':
                late_cnt += 1
            elif c == 'A':
                absent_cnt += 1
            
            if absent_cnt >= 2:
                return False
            if late_cnt >= 3:
                return False
            prev = c
            
        return True
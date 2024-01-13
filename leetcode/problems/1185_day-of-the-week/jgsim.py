# 1185. Day of the Week
# Easy
# https://leetcode.com/problems/day-of-the-week/description/

from datetime import datetime

weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

class Solution:
    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
        dt = datetime(year, month, day)
        return weeks[dt.weekday()]
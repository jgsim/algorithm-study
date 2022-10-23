from typing import List
from datetime import datetime, time

class Solution:
    def get_time(self, s: str) -> time:
        return datetime.strptime(s, "%H:%M").time()

    def haveConflict(self, event1: List[str], event2: List[str]) -> bool:
        t1 = (self.get_time(event1[0]), self.get_time(event1[1]))
        t2 = (self.get_time(event2[0]), self.get_time(event2[1]))
        if t2[0] > t1[0]:
            return t1[1] >= t2[0]
        else:
            return t2[1] >= t1[0]


# test case
# ["01:15","02:00"]
# ["02:00","03:00"]
# ["01:00","02:00"]
# ["01:20","03:00"]
# ["10:00","11:00"]
# ["14:00","15:00"]
# ["14:13","22:08"]
# ["02:40","08:08"]
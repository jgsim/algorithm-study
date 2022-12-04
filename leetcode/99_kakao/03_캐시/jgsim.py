from collections import deque, defaultdict

# 1: city를 대/소문자 구분하지 않게 변경

class Solution:
    def cacheTime(self, cacheSize, cities):
        dict, queue = defaultdict(int), deque()
        time = 0
        for city in cities:
            city = city.lower()
            if len(queue) > cacheSize:
                del_city = queue.popleft()
                dict[del_city] -= 1

            if dict[city] > 0:
                time += 1
            else:
                time += 5

            dict[city] += 1
            queue.append(city)
        
        return time


if __name__ == '__main__':
    s = Solution()
    assert s.cacheTime(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']) == 50
    assert s.cacheTime(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']) == 21
    assert s.cacheTime(2, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']) == 60
    assert s.cacheTime(5, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']) == 52
    assert s.cacheTime(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']) == 16
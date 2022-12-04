# 787. Cheapest Flights Within K Stops
# Medium
# https://leetcode.com/problems/cheapest-flights-within-k-stops/

import collections
import heapq

# 다익스트라 알고리즘 응용(오답)
# 제출시 Time Limit Exceeded
class FailedSolution:
    def findCheapestPrice(self, n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:
        # 인접 리스트 그래프 구성
        graph = collections.defaultdict(list)
        for from_city, to_city, price in flights:
            graph[from_city].append((to_city, price))
        
        # 큐 변수: [(price, city, remain_k)]
        Q = [(0, src, k)]

        # 우선순위 큐 최솟값 기준으로 도착점까지 최소 비용 판별
        while Q:
            price, city, k = heapq.heappop(Q)
            if city == dst:
                return price
            if k >= 0:
                for to_city, next_price in graph[city]:
                    sum = price + next_price
                    heapq.heappush(Q, (sum, to_city, k - 1))
        
        return -1


# 가지치기 구현 추가
class Solution:
    def findCheapestPrice(self, n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:
        # 인접 리스트 그래프 구성
        graph = collections.defaultdict(list)
        for from_city, to_city, price in flights:
            graph[from_city].append((to_city, price))
        
        # 큐 변수: [(price, city, remain_k)]
        Q = [(0, src, k + 1)]
        visited = [0] * n
        # 우선순위 큐 최솟값 기준으로 도착점까지 최소 비용 판별
        while Q:
            price, city, remain_k = heapq.heappop(Q)
            if city == dst:
                return price
            # 이전에 방문한 경로가 더 효율적이므로 pass
            if visited[city] >= remain_k:
                continue
            # city에 도달하기 위한 나머지 단계 기록
            visited[city] = remain_k
            if remain_k > 0:
                for to_city, next_price in graph[city]:
                    sum = price + next_price
                    heapq.heappush(Q, (sum, to_city, remain_k - 1))

        return -1
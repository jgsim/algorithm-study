# 207. Course Schedule
# Medium
# https://leetcode.com/problems/course-schedule/

import collections

# DFS로 순환 구조 판별(오답)
# 제출시 Time Limit Exceeded
class FailedSolution:
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:
        # 그래프 구성
        graph = collections.defaultdict(list)
        for x, y in prerequisites:
            graph[x].append(y)
        
        traced = set()
        def dfs(x: int):
            # 순환 구조시 False
            if x in traced:
                return False
            traced.add(x)
            # 경로 조회
            for y in graph[x]:
                if not dfs(y):
                    return False
            # 탐색 종료 후 순환 노드 삭제
            traced.remove(x)

            return True
        
        # 주어진 경로를 각각 dfs 조회
        for x in list(graph.keys()):
            if not dfs(x):
                return False
        
        return True
        

# 가지치기를 위한 최적화
class Solution:
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:
        # 그래프 구성
        graph = collections.defaultdict(list)
        for x, y in prerequisites:
            graph[x].append(y)
        
        traced = set()
        visited = set()

        def dfs(x: int):
            # 순환 구조시 False
            if x in traced:
                return False
            # 이미 방문했던 노드이면 True
            if x in visited:
                return True
            # 경로 조회
            traced.add(x)
            for y in graph[x]:
                if not dfs(y):
                    return False
            # 탐색 종료 후 순환노두 삭제, 방문 노드 추가
            traced.remove(x)
            visited.add(x)

            return True
        
        # 주어진 경로를 각각 dfs 조회
        for x in list(graph.keys()):
            if not dfs(x):
                return False
        
        return True
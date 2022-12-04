import datetime

class Solution:
    def get_traffic(self, lines: str) -> int:
        # 로그의 시작/종료 시각 저장, 1: 시작, -1: 종료
        combined_logs = []
        for log in lines:
            logs = log.split()
            timestamp = datetime.datetime.strptime(f'{logs[0]} {logs[1]}', \
                '%Y-%m-%d %H:%M:%S.%f').timestamp()
            combined_logs.append((timestamp, -1))
            combined_logs.append((timestamp - float(logs[2][:-1]), 1))
        
        accumulated = 0
        max_requests = 1
        combined_logs.sort(key=lambda x: x[0])
        for i, elem1 in enumerate(combined_logs):
            current = accumulated

            # 1초 미만 윈도우 범위 요청 수 계산
            for elem2 in combined_logs[i:]:
                if elem2[0] - elem1[0] > 0.999:
                    break
                if elem2[1] > 0:
                    current += elem2[1]
            
            max_requests = max(max_requests, current)
            accumulated += elem1[1]
        return max_requests

if __name__ == '__main__':
    s = Solution()
    assert s.get_traffic(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s']) == 1
    assert s.get_traffic(['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s']) == 2
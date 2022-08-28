from collections import Counter, defaultdict

# 1: 집합원소 만들때, s를 미리 알파벳만 필터링 하여 오답 -> 집합원소를 만들고 필터링으로 변경
# 2: union이 0일때 예외 처리 안함 -> 추가

class Solution:
    def get_counter_dict(self, s: str):
        targets = []
        for i in range(len(s) - 1):
            part = s[i] + s[i+1]
            if part.isalpha():
                targets.append(part.lower())
        counter = Counter(targets)
        return defaultdict(int, counter)
    
    def newsClustering(self, str1: str, str2: str) -> int:
        dict1, dict2 = self.get_counter_dict(str1), self.get_counter_dict(str2)
        union = inters = 0
        for target in dict1:
            union += max(dict1[target], dict2[target])
            inters += min(dict1[target], dict2[target])
        for target in dict2:
            if dict1[target] == 0:
                union += dict2[target]
        jaccard_val = 1 if union == 0 else inters / union
        return int(jaccard_val * 65536)


if __name__ == '__main__':
    s = Solution()
    assert s.newsClustering('FRANCE', 'french') == 16384
    assert s.newsClustering('handshake', 'shake hands') == 65536
    assert s.newsClustering('aa1+aa2', 'AAAA12') == 43690
    assert s.newsClustering('E=M*C^2', 'e=m*c^2') == 65536
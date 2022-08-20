from collections import Counter, defaultdict

class Solution:
    def get_counter_dict(self, s: str):
        cleared = [c for c in s.lower() if c.isalpha()]

        targets = []

        for i in range(len(cleared) - 1):
            targets.append(cleared[i] + cleared[i+1])

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
        return int(inters / union * 65536)




        


if __name__ == '__main__':
    s = Solution()
    print(s.newsClustering('FRANCE', 'french'))
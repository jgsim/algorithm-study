from typing import List

class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        result = [5]
        for i in range(1, len(pref)):
            print(result[i - 1], pref[i], result[i - 1] ^ pref[i])
            result.append(result[i - 1] ^ pref[i])
        return result
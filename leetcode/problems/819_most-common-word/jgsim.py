# 819. Most Common Word
# Easy
# https://leetcode.com/problems/most-common-word/

from typing import List
from collections import Counter

symbols = set(['!','?',"'",',',';','.',' '])

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        l = len(paragraph)
        left, right = 0, 0
        ban = set(banned)
        counter = Counter()
        while right <= l:
            if right == l or paragraph[right] in symbols:
                if right > left:
                    word = paragraph[left : right].lower()
                    if word not in ban:
                        counter[word] += 1
                left = right + 1
            right += 1
        
        return counter.most_common()[0][0]
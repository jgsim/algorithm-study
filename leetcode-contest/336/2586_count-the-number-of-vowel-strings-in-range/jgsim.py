# 2586. Count the Number of Vowel Strings in Range
# Easy
# https://leetcode.com/contest/weekly-contest-336/problems/count-the-number-of-vowel-strings-in-range/

from typing import List

class Solution:
    def vowelStrings(self, words: List[str], left: int, right: int) -> int:
        vowels = {'a', 'e', 'i', 'o', 'u'}
        count = 0
        for i in range(left, right + 1):
            word = words[i]
            if word[0] in vowels and word[-1] in vowels:
                count += 1
        return count
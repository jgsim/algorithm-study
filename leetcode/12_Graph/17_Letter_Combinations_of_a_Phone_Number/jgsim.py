# 17. Letter Combinations of a Phone Number
# Medium
# https://leetcode.com/problems/letter-combinations-of-a-phone-number/

from typing import List

letters = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
}

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        def search(i: int, s: str, l: List[str]):
            if i == len(digits):
                l.append(s)
                return
            
            num = digits[i]
            for letter in letters[num]:
                search(i + 1, s + letter, l)
        
        # 예외처리
        if len(digits) == 0:
            return [] 

        result = []
        search(0, "", result)
        return result
# 336. Palindrome Pairs
# Hard
# https://leetcode.com/problems/palindrome-pairs/
import collections

class TrieNode:
    def __init__(self) -> None:
        # word_id가 있는경우 단어의 끝
        self.word_id = -1
        # node마다 palindrome인경우 id 저장
        self.palindrome_word_ids = []
        self.children = collections.defaultdict(TrieNode)

class Trie:
    def __init__(self) -> None:
        self.root = TrieNode()
    
    @staticmethod
    def is_palindrome(word: str) -> bool:
        return word[::] == word[::-1]

    # palinedrome 체크 로직상 역으로 trie를 만들 필요 있음
    def insert(self, index: int, word: str):
        node = self.root
        # insert시 index마다 자기 자신의 plaindrome 여부 체크: 서로 길이가 다른 str 비교시 필요함
        for i ,char in enumerate(reversed(word)):
            if self.is_palindrome(word[0:len(word) - i]):
                node.palindrome_word_ids.append(index)
            node = node.children[char]
        node.word_id = index
    
    def search(self, index: int, word: str) -> list[list[int]]:
        result = []
        node = self.root

        # 탐색 중간에 word_id가 있고, 나머지 word가 palindrome인 경우
        # Trie자료 구조 특성상 앞부분이 동일하고 짧은 string의 경우 고려
        while word:
            if node.word_id >= 0:
                if self.is_palindrome(word):
                    result.append([index, node.word_id])
            if not word[0] in node.children:
                return result
            node = node.children[word[0]]
            word = word[1:]
        
        # Trie를 끝까지 탐색(word_id가 있음)하는 경우
        # 비교 대상이 reverse하면 동일한 상태
        if node.word_id >= 0 and node.word_id != index:
            result.append([index, node.word_id])

        # 끝까지 탐색 했을때 palindrome_word_ids가 있는경우
        # 탐색 대상(word)보다 길이가 긴데, 나머지가 palindrome
        for palindrome_word_id in node.palindrome_word_ids:
            result.append([index, palindrome_word_id])
        
        return result

class Solution:
    def palindromePairs(self, words: list[str]) -> list[list[int]]:
        trie = Trie()

        for i, word in enumerate(words):
            trie.insert(i, word)
        
        results = []
        for i, word in enumerate(words):
            results.extend(trie.search(i, word))
        
        return results
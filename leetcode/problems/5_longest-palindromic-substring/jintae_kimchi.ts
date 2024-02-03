/**
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 * Runtime 71 ms Beats 91.53% of users with TypeScript
 * Memory 54.04 MB Beats 25.35% of users with TypeScript
 *
 * medium | string | dp
 */

function longestPalindrome(s: string): string {
  // 현재 인덱스 기준으로 회문 최대길이 계산
  const expand = (s: string, left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right]; // +1 주의
  };

  // 최대길이와 시작 인덱스를 저장
  let maxLen = 0;
  let maxIdx = 0;

  // 각 문자를 기준으로 회문검사
  for (let i = 0; i < s.length; i++) {
    // 홀수, 짝수에 따라 따로 진행 (_a_, _aa_)
    const [oddLeft, oddRight] = expand(s, i, i);
    const oddRange = oddRight - oddLeft;
    if (oddRange > maxLen) {
      maxLen = oddRange;
      maxIdx = oddLeft;
    }
    const [evenLeft, evenRight] = expand(s, i, i + 1);
    const evenRange = evenRight - evenLeft;
    if (evenRange > maxLen) {
      maxLen = evenRange;
      maxIdx = evenLeft;
    }
  }

  return s.substring(maxIdx, maxIdx + maxLen);
}

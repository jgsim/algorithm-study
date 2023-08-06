/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 * Runtime 66 ms Beats 97.34% Memory 48.4 MB Beats 87.7%
 *
 * easy | two pointers
 */

function reverseVowels(s: string): string {
  // 모음 set 준비
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const arr = s.split(""); // 배열화
  // 초기 좌/우 인덱스 설정
  let left = 0;
  let right = arr.length - 1;
  for (; left < right; ) {
    const leftCh = arr[left];
    const rightCh = arr[right];
    const leftIsVowel = vowels.has(leftCh);
    const rightIsVowel = vowels.has(rightCh);
    if (leftIsVowel && rightIsVowel) {
      // 둘 다 모음일 때 교환
      const tmp = leftCh;
      arr[left] = rightCh;
      arr[right] = tmp;
    } else if (leftIsVowel) {
      left--;
    } else if (rightIsVowel) {
      right++;
    }
    left++;
    right--;
  }

  return arr.join("");
}

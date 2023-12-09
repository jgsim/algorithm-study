/**
 * https://leetcode.com/problems/buddy-strings/description/
 * Runtime 58ms Beats 75.56% of users with TypeScript
 * Memory 44.66MB Beats 73.33%of users with TypeScript
 *
 * Easy | string | hash table
 *
 * timeover 💀
 */

function buddyStrings(s: string, goal: string): boolean {
  const n = s.length;
  // 같은 길이가 아니면 성립하지 않음
  if (n !== goal.length) return false;

  // 같은 값일 땐 중복문자가 있어야 성립함
  if (s === goal) {
    const dict: { [k: string]: number } = {};
    for (let i = 0; i < n; i++) {
      const ch = s[i];
      if (dict[ch]) {
        // aabb, aabb
        return true;
      } else {
        dict[ch] = 1;
      }
    }
    // abc, abc
    return false;
  }

  // 일반적인 경우 다른 문자가 2개여야 함
  // 1234, 2143 같은 케이스가 있으므로 끝까지 순회해야 함
  const diff: any[] = [];
  for (let i = 0; i < n; i++) {
    if (s[i] !== goal[i]) {
      diff.push([s[i], goal[i]]);
    }
  }

  return (
    diff.length === 2 && diff[0][0] === diff[1][1] && diff[0][1] === diff[1][0]
  );
}
const tcList = [
  {
    params: ["abab", "abab"],
    expect: true,
  },
  {
    params: ["abcd", "badc"],
    expect: false,
  },
  {
    params: ["ab", "ba"],
    expect: true,
  },
  {
    params: ["ab", "ab"],
    expect: false,
  },
  {
    params: ["aa", "aa"],
    expect: true,
  },
  {
    params: ["abcd", "abcd"],
    expect: false,
  },
  {
    params: ["aaa", "aaa"],
    expect: true,
  },
  {
    params: ["aaba", "aaab"],
    expect: true,
  },
];

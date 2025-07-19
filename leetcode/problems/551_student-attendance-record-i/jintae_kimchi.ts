/**
 * https://leetcode.com/problems/student-attendance-record-i/
 * Runtime 59 ms Beats 52.94% Analyze Complexity Memory 51.47 MB Beats 56.47%
 * 처음 풀이는 정규식으로 했지만 replace 가 내부적으로 문자열을 만든다고 함
 */
function checkRecord(s: string): boolean {
  if (s.includes("LLL")) return false;
  let absent = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      absent++;
      if (absent === 2) return false;
    }
  }
  return true;
}
function checkRecord_regex(s: string): boolean {
  if (s.includes("LLL")) return false;
  const totalAbsent = s.replace(/[^A]/g, "");
  return totalAbsent.length < 2;
}

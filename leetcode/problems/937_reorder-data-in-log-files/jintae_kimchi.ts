/**
 * https://leetcode.com/problems/reorder-data-in-log-files/description/
 * Runtime Details 56ms Beats 92.00%of users with TypeScript
 * Memory Details 45.06MB Beats 76.00%of users with TypeScript
 *
 * medium | array | string | sorting
 *
 * 커스텀 정렬을 구현하는 문제
 */
function reorderLogFiles(logs: string[]): string[] {
  // 먼저, 문자 로그와 숫자 로그를 분리시킴
  const strLogs: string[] = [];
  const numLogs: string[] = [];
  logs.forEach((log) => {
    for (let i = 0; i < log.length; i++) {
      if (log[i] === " ") {
        if (log[i + 1].match(/[0-9]/g)) {
          numLogs.push(log);
        } else {
          strLogs.push(log);
        }
        break;
      }
    }
  });

  // 문자로그의 경우 문제에서 제시한 조건으로 정렬함
  strLogs.sort((a, b) => {
    const idxA = a.indexOf(" ");
    const strA = a.substring(idxA + 1);

    const idxB = b.indexOf(" ");
    const strB = b.substring(idxB + 1);

    if (strA === strB) {
      const idA = a.substring(0, idxA);
      const idB = b.substring(0, idxB);
      return idA < idB ? -1 : 1;
    }
    return strA < strB ? -1 : 1;
  });

  // 문자로그, 숫자로그 순으로 리턴
  return [...strLogs, ...numLogs];
}

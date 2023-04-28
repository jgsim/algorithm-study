/**
 * https://app.codility.com/demo/results/trainingW5H7FV-8CS/
 * Task Score 100% Correctness 100%
 *
 * 문제)
 * N 이라는 정수가 주어짐
 * 이것을 이진수로 만들고 1과 1 사이에 0이 포함된 케이스 중 가장 긴 0의 길이를 구해야 함
 * 예) 1001 => 2, 10010001 => 3, 1001000 => 2
 *
 * 풀이)
 * 정수를 이진수 문자열로 변환한 다음 1을 기준으로 배열로 나눔
 * 배열 요소의 길이가 각각의 0 길이가 됨
 * 단, 101000 같은 케이스는 0, 000 인데 000이 1로 끝나지 않으므로 양끝이 1인지 확인하는 처리가 필요
 * 풀고나니 왼쪽의 첫번째 자리는 항상 1이라 오른쪽만 고려했어도 됨
 */

function solution(N: number): number {
  const binStr = N.toString(2);
  const binArr = binStr.split("1");
  //   const hasLeft = binStr[0] === "1";
  const hasRight = binStr[binStr.length - 1] === "1";
  let max = 0;
  binArr.forEach((str, idx) => {
    // if (idx === 0 && !hasLeft) return;
    if (idx === binArr.length - 1 && !hasRight) return;
    max = Math.max(max, str.length);
  });
  return max;
}

// runTestCase<unknown, unknown>({
//     tcList: [
//       {
//         params: [16 + 256 + 2048], // 100100010000
//         expect: 3,
//       },
//       {
//         params: [8], // 1000
//         expect: 0,
//       },
//       {
//         params: [529], // 1000010001
//         expect: 4,
//       },
//     ],
//     solution: solution,
//   });

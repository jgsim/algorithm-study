/**
 * https://leetcode.com/problems/remove-k-digits/description/
 * Runtime 70 ms Beats 75.86% Complexity Memory 56.82 MB Beats 82.76%
 *
 * 솔루션을 참고해서 풀었지만 이런 발상이 가능할지는..
 */

function removeKdigits(num: string, k: number): string {
  const stack: string[] = [];
  // 순회하면서 가장 작은 값을 찾기
  for (let i = 0; i < num.length; i++) {
    const val = num[i];
    /**
     * 이전값보다 작은 값을 찾으면 교체하기 위해 최대 k번까지 제거할 수 있음(k가 남을 수 있다)
     * 54321, 2:
     * [5], 2
     * [4], 1
     * [3], 0
     * [3, 2], 0
     * [3, 2, 1], 0
     *
     * 15243, 3:
     * [1], 3
     * [1, 5], 3
     * [1, 2], 2
     * [1, 2, 4], 2
     * [1, 2, 3], 1
     * 남은 k 만큼 뒤를 정리하면..
     * [1, 2]
     *
     * 12345067, 2
     * [1], 2
     * [1, 2], 2
     * [1, 2, 3, 4, 5], 2
     * [1, 2, 3, 4], 1
     * [1, 2, 3], 0
     * [1, 2, 3, 0], 0
     * [1, 2, 3, 0, 6], 0
     * [1, 2, 3, 0, 6, 7], 0
     */
    while (k > 0 && stack.length && val < stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    // 기본적으로 루프는 계속 넣는 동작을 함
    stack.push(val);
  }
  stack.length = stack.length - k; // 남은 k만큼 뒷자리 정리

  // 앞자리 0 제거(정규식 없이 한다면)
  let startIdx = 0;
  for (; stack[startIdx] === "0"; startIdx++) {}

  // 결과값, 경계값 처리
  const ans = stack.slice(startIdx).join("");
  return ans.length ? ans : "0";
}

// runTestCase({
//     solution: removeKdigits,
//     tcList: [
//         {
//             /**
//              * 9, [1]
//              * 9, [1, 2]
//              * 9, [1, 2, 3]
//              * 9, [1, 2, 3, 4, 5, 6, 7, 8, 9]
//              * 8, [1, 2, 3, 4, 5, 6, 7, 8, 0]
//              *
//              */
//             params: ["1234567890", 9],
//             expect: "0",
//         },
//         {
//             params: ["10001", 4],
//             expect: "0",
//         },
//         {
//             params: ["10", 1],
//             expect: "0",
//         },
//         {
//             params: ["10200", 1],
//             expect: "200",
//         },
//         {
//             params: ["10", 2],
//             expect: "0",
//         },
//     ],
// });

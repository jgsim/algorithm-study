/**
 * k 값 이하의 숫자로 s 를 쪼개는데 최소한으로 쪼갠 개수를 구하기
 *
 * 그리디인가 분할정복인가
 * 임의의 테스트 케이스로 시뮬레이션 해보았는데
 * 앞부터 조금씩 잘라가는 방법으로 해봄
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function (s, k) {
  let numStr = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (+numStr > k) return -1;
    numStr += s[i];
    if (+numStr > k) {
      numStr = s[i];
      count += 1;
    }
  }
  return count + 1; // 마지막 값은 항상 작은게 남아 있으므로
};
// 20
const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    // {
    //   params: ["165462", 60],
    //   expect: 4,
    // },
    {
      params: ["238182", 5],
      expect: -1,
    },
  ],
  minimumPartition
);

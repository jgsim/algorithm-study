/**
 * https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/submissions/
 * Runtime: 96 ms, faster than 49.51% of JavaScript online submissions for Remove Digit From Number to Maximize Result.
 * Memory Usage: 41.7 MB, less than 97.36% of JavaScript online submissions for Remove Digit From Number to Maximize Result.
 */

/**
 * number 문자열이 주어지고 digit 문자가 주어지는데 digit을 한글자 빼고 가장 큰 수가 되는 스트링을 리턴
 *
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let ansIndex = null;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      if (i + 1 === number.length) {
        ansIndex = i;
        break;
      }
      // 테스트케이스 몇개 검증해보면 다음 숫자가 현재 숫자보다 크면 무조건 가장 큰 수임
      if (number[i] < number[i + 1]) {
        ansIndex = i;
        break;
      }
      ansIndex = i;
    }
  }

  return number.slice(0, ansIndex) + number.slice(ansIndex + 1, number.length);
};
const { runTestCase } = require("../../../utils");

runTestCase(
  [
    {
      params: [
        "2918247756338836829948259212259612948986573547572133445495998236287245768816987491842618661",
        "9",
      ],
      expect:
        "291824775633883682994825921225961294898657354757213344549599823628724576881698741842618661",
    },
    {
      params: [
        "2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471",
        "3",
      ],
      expect:
        "299858953917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471",
    },
    {
      params: ["123", "3"],
      expect: "12",
    },
    {
      params: ["1231", "1"],
      expect: "231",
    },
    {
      params: ["551", "5"],
      expect: "51",
    },
  ],
  removeDigit
);

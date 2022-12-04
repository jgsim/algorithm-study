/**
 * https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/
 *
 * 양수로 구성된 짝수배열 받고
 * 인덱스가 플레이어 아이디 값이 능력
 * 능력 값이 모두 같도록 두명 씩 짝지어라
 * 짝지은 팀의 스킬끼리 곱하여 모두 더하면 답
 * 팀 나누기 안되면 -1
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  const chemistry = (pairs) => pairs.reduce((acc, [a, b]) => acc + a * b, 0);

  // 양쪽에서 뽑기 위해 정렬
  skill.sort((a, b) => a - b);
  const teams = [[skill.shift(), skill.pop()]];
  const standard = teams[0][0] + teams[0][1];
  while (skill.length) {
    const min = skill.shift();
    const max = skill.pop();
    if (min + max !== standard) {
      return -1;
    }
    teams.push([min, max]);
  }

  return chemistry(teams);
};
// The contest has started. (1 hour 5 minutes 59 sec
const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [[3, 2, 5, 1, 3, 4]],
      expect: 22,
    },
    {
      params: [[3, 4]],
      expect: 12,
    },
    {
      params: [[1, 1, 2, 3]],
      expect: -1,
    },
  ],
  dividePlayers
);

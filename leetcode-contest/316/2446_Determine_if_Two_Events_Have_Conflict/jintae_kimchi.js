/**
 * https://leetcode.com/problems/determine-if-two-events-have-conflict/
 * 이벤트 두개의 시작-끝 부분을 비교하면 겹치는지 확인할 수 있다
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  // 시간 숫자로 변환하고 서로의 이벤트가 범위안에 있는 값인지 비교
  const toNumber = (str) => {
    const [h, m] = str.split(":").map((x) => parseInt(x));
    return h * 60 + m;
  };
  const [evt1Start, evt1End] = [toNumber(event1[0]), toNumber(event1[1])];
  const [evt2Start, evt2End] = [toNumber(event2[0]), toNumber(event2[1])];

  return (
    (evt1Start >= evt2Start && evt1Start <= evt2End) ||
    (evt1End >= evt2Start && evt1End <= evt2End) ||
    (evt2Start >= evt1Start && evt2Start <= evt1End) ||
    (evt2End >= evt1Start && evt2End <= evt1End)
  );
};
// 아.. 25분 씀

const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [
        ["01:15", "02:00"],
        ["02:00", "03:00"],
      ],
      expect: true,
    },
    {
      params: [
        ["01:00", "02:00"],
        ["01:20", "03:00"],
      ],
      expect: true,
    },
    {
      params: [
        ["10:00", "11:00"],
        ["14:00", "15:00"],
      ],
      expect: false,
    },
  ],
  haveConflict
);

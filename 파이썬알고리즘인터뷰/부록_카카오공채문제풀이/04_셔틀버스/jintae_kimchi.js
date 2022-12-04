const solution = (n, t, m, timetable) => {
  // 시간표 만들기
  const createBusTime = (n, t) => {
    const startTime = 540;
    const table = [];
    for (let i = 0; i < n; i++) {
      table.push(startTime + i * t);
    }
    return table;
  };
  // 크루 시간표 만들기
  const createCrewTime = (timetable) => {
    return timetable
      .map((time) => {
        const [hour, min] = time.split(":");
        return parseInt(hour) * 60 + parseInt(min);
      })
      .sort((a, b) => b - a); // pop 하기 위해 내림차순
  };
  // 버스에 태워보기
  const simulate = (n, t, m, busTable, crewTable) => {
    const toAnsString = (val) => {
      const hour = Math.floor(val / 60)
        .toString()
        .padStart(2, "0");
      const min = (val % 60).toString().padStart(2, "0");
      return `${hour}:${min}`;
    };
    for (let i = 0; i < busTable.length; i++) {
      const curBus = busTable[i];
      // 현재 시간에 탈 수 있는 멤버들
      const curCrews = [];
      // 버스에 탈 수 있는 사람 수 만큼, 버스시간까지 맞춰온 사람들
      while (
        curCrews.length < m &&
        crewTable[crewTable.length - 1] &&
        crewTable[crewTable.length - 1] <= curBus
      ) {
        curCrews.push(crewTable.pop());
      }

      // 아직 안탄 사람이 있음 => 다음 버스로 넘어감
      if (crewTable.length) continue;
      // 버스에 자리 있음: 같이 타면 됨
      if (curCrews.length < m) return toAnsString(curBus);
      // 버스에 자리 없음: 가장 늦게 타는 사람보다 1분 빨리 타면 됨
      if (curCrews.length === m)
        return toAnsString(curCrews[curCrews.length - 1] - 1);
    }

    // 여기에 오면 막차를 타야함
    return toAnsString(busTable[busTable.length - 1]);
  };

  const busTable = createBusTime(n, t);
  const crewTable = createCrewTime(timetable);

  // 결과값 반환
  return simulate(n, t, m, busTable, crewTable);
};
const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]],
      expect: "09:00",
    },
    {
      params: [2, 10, 2, ["09:10", "09:09", "08:00"]],
      expect: "09:09",
    },
    {
      params: [2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]],
      expect: "08:59",
    },
    {
      params: [1, 1, 5, ["00:01", "00:01", "00:01", "00:01", "00:01"]],
      expect: "00:00",
    },
    {
      params: [1, 1, 1, ["23:59"]],
      expect: "09:00",
    },
    {
      params: [
        10,
        60,
        45,
        [
          "23:59",
          "23:59",
          "23:59",
          "23:59",
          "23:59",
          "23:59",
          "23:59",
          "23:59",
          "23:59",
          "23:59",
        ],
      ],
      expect: "18:00",
    },
  ],
  solution
);

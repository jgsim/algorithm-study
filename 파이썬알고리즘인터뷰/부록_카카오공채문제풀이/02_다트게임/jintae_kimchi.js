const dartGame = (dataResult) => {
  const split = (str) => {
    // [숫자, 제곱, 옵션 or Null] 형태로 잘라야 함
    const dataArr = [];
    if (typeof str === "string") {
      let score, pow, opt;
      let flags = 0;
      for (let i = 0; i < str.length; i++) {
        if ("0123456789".includes(str[i])) {
          // 10 check
          if (str[i] === "1" && str[i + 1] === "0") {
            i++;
            score = 10;
          } else {
            score = parseInt(str[i]);
          }
          flags = flags | 1;
        }
        if ("SDT".includes(str[i])) {
          pow = str[i];
          flags = flags | 2;
        }

        if (flags === 3) {
          if ("*#".includes(str[i + 1])) {
            opt = str[i + 1];
            i++;
          }
          dataArr.push([score, pow, opt]);
          flags = 0;
          score = null;
          pow = null;
          opt = null;
        }
      }
    }
    return dataArr;
  };
  const pow = (score, powCh) =>
    powCh === "D" ? score ** 2 : powCh === "T" ? score ** 3 : score;
  const calc = (dataArr) => {
    for (let i = 0; i < dataArr.length; i++) {
      // score: 0 ~ 10
      // pow: S | D T
      // opt: null | # | *
      const [score, powCh, opt] = dataArr[i];

      // cell 마다 계산해놓고 나중에 더하는식으로 처리함
      let val = pow(score, powCh);
      if (opt === "*") {
        val *= 2;
        // 이전 항목에도 *2
        if (dataArr[i - 1]) {
          dataArr[i - 1][0] *= 2;
        }
      } else if (opt === "#") {
        val *= -1;
      }
      dataArr[i][0] = val;
    }

    return dataArr.reduce((acc, cur) => acc + cur[0], 0);
  };

  return calc(split(dataResult));
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: ["1S2D*3T"], // (((1^1) + (2^2)) * 2) + (3^3)
      expect: 37,
    },
    {
      params: ["1D2S#10S"], // (1^2) + (-2^1) + (10^1)
      expect: 9,
    },
    {
      params: ["1D2S0T"], // (1^2) + (2^1) + (0^3)
      expect: 3,
    },
    {
      params: ["1S*2T*3S"], // ((((1^1) * 2) + (2^3)) * 2) + (3^1)
      expect: 23,
    },
    {
      params: ["1D#2S*3S"], // (((1^2) * -1) + (2^1)) * 2) + (3^1)
      expect: 5,
    },
    {
      params: ["1T2D3D#"], // 1T 2D 3D# = 1 + 4 - 9 = -4
      expect: -4,
    },
    {
      params: ["1D2S3T*"], // 1D + 2S*2 + 3T*2 = 1 + 4 + 54 = 59
      expect: 59,
    },
  ],
  dartGame
);

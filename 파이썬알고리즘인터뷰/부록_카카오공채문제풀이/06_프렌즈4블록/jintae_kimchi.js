const solution = (m, n, board) => {
  const validate = (m, n, board) => {
    const result = Array.from({ length: m }, () => []);
    // 4칸 만족하는 좌표목록
    for (let r = 0; r < m - 1; r++) {
      for (let c = 0; c < n - 1; c++) {
        // 좌상기준으로 우, 하, 우하 체크
        const [w, x, y, z] = [
          board[r][c],
          board[r][c + 1],
          board[r + 1][c],
          board[r + 1][c + 1],
        ];
        if (w && w === x && w === y && w === z) {
          result[r][c] = true;
          result[r][c + 1] = true;
          result[r + 1][c] = true;
          result[r + 1][c + 1] = true;
        }
      }
    }
    return result;
  };
  const addScore = (positions, score) => {
    return score + positions.flat().filter((v) => v).length;
  };
  const erase = (m, n, positions, board) => {
    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        if (positions[r][c]) board[r][c] = null;
      }
    }
  };
  const reposition = (m, n, board) => {
    // 전체 컬럼 탐색
    for (let c = 0; c < n; c++) {
      // 열 기준 빈칸 아닌거 모으기
      const nextCols = [];
      for (let r = m - 1; r >= 0; r--) {
        if (board[r][c]) {
          nextCols.push(board[r][c]);
        }
      }
      // 해당 열에 아래부터 반영
      for (let r = m - 1; r >= 0; r--) {
        const nextItem = nextCols.pop();
        board[r][c] = nextItem || null;
      }
    }
  };

  let score = 0;
  const boardMap = board.map((row) => row.split(""));
  while (1) {
    const positions = validate(m, n, boardMap);
    if (!positions.filter((row) => row.length).length) {
      break;
    }
    // 점수계산
    score = addScore(positions, score);
    // 지우기
    erase(m, n, positions, boardMap);
    // 빈공간 채우기
    reposition(m, n, boardMap);
  }

  return score;
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: [4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]],
      expect: 14,
    },
    {
      params: [
        6,
        6,
        ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"],
      ],
      expect: 15,
    },
  ],
  solution
);

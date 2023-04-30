/**
 * https://app.codility.com/demo/results/trainingHK5EW2-2A5/
 * time spent: 9min
 * score: 100%
 *
 * 문제)
 * P명의 선수가 있고 C개의 코트가 있다
 * 동시에 플레이 가능한 최대 코스 수는 몇개인가?
 * (혼자서는 플레이할 수 없다)
 *
 * 풀이)
 * 간단한 계산문제
 */

const tennisTournament = (P: number, C: number): number => {
  return P < C * 2 ? Math.floor(P / 2) : C;
};

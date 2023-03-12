/**
 * https://leetcode.com/problems/pass-the-pillow/
 * Runtime 55 ms Beats 87.50% Memory 43.4 MB Beats 14.58%
 *
 * 수식으로 해결할 수 있는 건 알겠는데 수식 만드는게 어려워 무식하게 품
 */
function passThePillow(n: number, time: number): number {
  let pos = 1;
  let dir: "right" | "left" = "right";
  for (let i = 1; i <= time; i++) {
    if (dir === "right") {
      pos++;
    } else {
      pos--;
    }
    if (pos === n) {
      dir = "left";
    } else if (pos === 1) {
      dir = "right";
    }
  }
  return pos;
}
/**
 *  t   t%(n-1) t%(n-1)+1   n-(t%(n-1)) t/(n-1) (t/(n-1))%2
 *  0   0       1<          4           0       0
 *  1   1       2<          3           0       0
 *  2   2       3<          2           0       0
 *  3   0       1           4<          1       1
 *  4   1       2           3<          1       1
 *  5   2       3           2<          1       1
 *  6   0       1<          4           2       0
 *  7   1       2<          3           2       0
 *  8   2       3<          2           2       0
 */
function passThePillow_solution(n: number, time: number): number {
  const round = Math.floor(time / (n - 1));
  const mod = time % (n - 1);
  return round % 2 === 0 ? mod + 1 : n - mod;
}

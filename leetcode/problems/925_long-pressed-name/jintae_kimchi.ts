/**
 * https://leetcode.com/problems/long-pressed-name/
 * Runtime 52 ms Beats 93.75% Memory 43.4 MB Beats 87.50%
 *
 * two pointer
 */

function isLongPressedName(name: string, typed: string): boolean {
  let ni = 0;
  let ti = 0;
  const nl = name.length;
  const tl = typed.length;

  let prevCh = "";
  while (ni <= nl || ti <= tl) {
    if (name[ni] === typed[ti]) {
      prevCh = name[ni];
      ni++;
      ti++;
    } else {
      // long pressed
      if (prevCh === typed[ti]) {
        ti++;
      } else {
        return false;
      }
    }
  }
  return true;
}
/*
ni  ti  nc  tc  prevCh
0   0   a   a   a
1   1   l   a   a
1   2   l   l   l
2   3   e   e   e
3   4   x   e   e
3   5   x   x   x

0123456
saeed
ssaaedd
0   0   s   s   s
1   1   a   s   s
1   2   a   a   s
2   3   e   a   e
2   4   e   e   e
3   5   e   d   false
*/

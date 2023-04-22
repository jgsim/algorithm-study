/**
 * https://leetcode.com/problems/array-prototype-last/
 * Runtime 67 ms Beats 17.46% Memory 42.6 MB Beats 69.69%
 * 성능은 이상하게 나왔는데 의미 없음
 *
 * 문제)
 * Array 에 last 라는 기본 매서드를 추가
 * 값이 없으면 -1 리턴
 *
 * 풀이)
 * this 길이, 인덱스 알면 됨
 * 인터페이스는 Array d.ts 들어가서 보면 됨
 */

interface Array<T> {
  last<T>(/* has no params */): T | -1;
}
Array.prototype.last = function () {
  return this[this.length - 1] ?? -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

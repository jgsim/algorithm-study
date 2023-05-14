/**
 * https://leetcode.com/problems/day-of-the-week/submissions/950044905/
 * Runtime 63 ms Beats 45% Memory 43.9 MB Beats 12.50%
 *
 * 문제)
 * 일, 월, 년도가 주어지면 해당 일자의 요일을 리턴
 *
 * 풀이)
 * Date 객체의 getDay 가 요일 enum 값을 반환하는 것을 알면 풀 수 있는 문제
 */

const DATE = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

// function dayOfTheWeek(day: number, month: number, year: number): string {
//   const dateObj = new Date(`${year}-${month}-${day}`);
//   const dateStr = dateObj.toDateString();
//   return DATE.find((x) => x.slice(0, 3) === dateStr.slice(0, 3)) ?? "";
// }
function dayOfTheWeek(day: number, month: number, year: number): string {
  return DATE[new Date(year, month - 1, day).getDay()];
}

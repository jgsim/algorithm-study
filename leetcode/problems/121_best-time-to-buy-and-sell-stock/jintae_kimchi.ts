/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Runtime 88 ms Beats 63.55% Memory 51.1 MB Beats 98.42%
 *
 * two pointers / dp
 *
 * 저점과 고점위 위치를 관리하면서 최대값을 기록하고
 * 위치가 바뀌는 조건을 설정.
 *
 * tmi)
 * 에전에 알고리즘 공부할 때 책에서 알려준 솔루션으로 제출했는데 그거보단 성능 잘나옴
 */

function maxProfit(prices: number[]): number {
  let buy: number | null = null;
  let sell: number | null = null;
  let profit = 0;

  prices.forEach((price) => {
    if (buy === null) {
      buy = price;
    } else if (price < buy) {
      buy = price;
      sell = null;
    } else if (price > buy) {
      sell = price;
    }
    profit = Math.max(profit, (sell ?? 0) - buy);
  });

  return profit;
}

// runTestCase({
//   solution: maxProfit,
//   tcList: [
//       {
//           expect: 5,
//           params: [[2, 7, 1, 4]],
//       },
//       {
//           expect: 6,
//           params: [[1, 4, 2, 7]],
//       },
//       {
//           expect: 0,
//           params: [[1]],
//       },
//       {
//           expect: 3,
//           params: [[1, 2, 3, 4]],
//       },
//       {
//           expect: 5,
//           params: [[7, 1, 5, 3, 6, 4]],
//       },
//       {
//           expect: 0,
//           params: [[7, 6, 4, 3, 1]],
//       },
//   ],
// });

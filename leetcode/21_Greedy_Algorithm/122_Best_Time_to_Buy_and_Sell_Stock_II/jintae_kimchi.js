/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * Runtime: 89 ms, faster than 56.93% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
 * Memory Usage: 42.4 MB, less than 56.21% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
 *
 * 주식 그래프가 주어진다
 * 인덱스는 날짜, 요소는 가격.
 * 주식은 한 주만 소유할 수 있으며
 * 당일에 사고 팔고를 할 수 있다
 * 최대이윤이 얼마인지 구하라
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) profit += prices[i + 1] - prices[i];
  }

  return profit;
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [[7, 1, 5, 3, 6, 4]],
      expect: 7,
    },
    {
      params: [[1, 2, 3, 4, 5]],
      expect: 4,
    },
    {
      params: [[7, 6, 4, 3, 1]],
      expect: 0,
    },
  ],
  maxProfit
);

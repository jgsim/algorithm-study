/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Runtime: 108 ms, faster than 53.46% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 * Memory Usage: 51.6 MB, less than 74.72% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 *
 * 문제설명
 * prices 라는 배열이 주어짐
 * 인덱스 순서대로 시간이 흐르는 주식차트 데이터 형태
 * prices[0]: number, prices[1]: number, ... prices[prices.length - 1]: number
 *
 * 주식차트 내용을 분석해서 언제사서 언제팔때 가장 큰 이득이 발생하는지 계산, 이익을 리턴
 * 만약 손해면 0리턴
 *
 * 범위
 * 1 <= price.length <= 10^5
 * 0 <= prices[i] <= 10^4
 */

/**
 * O(N^2) 으로 푸니 타임아웃
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function (prices) {
  let max = 0;
  prices.forEach((price, idx) => {
    for (let i = idx + 1; i < prices.length; i++) {
      const diff = prices[i] - price;
      if (diff > max) max = diff;
    }
  });
  return max;
};

/**
 * 이것저것 해보다 잘 안풀려서 책보고 품
 * i    price   min(min, price) max(max, price - min)   min     max
 *                                                      10^4    0
 * 0    7       10^4, 7 = 7     0, 7 - 7 = 0            7       0
 * 1    1       7, 1 = 1        0, 1 - 7 = 0            1       0
 * 2    5       1, 5 = 1        0, 5 - 1 = 4            1       4
 * 3    3
 * 4    6
 * 5    4
 *
 * 답을 구하기 위한 조건: 그래프의 최소값과 최대값을 빼는 것, 이 때 최대값의 인덱스는 최소값보다 같거나 커야 함
 * 한번만 탐색해야 하므로 탐색할 때 최소값을 갱신하면서 현재 값과 차이를 계산하여 가장 큰 값을 기억하면 답이 나옴
 * @param {*} prices
 */
const maxProfit_solution = (prices) => {
  let max = 0;
  let min = 10 ** 4;
  prices.forEach((price, i) => {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  });

  return max;
};

const tcList = [
  [[7, 1, 5, 3, 6, 4], 5],
  [[7, 6, 4, 3, 1], 0],
];

tcList.forEach(([prices, expect]) => {
  const ans = maxProfit(prices);
  ans === expect ? console.log("pass") : console.error(`${ans} !== ${expect}`);
});

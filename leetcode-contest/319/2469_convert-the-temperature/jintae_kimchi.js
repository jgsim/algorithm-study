/**
 * https://leetcode.com/problems/convert-the-temperature/
 */

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  const toKelvin = (c) => {
    // cel + 273.15
    const k = 273.15;
    return c + k;
  };
  const toFahren = (c) => {
    // cel * 1.80 + 32.00
    return c * 1.8 + 32.0;
  };

  return [toKelvin(celsius), toFahren(celsius)];
};
// 10min

const { runTestCase } = require("../../../leetcode/utils");
runTestCase(
  [
    {
      params: [36.5],
      expect: [309.65, 97.7],
    },
    {
      params: [122.11],
      expect: [395.26, 251.798],
    },
  ],
  convertTemperature
);

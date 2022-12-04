/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Runtime: 133 ms, faster than 7.74% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
 * Memory Usage: 43.2 MB, less than 20.59% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
 * 더 나은 솔루션이 있어서 이진탐색은 의미없음
 *
 * Runtime: 99 ms, faster than 41.70% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
 * Memory Usage: 42.5 MB, less than 95.74% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
 * 솔루션 코드로 나온 결과
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const binarySearch = (left, right, target) => {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] > target) {
      return binarySearch(left, mid - 1, target);
    } else if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      return binarySearch(mid + 1, right, target);
    }
    return -1;
  };
  const findMyDarling = (myAddress, endOfTheWorld, darling) => {
    return binarySearch(myAddress + 1, endOfTheWorld, darling);
  };

  for (let myAddress = 0; myAddress < numbers.length - 1; myAddress++) {
    const me = numbers[myAddress];
    const darling = target - me;
    const darlingAddress = findMyDarling(
      myAddress,
      numbers.length - 1,
      darling
    );
    if (0 < darlingAddress) {
      return [myAddress + 1, darlingAddress + 1];
    }
  }
  throw new Error("you are alone");
};

const twSumSolution = (numbers, sums) => {
  let left = 0;
  let right = numbers.length - 1;
  while (true) {
    const curSum = numbers[left] + numbers[right];
    if (curSum < sums) {
      left++; // 왼쪽값 키우기
    } else if (curSum === sums) {
      return [left + 1, right + 1];
    } else if (curSum > sums) {
      right--; // 오른쪽 값 낮추기
    }
  }
};

const { runTestCase } = require("../../utils");
runTestCase(
  [
    {
      params: [[5, 25, 75], 100],
      expect: [2, 3],
    },
    {
      params: [[0, 0, 3, 4], 0],
      expect: [1, 2],
    },
    {
      params: [[2, 7, 11, 15], 9],
      expect: [1, 2],
    },
    {
      params: [[2, 3, 4], 6],
      expect: [1, 3],
    },
    {
      params: [[-1, 0], -1],
      expect: [1, 2],
    },
  ],
  twSumSolution
);

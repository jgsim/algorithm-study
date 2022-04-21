/**
 * Given an integer array nums of 2n integers, 
 * group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) 
 * for all i is maximized. Return the maximized sum.

 

Example 1:

Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.
Example 2:

Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
 */

/**
 * 값이 작은것은 작은것끼리, 큰 것은 큰 것끼리 묶어서 계산해야 최대값이 나옴
 * 정렬하고 min 값에 해당하는 인덱스만 더하면 끝
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let acc = 0;
    for (let i = 0; i < nums.length; i += 2) {
        acc += nums[i];
    }
    return acc;
};
/**
 * Runtime: 134 ms, faster than 72.78% of JavaScript online submissions for Array Partition I.
Memory Usage: 47.5 MB, less than 68.15% of JavaScript online submissions for Array Partition I.
우효~
72퍼인데 90퍼 솔루션이랑 코드 같음
 */

const tcList = [
    [[1, 4, 3, 2], 4],
    [[6, 2, 6, 5, 1, 2], 9],
];
tcList.forEach(([nums, expect]) => {
    const ans = arrayPairSum(nums);
    ans === expect ? console.log("pass") : console.error(`${ans} !== ${expect}`);
});

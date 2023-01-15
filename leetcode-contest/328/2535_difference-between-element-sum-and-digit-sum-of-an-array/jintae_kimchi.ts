/**
 * https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
 *
 * 배열의 요소를 더합 값과 문자 단위로 쪼갠(15 => "15" => 1 + 5) 합의 차이를 절대값으로 리턴
 * @param nums
 * @returns
 */
function differenceOfSum(nums: number[]): number {
  let elSum = 0;
  let diSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    elSum += el;

    const di = nums[i].toString();
    for (let j = 0; j < di.length; j++) {
      diSum += +di[j];
      // 이런 방식 대신 nums[i] % 10 으로 하는 솔루션도 있었다
    }
  }

  return Math.abs(elSum - diSum);
}

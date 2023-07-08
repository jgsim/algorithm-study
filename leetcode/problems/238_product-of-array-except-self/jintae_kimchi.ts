/**
 * https://leetcode.com/problems/product-of-array-except-self/description/
 * Runtime 117 ms Beats 41.19% Memory 53.8 MB Beats 74.21%
 *
 * array / prefix
 *
 * 풀이 아이디어)
 * 문제에서 모든 요소의 곱을 하여도 오버플로우가 없다는 내용이 있다. == 모든 요소의 곱을 활용해야 할 것이다.
 * 일반적으로 모든 요소의 곱에서 각각의 요소를 나누면 답이 나왔다.
 * 하지만 곱셈이라 0의 경우 이러한 방법이 적용되지 않았다.
 * 규칙을 생각해봤는데 0이 하나인 경우 2개 이상인 경우로 나누어 생각해 볼 수 있었다.
 * 0이 두개 이상이면 어떤 경우에도 0이다.
 * 0이 하나라면 0이 있는 위치가 전체 곱이 되고 나머지는 0이다.
 * 그래서 최초의 전체 곱을 수행하면서 0의 개수를 확인해서 조건을 나누어 풀었다.
 * T: O(N), S: O(1) 이라고 막연히 생각하고 제출했는데 생각보다 성능이 좋지 않았다.
 * 전체곱을 각 원소로 나누는 것에 대한 비용이 생각보다 큰 것으로 보인다.
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity?
 * (The output array does not count as extra space for space complexity analysis.)
 *
 * 위 설명을 원본 배열을 조작하고 추가 배열을 만들지 말라는 의미로 받아들였는데
 * 제대로 해석하자면 "리턴 배열은 추가공간복잡도를 계산하는데 측정되지 않는다" == "추가배열을 써라" 이다.
 *
 * 솔루션)
 * 솔루션 코드는 추가 배열을 만들고 product prefix 로 만든다 (마지막 원소는 계산 안함)
 *
 * [1, 2, 3, 4] prefix product [1] => [1, 1, 2, 6]
 *
 * nums:   [1,   2,   3,   4]
 * prefix: [1,   1,   2,   6]
 *         뒤에서부터 nums[i] * prefix[i-1] = next
 * next:    24  12  4  1
 *         next * result[i] = ans
 * result: [24, 12,   8,   6]
 *
 */

function productExceptSelf(nums: number[]): number[] {
  let hasZero = 0;
  const products = nums.reduce((prd, cur) => {
    if (cur === 0) {
      hasZero += 1;
      return prd;
    }
    return prd * cur;
  }, 1);
  for (let i = 0; i < nums.length; i++) {
    if (hasZero) {
      nums[i] = hasZero === 1 && nums[i] === 0 ? products : 0;
    } else {
      nums[i] = products / nums[i];
    }
  }
  return nums;
}

// runTestCase({
//   solution: productExceptSelf,
//   tcList: [
//       {
//           expect: [12, 0, 0],
//           params: [[0, 3, 4]],
//       },
//       {
//           expect: [6, 3, 2],
//           params: [[-1, -2, -3]],
//       },
//       {
//           expect: [0, 0, 0, 0],
//           params: [[0, 0, 3, 4]],
//       },
//       {
//           expect: [24, 12, 8, 6],
//           params: [[1, 2, 3, 4]],
//       },
//       {
//           expect: [0, 0, 9, 0, 0],
//           params: [[-1, 1, 0, -3, 3]],
//       },
//   ],
// });

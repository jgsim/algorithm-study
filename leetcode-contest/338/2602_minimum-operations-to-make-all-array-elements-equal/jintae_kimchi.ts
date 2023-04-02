/**
 * https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/description/
 * Runtime 328 ms Beats 60% Memory 71.9 MB Beats 100%
 * failed
 *
 * diff 를 직접 계산하면 타임아웃 발생
 * 누적값을 활용해서 풀어야 함
 * 좌/우를 나눠서 diff를 계산하는 발생이 필요
 */
function minOperations(nums: number[], queries: number[]): number[] {
  const ans: number[] = [];
  const len = nums.length;
  nums.sort();
  const leftSum = nums.reduce<number[]>((left, num, idx) => {
    left.push(idx === 0 ? num : left[idx - 1] + num);
    return left;
  }, []);
  const rightSum = nums
    .reduceRight<number[]>((right, num, idx) => {
      right.push(idx === len - 1 ? num : right[right.length - 1] + num);
      return right;
    }, [])
    .reverse();
  const binarySearch = (query: number, len: number) => {
    let lo = 0;
    let hi = len - 1;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (nums[mid] >= query) hi = mid;
      else lo = mid + 1;
    }
    return nums[lo] >= query ? lo : len;
  };

  queries.forEach((query) => {
    const midIdx = binarySearch(query, len);
    const left = midIdx > 0 ? query * midIdx - leftSum[midIdx - 1] : 0;
    const right = midIdx < len ? rightSum[midIdx] - query * (len - midIdx) : 0;
    ans.push(left + right);
  });

  return ans;
}

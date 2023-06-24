/**
 * https://leetcode.com/problems/remove-element/description/
 * Runtime 61 ms Beats 71.73% Memory 43.6 MB Beats 79.67%
 *
 * array swap
 *
 * array api 를 사용하면 간단하지만 t: O(n), s: O(1) 으로 푸는 것이 핵심
 * val 값이 아닌 것을 앞으로 옮기는 것이 핵심
 * [a, b] = [b, a] 보다 고전적인 스왑 코드가 성능이 더 잘나왔다
 */

function removeElement(nums: number[], val: number): number {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      const cur = nums[i];
      nums[i] = nums[pointer];
      nums[pointer] = cur;
      pointer++;
    }
  }
  return pointer;
}

/**
 * 성능문제는 없지만 공간복잡도가 낮았던 코드
 * Runtime 57 ms Beats 86.14% Memory 44.4 MB Beats 42.23%
 */
function removeElement_bad(nums: number[], val: number): number {
  nums.sort((x) => (x === val ? 1 : -1));
  return nums.filter((x) => x !== val).length;
}

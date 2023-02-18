/**
 * https://leetcode.com/problems/count-the-number-of-fair-pairs/
 * 이렇게 단순무식하게 풀면 타임아웃이 난다
 * 검색을 안하는 조건설정을 했었는데 값 범위가 음수도 포함이라 멘붕
 */
function countFairPairs(nums: number[], lower: number, upper: number): number {
  let ans = 0;
  nums.forEach((num, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      const pair = num + nums[j];
      if (lower <= pair && pair <= upper) ans += 1;
    }
  });
  return ans;
}

/**
 * 지금 수준으로는 이런식으로 풀이가 불가능..
 */
function countFairPairs_solution(
  nums: number[],
  lower: number,
  upper: number
): number {
  nums.sort((a, b) => a - b);
  const countLess = (val: number): number => {
    let cnt = 0;
    let j = nums.length - 1;
    let i = 0;
    // i-> ~~~~~ <-j 이렇게 좁히면서 해당하는 범위인지 확인 후 개수를 누적하여 반복 계산을 줄이는 아이디어
    while (i < j) {
      if (nums[i] + nums[j] > val) {
        // 범위를 넘어가면 줄이기
        j -= 1;
      } else {
        // 범위 내의 값들의 모든 짝은 포함이니 인덱스의 간격으로 개수가 나옴
        // e.g.) 2 ~ 5 사이의 조합은 2-5, 2-4, 2-3 => 5 - 2 와 같음
        cnt += j - i;
        i += 1;
      }
    }
    return cnt;
  };

  // Upper 이하 개수와 Lower 이하 개수의 교집합을 구함
  return countLess(upper) - countLess(lower - 1);
}

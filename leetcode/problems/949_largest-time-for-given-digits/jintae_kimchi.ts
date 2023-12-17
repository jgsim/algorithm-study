/**
 * https://leetcode.com/problems/largest-time-for-given-digits/description/
 * Runtime 53 ms Beats 58.33% of users with TypeScript
 * Memory 44.90 MB Beats 25.00% of users with TypeScript
 *
 * Medium | String | Enumeration
 *
 * permutation 을 할 줄 아는지 확인하는 문제
 */

function largestTimeFromDigits(arr: number[]): string {
  let max = -1;

  const swap = (arr: number[], i: number, j: number) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };
  const permutation = (arr: number[], idx: number) => {
    if (idx === 4) {
      // console.log(arr.join(""));
      const hh = (arr[0] * 10 + arr[1]) * 60;
      const mm = arr[2] * 10 + arr[3];
      if (hh < 24 * 60 && mm < 60) {
        // console.log(hh, mm);
        max = Math.max(max, hh + mm);
      }

      return;
    }
    for (let i = idx; i < arr.length; i++) {
      swap(arr, idx, i);
      permutation([...arr], idx + 1);
      swap(arr, idx, i);
    }
  };
  // 1234 ~ 4321
  permutation(arr, 0);
  if (max === -1) return "";

  return `${Math.floor(max / 60)
    .toString()
    .padStart(2, "0")}:${Math.floor(max % 60)
    .toString()
    .padStart(2, "0")}`;
}

/**
 * Runtime 92 ms Beats 8.33% of users with TypeScript
 * Memory 49.33 MB Beats 8.33% of users with TypeScript
 *
 * 처음에 푼 방식.
 * 23:59 부터 00:00 까지 돌리면서 뽑은 4개의 값과 입력값이 동일한지 비교
 */
function largestTimeFromDigits_super_brute_force(arr: number[]): string {
  const sortedValue = arr.sort((a, b) => a - b).join("");
  for (let h1 = 2; h1 >= 0; h1--) {
    for (let h2 = 9; h2 >= 0; h2--) {
      if (h1 > 1 && h2 > 3) continue;
      for (let m1 = 5; m1 >= 0; m1--) {
        for (let m2 = 9; m2 >= 0; m2--) {
          const compare = [h1, h2, m1, m2].sort((a, b) => a - b).join("");
          if (sortedValue === compare) {
            return `${h1}${h2}:${m1}${m2}`;
          }
        }
      }
    }
  }
  return "";
}

const tcList = [
  {
    params: [[1, 2, 3, 4]],
    expect: "23:41",
  },
  {
    params: [[0, 4, 0, 0]],
    expect: "04:00",
  },
  {
    params: [[1, 1, 1, 1]],
    expect: "11:11",
  },
  {
    params: [[2, 3, 5, 9]],
    expect: "23:59",
  },
  {
    params: [[0, 0, 1, 0]],
    expect: "10:00",
  },
  {
    params: [[0, 0, 0, 0]],
    expect: "00:00",
  },
  {
    params: [[2, 4, 5, 9]],
    expect: "",
  },
  {
    // 2, 1 두개가 있으면 1X 인 경우는 없음
    // 2, 0 도 마찬가지
    params: [[2, 5, 1, 9]],
    expect: "21:59",
  },
];

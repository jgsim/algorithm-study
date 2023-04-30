// import { runTestCase } from "../leetcodeTesting";

(() => {
  /**
   * solved
   *
   * 문제)
   * 영어 대문자로만 이루어진 문자열이 주어짐
   * 문자열에서 BANANA 스펠링 세트를 반복해서 뽑아냄
   * 최대 몇 개의 BANANA 단어를 만들 수 있는지 리턴
   *
   * 풀이)
   * 맵을 사용하여 B, N, A 단어만 뽑아냄
   * BANANA를 구성하는 문자의 비율이
   * B:1, N:2, A:3 이므로 비율만큼 몫을 구하고 최소값을 리턴하면 됨
   */
  function solution(S: string): number {
    const dict = new Map<string, number>();
    const banana = ["B", "N", "A"];
    for (let i = 0; i < S.length; i++) {
      const ch = S[i];
      if (banana.includes(ch)) {
        dict.set(ch, (dict.get(ch) ?? 0) + 1);
      }
    }
    const B = dict.get("B") ?? 0;
    const N = Math.floor((dict.get("N") ?? 0) / 2);
    const A = Math.floor((dict.get("A") ?? 0) / 3);

    return Math.min(B, N, A);
  }

  // runTestCase<unknown, unknown>({
  //   tcList: [
  //     {
  //       params: ["BANANANANANANANANANAN"],
  //       expect: 1,
  //     },
  //     {
  //       params: ["NAABXXAN"],
  //       expect: 1,
  //     },
  //     {
  //       params: ["NAANAAXNABABYNNBZ"],
  //       expect: 2,
  //     },
  //     {
  //       params: ["QABAAAWOBL"],
  //       expect: 0,
  //     },
  //   ],
  //   solution: solution,
  // });

  /**
   * solved
   *
   * 문제)
   * 영어 소문자로만 이루어진 문자열이 1글자 이상 주어짐
   * 알파뱃이 중복되지 않는 단어 목록으로 분리해야 함
   * ex) abc => (abc), aabb => (aa, bb), bbb => (b, b, b)
   * 최소로 구분할 수 있는 단어의 개수를 리턴
   *
   * 풀이)
   * 순서를 유지해야 하므로 순차적으로 단어에 대한 사전으로 중복단어를 검사함
   * 중복 단어가 나오면 단어사전을 초기화하고 카운트
   * 마지막 단어를 카운트 해야 함에 주의
   */
  function solution2(S: string): number {
    // 순서가 유지되어야 함
    const wordDict = new Map<string, boolean>();
    let ans = 0;
    for (let i = 0; i < S.length; i++) {
      const ch = S[i];
      if (wordDict.has(ch)) {
        wordDict.clear();
        ans += 1;
      }
      wordDict.set(ch, true);
    }

    // 나머지
    if (wordDict.size) ans += 1;

    return ans;
  }

  // runTestCase({
  //   tcList: [
  //     {
  //       params: ["world"],
  //       expect: 1,
  //     },
  //     {
  //       params: ["dddd"],
  //       expect: 4,
  //     },
  //     {
  //       params: ["cycle"],
  //       expect: 2,
  //     },
  //     {
  //       params: ["zszszszszszszszs"],
  //       expect: 8,
  //     },
  //     {
  //       params: ["a"],
  //       expect: 1,
  //     },
  //     {
  //       params: ["banana"],
  //       expect: 3,
  //     },
  //   ],
  //   solution: solution2,
  // });

  /**
   * failed 솔루션 찾지 못함
   *
   * 문제)
   * 정수로 이루어진 같은 길이의 A, B 배열이 주어짐
   * 임의의 K 인덱스를 정하고 왼쪽은 K-1 인덱스까지 오른쪽은 K 부터 최대인덱스까지 더함
   * A, B 모두 더한 값이 같으면 유효함
   * K 위치가 유효한 경우의 수를 리턴
   *
   * ex) A: [0, 4, -1, 0, 3], B: [0, -2, 5, 0, 3], K=3
   *    (0 + 4 + (-1)) == (0 + 3) == (0 + (-2) + 5) == (0 + 3)
   *
   * 배열길이 2~10만
   * 요소는 -10억 ~ 10억
   */
  function solution3(A: number[], B: number[]): number {
    // 정렬불가
    // 값의 범위를 보면 브루트포스 x

    let ans = 0;
    // const AB = A.map((a, i) => a + B[i]);
    const N = A.length;
    let K = 1; // 0 ~ N
    while (K < N) {
      let leftSumA = 0;
      let rightSumA = 0;
      let leftSumB = 0;
      let rightSumB = 0;
      for (let i = 0; i < K; i++) {
        leftSumA += A[i];
        rightSumB += B[i];
      }
      for (let i = K; i < N; i++) {
        rightSumA += A[i];
        rightSumB += B[i];
      }
      if (
        leftSumA === rightSumA &&
        leftSumB === rightSumB &&
        leftSumA === leftSumB
      ) {
        ans += 1;
      }
      K += 1;
    }

    return ans;
  }
  /**
   * ChatGPT 를 심문하여 만들어낸 코드
   * 큰 값을 계속 더하는 경우 문제될 것 같아서 누적합은 생각 안했는데
   * 누적값으로 하면 시간복잡도는 잘 나오는 코드를 만들 수 있었다
   * (이거라도 시도했어야..)
   * 여기서 문제가 될 부분은 모든 요소가 10억의 값이라면 prefixSum이 터질텐데
   * 이걸 개선시키면 구간합이나 diff 방식으로 해결하면 된다곤 알려주지만 실제 정상동작하지 않음
   */
  function countEqualSumSubarrays(A: number[], B: number[]): number {
    const n = A.length;
    let count = 0;

    const prefixSumA: number[] = [0];
    const prefixSumB: number[] = [0];

    for (let i = 1; i <= n; i++) {
      prefixSumA[i] = prefixSumA[i - 1] + A[i - 1];
      prefixSumB[i] = prefixSumB[i - 1] + B[i - 1];
    }

    for (let k = 2; k <= n; k++) {
      const sumA1 = prefixSumA[k - 1];
      const sumA2 = prefixSumA[n] - prefixSumA[k - 1];
      const sumB1 = prefixSumB[k - 1];
      const sumB2 = prefixSumB[n] - prefixSumB[k - 1];

      if (sumA1 === sumA2 && sumA1 === sumB1 && sumA1 === sumB2) {
        count++;
      }
    }

    return count;
  }

  // runTestCase({
  //   tcList: [
  //     // {
  //     //   params: [
  //     //     [0, 4, -1, 0, 3],
  //     //     [0, -2, 5, 0, 3],
  //     //   ],
  //     //   expect: 2,
  //     // },
  //     // {
  //     //   params: [
  //     //     [2, -2, -3, 3],
  //     //     [0, 0, 4, -4],
  //     //   ],
  //     //   expect: 1,
  //     // },
  //     {
  //       params: [
  //         [4, -1, 0, 3],
  //         [-2, 6, 0, 4],
  //       ],
  //       expect: 0,
  //     },
  //     {
  //       params: [
  //         [3, 2, 6],
  //         [4, 1, 6],
  //       ],
  //       expect: 0,
  //     },
  //   ],
  //   solution: solution3,
  // });
})();

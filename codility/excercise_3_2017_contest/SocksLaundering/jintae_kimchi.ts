/**
 * https://app.codility.com/demo/results/training3M6P5Y-6F6/
 * Task Score 80% Correctness 80%
 *
 * 문제)
 * C 라는 깨끗한 양말 목록과 D 라는 더러운 양말 목록이 있다
 * K 번 세탁하여 최대한 많은 꺠끗한 양말 짝을 구하는 문제
 *
 * 풀이)
 * 접근접이 잘못된 건 아닌데 random, maximal case 에서 실패했다.
 * 지금 상태가 안좋아서 나중에 재도전 할 계획
 */

function socksLaundering(K: number, C: number[], D: number[]): number {
  const clean = C.reduce((map, sock) => {
    map.set(sock, (map.get(sock) ?? 0) + 1);
    return map;
  }, new Map<number, number>());
  const dirty = D.reduce((map, sock) => {
    map.set(sock, (map.get(sock) ?? 0) + 1);
    return map;
  }, new Map<number, number>());

  let k = K;
  // odds
  dirty.forEach((socks, key) => {
    // 더러운 쪽을 순회하면서
    // 꺠끗한 쪽이 홀수인거부터 채워넣는다
    // 그럼 꺠끗한 쪽의 짝을 최대한 맞춘 상태가 됨
    if (k < 1) return;
    const cleanSocks = clean.get(key);
    if (cleanSocks && cleanSocks % 2 === 1) {
      // 홀수면서 더러운 짝이 있으면 가져옴
      dirty.set(key, socks - 1);
      clean.set(key, cleanSocks + 1);
      k -= 1;
    } else if (cleanSocks) {
      // 홀수인데 더러운 짝이 없는 건 버림
      clean.set(key, cleanSocks - 1);
    }
  });
  // Rest pair
  dirty.forEach((socks, key) => {
    // 여기서부턴 짝으로 가져와야 함
    if (k < 2) return; // 두번 빨래할 수 있어야 함
    if (socks < 2) return; // 두 개 이상 있어야 함
    const pairs = Math.floor(socks / 2);
    const cleanSocks = Math.min(pairs, Math.floor(k / 2)) * 2;
    clean.set(key, (clean.get(key) ?? 0) + cleanSocks);
    k -= cleanSocks;
  });

  let acc = 0;
  clean.forEach((socks) => {
    acc += Math.floor(socks / 2);
  });
  return acc;
}

//   runTestCase({
//     solution: solution,
//     tcList: [
//       // odd clean, odd dirty
//       {
//         params: [3, [1, 2], [8, 8, 8, 8, 9]],
//         expect: 1,
//       },
//       {
//         params: [5, [2, 3, 4], [2, 2, 2, 2, 2]],
//         expect: 3,
//       },
//       {
//         params: [2, [1], [1]], // C 경계값
//         expect: 1,
//       },
//       {
//         params: [2, [1], [2]], // C 경계값
//         expect: 0,
//       },
//       {
//         params: [0, [1, 2, 1, 1], [1, 4, 3, 2, 4]], // k 경계값
//         expect: 1,
//       },
//       {
//         params: [2, [1, 2, 1, 1], [1, 4, 3, 2, 4]],
//         expect: 3,
//       },
//       {
//         params: [5, [1, 2, 1, 1], [1, 4, 3, 2, 4]],
//         expect: 4,
//       },
//     ],
//   });

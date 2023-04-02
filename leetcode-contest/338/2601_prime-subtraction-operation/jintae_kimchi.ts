/**
 * https://leetcode.com/problems/prime-subtraction-operation
 * Runtime 160 ms Beats 8.33% Memory 49.3 MB Beats 25%
 *
 * 풀다보니 돌이킬 수 없는 코드가 짜여지고 있었는데 풀리긴 할 것 같아 강행
 * 다시풀기 필수
 */

function primeSubOperation(nums: number[]): boolean {
  const map = new Map<number, number>(); // targetNum, maxPrime
  // map.set(0, 0);
  // map.set(1, 1);
  map.set(2, 2);
  map.set(3, 3);
  map.set(4, 3);
  map.set(5, 5);
  map.set(-1, 5); // trick. 최대소수를 가진 키 중 최대인덱스값
  // 특정 숫자 기준 최대 소수를 모두 저장하는 방법밖에 모르겠음

  const updateMap = (num: number, map: Map<number, number>) => {
    // 특정 숫자까지 소수계산결과 업데이트
    if (map.has(num)) {
      return;
    }
    // 아직 기록되지 않은 값이므로 max값부터 num까지 계산
    const lastKey = map.get(-1)!;
    let idx = lastKey;
    while (idx < num) {
      let prime = map.get(map.get(-1)!)!;
      // num-1 까지 계산
      // 초기값 기준 5 index p=5
      // 10이 num이라고 가정하면
      // 6~9까지 기록

      // 6이 소수인지 판단하려면 %2, %3, %4, %5 => 제곱근으로 범위 좁히기
      // 소수면 기록 아니면 다음 수 검사
      idx++;
      let modVal = 2;
      const limit = Math.sqrt(idx);
      let isPrime = true;
      while (limit >= modVal) {
        if (idx % modVal === 0) {
          isPrime = false;
          break;
        }
        modVal++;
      }
      // 현재 값이 소수면 기록 아니면 이전 값 유지
      if (isPrime) {
        map.set(idx, idx);
      } else {
        map.set(idx, prime);
      }
      map.set(-1, idx);
    }
  };

  // 정렬 없고 인덱스를 한번씩만 순회
  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i];
    const prev = nums[i - 1];

    // update array
    updateMap(num, map);

    let sub = num - map.get(num - 1)!; // num보다 작은 소수최대값 중에 가능한 거
    if (sub <= prev) {
      // 이전 값보다 크면서 가장 작은 값을 찾아야 함
      for (let j = num - 1; j > 0; j--) {
        const nextMax = map.get(j)!;
        const nextSub = num - nextMax;
        if (nextSub > prev) {
          sub = nextSub;
          break;
        }
      }
    }
    if (i === 0 || prev < sub) {
      nums[i] = sub > 0 ? sub : num;
    }
    // compare
    if (prev >= nums[i]) {
      return false;
    }
  }

  if (nums.length > 1) {
    return nums[nums.length - 1] > nums[nums.length - 2];
  }
  return true;
}

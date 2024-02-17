/**
 * https://leetcode.com/problems/relative-sort-array/description/
 * Runtime 45 ms Beats 100.00% of users with TypeScript
 * Memory 51.56 MB Beats 35.71% of users with TypeScript
 *
 * easy | Array | Hash Table | Sorting | Counting Sort
 */

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = new Map<number, number>();
  // 필터 배열 초기화
  arr2.forEach((val) => {
    map.set(val, 0);
  });
  // 실제 배열의 요소들의 개수를 필터배열에 기록
  // 필터배열 요소가 아니면 뒤에 붙혀야 하므로 따로 저장
  const remains: number[] = [];
  arr1.forEach((val) => {
    if (map.has(val)) {
      map.set(val, map.get(val)! + 1);
    } else {
      remains.push(val);
    }
  });

  // 뒷 배열 정렬
  remains.sort((a, b) => a - b);

  // 필터 배열 순회하면서 카운트한 개수만큼 결과배열에 추가
  const sorted: number[] = [];
  arr2.forEach((val) => {
    const counted = map.get(val) ?? 0;
    for (let i = 0; i < counted; i++) {
      sorted.push(val);
    }
  });

  // 병합하여 리턴
  return sorted.concat(remains);
}
function relativeSortArray_solution(arr1: number[], arr2: number[]): number[] {
  const N = arr2.length;
  // 필터배열(arr2) 의 인덱스를 맵으로 만듬
  const lookup = new Map();
  arr2.forEach((a, i) => {
    lookup.set(a, i);
  });
  return arr1.sort((a, b) => {
    // 필터배열의 인덱스와 비교함
    // 필터배열에 없으면 최대인덱스 + 원래 값을 적용
    a = lookup.has(a) ? lookup.get(a) : N + a;
    b = lookup.has(b) ? lookup.get(b) : N + b;
    return a - b;
  });
}

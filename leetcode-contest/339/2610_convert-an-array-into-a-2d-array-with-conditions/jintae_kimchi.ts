/**
 * https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
 * Runtime 102 ms Beats 60% Memory 48.6 MB Beats 48%
 *
 * 문제)
 * flat 한 정수배열이 주어짐
 * 중복되지 않게 하나씩 뽑아서 row 배열을 구성함
 * 입력배열의 요소가 모두 없어질 때까지 진행
 * row 개수를 최소한으로 만든 실제 row[] 배열을 리턴
 *
 * 해설)
 * 맵으로 "키:개수" 형식으로 만든 후
 * 중복되지 않게 가능한 많은 값을 뽑아서 row로 만듬
 * 뽑은 뒤 개수를 감소하거나 키를 제거하면서 진행
 *
 * nums 순회: N
 * 키 순회: N
 * O(N^2)
 *
 * 시간적으로 더 개선하려면
 * 해시맵을 특정 값이 들어간 마지막 row를 알게 하면 N으로 가능
 * (아래 findMatrix2 참고)
 *
 * 공간적으로 더 개선하려면
 * 해시맵을 사용하지 않고 바로 넣는 로직으로 바꾸면 된다.
 *
 * (근데 문제에서 200개 이하로 하기 때문에 성능적으로 터질 순 없긴 함 ㅎ)
 */

function findMatrix(nums: number[]): number[][] {
  // 맵으로 만들고
  const map = nums.reduce((map, num) => {
    map.set(num, (map.get(num) ?? 0) + 1);
    return map;
  }, new Map<number, number>());
  let counter = 0;
  const ans: number[][] = [];
  // 한줄씩 넣어가는 방식
  while (counter < nums.length) {
    const row: number[] = [];
    map.forEach((v, k) => {
      if (v) {
        row.push(+k);
        if (v > 1) {
          map.set(k, v - 1);
        } else {
          map.delete(k);
        }
      }
    });

    if (row.length) {
      ans.push(row);
      counter += row.length;
    }
  }
  return ans;
}

/**
 * Runtime 82 ms Beats 100% Memory 48.4 MB Beats 56%
 */
function findMatrix2(nums: number[]): number[][] {
  // num, rowidx
  const history = new Map<number, number>();
  const ans: number[][] = [];
  nums.forEach((num) => {
    if (!history.has(num)) {
      history.set(num, 0);
    } else {
      history.set(num, history.get(num)! + 1);
    }
    ans[history.get(num)!].push(num);
  });

  return ans;
}

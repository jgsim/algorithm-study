(function () {
  /**
   * https://app.codility.com/demo/results/training4NDPZN-FEE/
   * Task Score 100% Correctness 100% Performance Not assessed
   *
   * 문제)
   * @param A 정수형 배열이 주어짐
   * @param K K 번 만큼 뒤에있는 걸 앞에 붙임
   * @returns 최종 결과 배열 리턴
   *
   * 풀이)
   * 나머지 연산을 통해 최종 사이클의 진행만 함
   * 햇갈리기 때문에 표로 정리하고 디버깅하자
   * 잘라야 할 위치가 정해지면 그 위치 뒤의 원소를 기준으로 잘라내서 왼쪽에 붙인다
   */

  /**
   * 0  0   0%4=0
   * 1  1   1%4=1
   * 2  2   2%4=2
   * 3  3   3%4=3
   * 4  0   4%4=0
   * 5  1   5%4=1
   * 6  2   6%4=2
   * 7  3   7%4=3
   * 8  0   8%4=0
   * 9  1   9%4=1
   */
  function solution(A: number[], K: number): number[] {
    const len = A.length;
    const arr: number[] = [];
    for (let i = 0; i < K % len; i++) {
      if (A.length) arr.push(A.pop()!);
    }
    return arr.reverse().concat(A);
  }
})();

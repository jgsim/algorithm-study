/**
 * https://leetcode.com/problems/cache-with-time-limit/
 * Runtime 59 ms Beats 79.23% Memory 42.7 MB Beats 71.58%
 *
 * 문제)
 * 해시맵을 만드는데 duration 옵션을 줘서 키 삭제 기능을 갖추어야 함
 * set: 키-값-타이머 등록. 같은키인데 실행중인 타이머가 있으면 덮어씌움
 * get: 등록된 키의 값이 있으면 리턴 없으면 -1 리턴
 * count: 현재 유효값의 총 개수
 *
 * 풀이)
 * setTimeout - clearTimeout - Map 을 적절히 사용함
 * 나는 맵을 두개 사용했지만 하나로 묶어서 사용하는 게 깔끔해보인다
 * 다른 풀이로는 Date.now() 값을 이용하여 계산하는 방식이 있음
 */

class TimeLimitedCache {
  map: Map<number, number>;
  tmap: Map<number, any>;
  constructor() {
    this.map = new Map<number, number>();
    this.tmap = new Map<number, any>();
  }

  set(key: number, value: number, duration: number): boolean {
    // 기존에 실행중인 타이머 있으면 삭제
    const hasPrev = this.tmap.has(key);
    hasPrev && clearTimeout(this.tmap.get(key));

    // 키-값 등록
    this.map.set(key, value);
    // 새로운 타이머 등록
    const timeoutKey = setTimeout(() => {
      this.map.delete(key);
      this.tmap.delete(key);
    }, duration);
    this.tmap.set(key, timeoutKey);

    return hasPrev;
  }

  get(key: number): number {
    return this.map.get(key) ?? -1;
  }

  count(): number {
    return this.map.size;
  }
}

const cache = new TimeLimitedCache();
cache.set(1, 2, 1000);
cache.set(1, 3, 1000);
console.log(cache.get(1));
console.log(cache.count());

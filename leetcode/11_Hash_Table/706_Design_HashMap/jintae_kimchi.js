/**
 * https://leetcode.com/problems/design-hashmap/
 * Runtime: 278 ms, faster than 40.91% of JavaScript online submissions for Design HashMap.
 * Memory Usage: 52.4 MB, less than 54.78% of JavaScript online submissions for Design HashMap.
 * 성능은 중간인데 솔루션 코드랑 거의 같아서 ㅇㅋ
 *
 * 문제설명
 * 해시맵을 디자인하라 다른 빌트인 기능 없이.
 * 구현체에 대한 설명은 각 주석을 확인
 */

/**
 * initializes the object with an empty map.
 * 해시 자료구조 초기화
 */
var MyHashMap = function () {
  this.map = {};
};

/**
 * inserts a (key, value) pair into the HashMap.
 * If the key already exists in the map, update the corresponding value.
 *
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

/**
 * returns the value to which the specified key is mapped,
 * or -1 if this map contains no mapping for the key.
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const value = this.map[key];
  // null 도 입력한 값으로 치기로 함
  return value !== undefined ? value : -1;
};

/**
 * removes the key and its corresponding value if the map contains the mapping for the key.
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.map[key];
};

const tcList = [
  () => {
    const map = new MyHashMap();
    map.put(1, 1);
    map.put(2, 2);
    map.get(1);
    map.get(3);
    map.put(2, 1);
    map.get(2);
    map.remove(2);
    map.get(2);
  },
];
tcList.forEach((tc) => tc());
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

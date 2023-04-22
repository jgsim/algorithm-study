/**
 * https://leetcode.com/problems/check-if-object-instance-of-class/description/
 * 솔루션 배낌
 *
 * 자바스크립트 상속은 프로토타입 체인으로 이루어짐
 * getPrototypeOf 함수를 이용하면 현재 객체의 프로토타입을 추적할 수 있음
 */

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  while (obj != null) {
    if (obj.constructor === classFunction) {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }
  return false;
}
class Animal {}
class Dog extends Animal {}

checkIfInstanceOf(new Dog(), Animal);

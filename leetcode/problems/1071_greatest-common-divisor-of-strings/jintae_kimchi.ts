/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
 * Runtime 59 ms Beats 63.09% of users with TypeScript
 * Memory 51.65 MB Beats 65.73% of users with TypeScript
 *
 * easy | Math, String
 *
 * 두 문자열 길이로 최대공약수 구하기
 *
 *  a | num1               num2
 *  b | num1/a             num2/a
 *    -----------------------------------
 *      (num1/a/b) as x   (num2/a/b) as y
 *
 * gcd = a * b
 * num1 * y = num2 * x
 * 이걸 근거로 풀면 됨
 */

function gcdOfStrings(str1: string, str2: string): string {
  // 유클리드 호제법 "gcd(a, b) === gcd(b, a % b)"
  const euclid_gcd = (a: number, b: number) => {
    while (b !== 0) {
      const tmp = b;
      b = a % b;
      a = tmp;
    }
    return a;
  };
  // const gcd = (a: number, b: number) => {
  //     let gcd = 1;
  //     if (a < 2 || b < 2) return gcd;
  //     let div = 2;
  //     while (div <= a || div <= b) {
  //         if (a % div === 0 && b % div === 0) {
  //             a = a / div;
  //             b = b / div;
  //             gcd *= div;
  //             div = 2;
  //         } else {
  //             div++;
  //         }
  //     }
  //     return gcd;
  // };

  // 같은 문자열인지 판별하는 방법
  if (str1 + str2 !== str2 + str1) return "";
  // 부분문자열 최대길이 구하기
  return str1.slice(0, euclid_gcd(str1.length, str2.length));
}

function gcdOfStrings_original(str1: string, str2: string): string {
  const gcd = (a: number, b: number) => {
    let gcd = 1;
    if (a < 2 || b < 2) return [gcd, a, b];
    let div = 2;
    while (div <= a || div <= b) {
      if (a % div === 0 && b % div === 0) {
        a = a / div;
        b = b / div;
        gcd *= div;
        div = 2;
      } else {
        div++;
      }
    }
    return [gcd, a, b];
  };

  const [min, a, b] = gcd(str1.length, str2.length);
  if (str1.repeat(b) !== str2.repeat(a)) {
    return "";
  }
  return str1.slice(0, min);
}

// runTestCase({
//     solution: gcdOfStrings,
//     tcList: [
//         {
//             params: ["ABCABC", "ABC"],
//             expect: "ABC",
//         },
//         {
//             params: ["ABABAB", "ABAB"],
//             expect: "AB",
//         },
//         {
//             // AB, ABAB 모두 가능. 문제에서 가능한 긴 값을 찾는 것이므로 ABAB
//             params: ["ABABABABABAB", "ABAB"],
//             expect: "ABAB",
//         },
//         {
//             params: ["LEET", "CODE"],
//             expect: "",
//         },
//     ],
// });

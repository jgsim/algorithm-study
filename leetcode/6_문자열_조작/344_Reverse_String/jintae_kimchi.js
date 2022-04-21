/**
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * Do not return anything, modify s in-place instead.
 */
function reverseString_1(s) {
    const len = s.length;
    for (let i = 0; i < len / 2; i++) {
        [s[i], s[len - 1 - i]] = [s[len - 1 - i], s[i]];
        // odd
        // a, b, c, d, e
        // [0, 5-
        // even
        // single
    }
}
/**
 * Runtime: 167 ms, faster than 22.99% of TypeScript online submissions for Reverse String.
Memory Usage: 50.1 MB, less than 56.41% of TypeScript online submissions for Reverse String.

 */

function reverseString_2(s) {
    const len = s.length;
    const limit = len / 2;
    let left = 0;
    let right = len - 1;
    for (; left < limit; ) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}
/**
 * Runtime: 184 ms, faster than 14.15% of TypeScript online submissions for Reverse String.
Memory Usage: 49.8 MB, less than 78.25% of TypeScript online submissions for Reverse String.
 */

function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    for (; left < right; ) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}
/**
 * Runtime: 129 ms, faster than 59.24% of TypeScript online submissions for Reverse String.
Memory Usage: 50 MB, less than 64.72% of TypeScript online submissions for Reverse String.
 */

const tcList = [
    [
        ["h", "e", "l", "l", "o"],
        ["o", "l", "l", "e", "h"],
    ],
    [
        ["H", "a", "n", "n", "a", "h"],
        ["h", "a", "n", "n", "a", "H"],
    ],
];

tcList.forEach((tc) => {
    reverseString(tc[0]);
    console.log(tc[0].join("") === tc[1].join("") ? "pass" : "fail");
});

/**
 * 성능이 별로라서 리펙토링하여 재시도하고 최대한 개선해봤지만 80ms 나온 상위 코드가 내 첫 시도 코드랑 동일했음;
 */

/**
 * https://leetcode.com/problems/flipping-an-image/description/
 * Runtime 134 ms Beats 5.68% of users with TypeScript
 * Memory 44.56 MB Beats 88.64% of users with TypeScript
 *
 * easy | array | two pointers | bit manipulation | matrix | simulation
 */

function flipAndInvertImage(image: number[][]): number[][] {
  const n = image.length;
  const mid = n / 2;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < mid; c++) {
      // swap, invert
      const tmp = image[r][c];
      image[r][c] = image[r][n - 1 - c] ^ 1;
      image[r][n - 1 - c] = tmp ^ 1;
    }
  }
  return image;
}

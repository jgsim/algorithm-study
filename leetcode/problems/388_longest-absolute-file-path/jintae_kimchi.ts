/**
 * https://leetcode.com/problems/longest-absolute-file-path/description/
 * Runtime 62 ms Beats 58.33% Memory 43.5 MB Beats 58.33%
 *
 * stack, string
 */

function lengthLongestPath(input: string): number {
  const stack = [[-1, 0]];
  const items = input.split("\n");
  const dirCh = "/";
  let maxLen = 0;
  items.forEach((item) => {
    const level = item.lastIndexOf("\t") + 1; // 0
    const name = item.substring(level); // dir
    while (stack.length > level + 1) {
      stack.pop();
    }
    const stackLast = stack[stack.length - 1];
    const currentStackItem = [level, stackLast[1] + name.length + dirCh.length];
    stack.push(currentStackItem);

    if (name.includes(".")) {
      maxLen = Math.max(maxLen, currentStackItem[1] - 1);
    }
  });

  return maxLen;
}

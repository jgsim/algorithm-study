/**
 * n 값은 1 ~ 16
 * arr1, arr2 는 정수배열 => 이진수화하여 마스킹해야함
 * 출력양식에서 공백이 뒤에 있는건 trim 처리
 */
const secretMap = (n, arr1, arr2) => {
  // 병합은 or 계산하면 바로 얻어짐
  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i] | arr2[i];
  }

  // 얻어진 배열을 이진수 문자열로
  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i]
      .toString(2)
      .padStart(n, " ")
      .replaceAll("1", "#")
      .replaceAll("0", " ");
  }

  return arr1;
};

const { runTestCase } = require("../../../jtkim/leetcodeTesting");
runTestCase(
  [
    {
      params: [5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]],
      expect: ["#####", "# # #", "### #", "#  ##", "#####"],
    },
    {
      params: [6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]],
      expect: ["######", "###  #", "##  ##", " #### ", " #####", "### # "],
    },
  ],
  secretMap
);

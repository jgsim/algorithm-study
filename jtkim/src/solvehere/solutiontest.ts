import { runTestCase } from "../leetcodeTesting";

const solution = (x: number) => {
  return x.toString();
};

runTestCase<number, string>({
  tcList: [
    {
      params: [1],
      expect: "1",
    },
    {
      params: [2],
      expect: "2",
    },
    {
      params: [3],
      expect: "3",
    },
    {
      params: [4],
      expect: "4",
    },
    {
      params: [5],
      expect: "5",
    },
  ],
  solution: solution,
});

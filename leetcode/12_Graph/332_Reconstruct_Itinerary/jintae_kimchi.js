/**
 * https://leetcode.com/problems/reconstruct-itinerary/
 *
 * solution
 * Runtime: 125 ms, faster than 48.79% of JavaScript online submissions for Reconstruct Itinerary.
 * Memory Usage: 48.8 MB, less than 50.97% of JavaScript online submissions for Reconstruct Itinerary.
 *
 * 문제설명
 * [출발지, 도착지] 정보가 담긴 티켓 목록이 주어진다
 * JFK에서 출발하면서 모든 티켓을 소모하여 여행하는 경로를 계산하라
 * 중복경우에 대해선 사전식 순서를 적용하라
 *
 * 참고자료 사전식 순서란?
 * https://blog.naver.com/PostView.naver?blogId=jaurim1011&logNo=222146572077&parentCategoryNo=108&categoryNo=&viewDate=&isShowPopularPosts=true&from=search
 */

const assert = require("assert");
const { runInContext } = require("vm");

/**
 * tc가 길어길주록 기하급수적으로 오래걸림..
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const startTickets = tickets.filter(([start]) => start === "JFK");
  const len = tickets.length;
  const answers = [];
  const removeArrived = (tickets, removeTarget) => {
    // 같은 행선지 티켓이 중복으로 존재할 수 있다는거~ ㅋㅋ
    const idx = tickets.findIndex(
      (ticket) => ticket[0] === removeTarget[0] && ticket[1] === removeTarget[1]
    );
    if (idx < 0) {
      console.error("uncontrolled condition");
    }

    return [...tickets.slice(0, idx), ...tickets.slice(idx + 1)];
  };
  const fn = (passport, currentToken, remainTickets) => {
    if (passport.length === len) {
      answers.push([...passport.slice(0), currentToken[1]]);
      return;
    }
    if (passport.length > len) {
      console.error("uncontrolled condition");
      return;
    }
    // current 기준으로 갈 수 있는 케이스 조사
    const targetTickets = remainTickets.filter(
      (ticket) => ticket[0] === currentToken[1]
    );
    if (!targetTickets) {
      console.error("uncontrolled condition");
      return;
    }
    // 각 티켓으로 여행
    for (let i = 0; i < targetTickets.length; i++) {
      passport.push(targetTickets[i][0]);
      fn(
        passport,
        targetTickets[i],
        removeArrived(remainTickets, targetTickets[i])
      );
      passport.pop();
    }
  };
  for (let i = 0; i < startTickets.length; i++) {
    const startTicket = startTickets[i];
    fn([startTicket[0]], startTicket, removeArrived(tickets, startTicket));
  }

  // 정렬처리
  answers.sort((rootA, rootB) =>
    rootA.join(",").localeCompare(rootB.join(","))
  );

  // const test = [
  //   ["JFK", "SFO"],
  //   ["JFK", "ATL"],
  // ].sort((rootA, rootB) => rootA.join(",").localeCompare(rootB.join(",")));

  return answers[0];
};

const solution = (tickets) => {
  // 데이터 세팅
  // { [key]: [...value], [key]: [...value], ... }
  // 도착지 내림차순 기준으로 정렬하여 추가함 (shift 대신 pop 쓰기 위해)
  const graph = {};
  // tickets = tickets.sort((a, b) => a[1].localeCompare(b[1])).reverse();
  tickets = tickets.sort().reverse();
  tickets.forEach((ticket) => {
    graph[ticket[0]] = tickets
      .filter((t) => t[0] === ticket[0])
      .map((t) => t[1]);
  });

  const route = [];
  const dfs = (key) => {
    while (graph[key] && graph[key].length) {
      dfs(graph[key].pop());
    }
    route.push(key);
  };
  dfs("JFK");
  return route.reverse();
};

const doTest = (tcList, solution) => {
  tcList.forEach(([tickets, expect]) => {
    const result = solution(tickets);
    assert.deepEqual(result, expect);
    console.log("pass");
  });
  console.log("done");
};
const tcList = [
  [
    [
      ["EZE", "AXA"],
      ["TIA", "ANU"],
      ["ANU", "JFK"],
      ["JFK", "ANU"],
      ["ANU", "EZE"],
      ["TIA", "ANU"],
      ["AXA", "TIA"],
      ["TIA", "JFK"],
      ["ANU", "TIA"],
      ["JFK", "TIA"],
    ],
    [
      "JFK",
      "ANU",
      "EZE",
      "AXA",
      "TIA",
      "ANU",
      "JFK",
      "TIA",
      "ANU",
      "TIA",
      "JFK",
    ],
  ],
  [
    [
      ["MUC", "LHR"],
      ["JFK", "MUC"],
      ["SFO", "SJC"],
      ["LHR", "SFO"],
    ],
    ["JFK", "MUC", "LHR", "SFO", "SJC"],
  ],
  [
    [
      ["JFK", "SFO"],
      ["JFK", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "JFK"],
      ["ATL", "SFO"],
    ],
    ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"],
  ],
];
// doTest(tcList, findItinerary);
doTest(tcList, solution);

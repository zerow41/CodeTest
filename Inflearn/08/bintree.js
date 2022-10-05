function solution(v) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      //   answer += v + " "; //전위
      DFS(v * 2);
      //   answer += v + " "; //중위
      DFS(v * 2 + 1);
      answer += v + " "; //후위
    }
  }
  DFS(v);
  return answer;
}

console.log(solution(1));

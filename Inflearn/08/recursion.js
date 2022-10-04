function solution(n) {
  function DFS(x) {
    if (x === 0) return;
    else {
      DFS(x - 1);
      console.log(x);
    }
  }
  DFS(n);
}

solution(3);

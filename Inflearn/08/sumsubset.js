function solution(arr) {
  let answer = "NO",
    ch = 0;
  let total = arr.reduce((a, b) => a + b);
  function DFS(L, sum) {
    console.log(L, sum);
    if (ch) return;
    if (L === arr.length) {
      if (total - sum === sum) {
        answer = "YES";
        ch = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

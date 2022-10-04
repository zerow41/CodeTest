function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timelines = [];
  for (let i = 0; i < times.length; i++) {
    timelines.push([times[i][0], "s"]);
    timelines.push([times[i][1], "e"]);
  }
  timelines.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  console.log(timelines);
  let cnt = 0;
  for (let x of timelines) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));

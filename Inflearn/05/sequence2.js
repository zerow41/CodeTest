function solution(m, arr) {
  let answer = 0;
  let pi = 0;
  let sum = 0;

  for (let pj = 0; pj < arr.length; pj++) {
    sum += arr[pj];
    while (sum > m) {
      sum -= arr[pi++];
    }
    answer += pj - pi + 1;
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

function solution(m, arr) {
  let answer = 0;
  let pi = 0;
  let sum = 0;

  // pi~pj의 합이 m보다 크면 pi 이동, 같으면 answer++
  for (let pj = 0; pj < arr.length; pj++) {
    sum += arr[pj];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[pi++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

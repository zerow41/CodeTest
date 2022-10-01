function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  // let answer = Number.MIN_SAFE_INTEGER;
  //   let pi = 0;
  //   while (pi < arr.length - k) {
  //     let sum = 0;
  //     for (let pj = pi; pj < pi + k; pj++) {
  //       sum += arr[pj];
  //     }
  //     if (sum > answer) answer = sum;
  //     pi++;
  //   }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

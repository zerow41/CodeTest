const solution = (arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; (j = n); j++) {
      sum1 += arr[i][j]; //가로
      sum2 += arr[j][i]; //세로
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  //   sum3 = 0,
  //   sum4 = 0;
  // for (let i = 0; i < arr[0].length; i++) {
  //   let sum = 0;
  //   for (let j = 0; j < arr[0].length; j++) {
  //     sum += arr[i][j]; //가로합
  //     if (i + j === 4) sum3 += arr[i][j];
  //     if (i === j) sum4 += arr[i][j];

  //     if (sum > answer) answer = sum;
  //     else if (sum3 > answer) answer = sum3;
  //     else if (sum4 > answer) answer = sum4;
  //   }
  //   sum = 0;
  //   for (let k = 0; k < arr[0].length; k++) {
  //     sum += arr[k][i]; //세로합
  //     if (sum > answer) answer = sum;
  //   }
  // }

  return answer;
};
let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

solution = (n, arr) => {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    // let sum = 0,
    //   tmp = x;
    // while (tmp) {
    //   sum += tmp % 10;
    //   tmp = Math.floor(tmp / 10);
    // }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  //   for (let i = 0; i < n; i++) {
  //     let sum = 0,
  //       num = arr[i];
  //     while (num > 0) {
  //       sum += num % 10;
  //       num = Math.floor(num / 10);
  //     }
  //     if (sum >= max && answer > arr[i]) {
  //       max = sum;
  //       answer = arr[i];
  //     }
  //   }

  return answer;
};

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

const solution = (arr) => {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      //== or === 통일
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  //   let sum = 0;
  //   let minN = [];
  //   for (let i = 0; i < 7; i++) {
  //     if (arr[i] % 2 !== 0) {
  //       minN = [...minN, arr[i]];
  //       sum += arr[i];
  //     }
  //   }
  //   answer[0] = sum;
  //   answer[1] = Math.min(...minN);
  return answer;
};
arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

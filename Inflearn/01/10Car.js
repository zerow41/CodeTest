const solution = (n, arr) => {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === n) answer += 1;
  }
  return answer;
};
arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(7, arr));

const solution = (n) => {
  let answer = Math.ceil(n / 12);
  //ceil 올림, round 반올림
  //answer = parseInt(n / 12) + 1;
  return answer;
};
console.log(solution(25));

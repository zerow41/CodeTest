const solution = (str) => {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let s of str) {
    if (s.length > max) {
      max = s.length;
      answer = s;
    }
  }

  return answer;
};
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

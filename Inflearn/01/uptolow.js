const solution = (str) => {
  let answer = "";

  for (let x of str) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  return answer;
};
let str = "ItisTimeToStudy";
console.log(solution(str));

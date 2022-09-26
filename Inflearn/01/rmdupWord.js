const solution = (str) => {
  let answer;

  answer = str.filter((x, i) => {
    return str.indexOf(x) === i;
  });

  //   for (let s of str) {
  //     if (!answer.includes(s)) answer.push(s);
  //   }

  return answer;
};
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

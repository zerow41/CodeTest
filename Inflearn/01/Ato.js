const solution = (str) => {
  let answer = "";
  for (let x of str) {
    if (x === "A") answer += "#";
    else answer += x;
  }

  //let answer = str.replaceAll("A", "#");
  //str.replace(/A/g, '#');

  return answer;
};
let str = "BANANA";
console.log(solution(str));

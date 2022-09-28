solution = (str) => {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  //let answer = Number(str.replace(/[^0-9]/g, ""));

  return answer;
};

let str = "g0en2T0s8eSoft";
console.log(solution(str));

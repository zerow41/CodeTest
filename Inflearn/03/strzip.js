solution = (str) => {
  let answer = "";
  let cnt = 1;
  str += " ";

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i];
      if (cnt > 1) answer += String(cnt);
      //   if (cnt === 1) cnt = "";
      //   answer += str[i] + cnt;
      cnt = 1;
    }
  }
  return answer;
};

let str = "KKHSSSSSSSE";
console.log(solution(str));

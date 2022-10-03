function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer++;
    }
  }
  //   stack.push(s[0]);
  //   for (let i = 1; i < s.length; i++) {
  //     if (s[i - 1] + s[i] === "()") {
  //       stack.pop();
  //       answer += stack.length;
  //     } else if (s[i - 1] + s[i] === "))") {
  //       stack.pop();
  //       answer++;
  //     } else stack.push(s[i]);
  //   }

  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));

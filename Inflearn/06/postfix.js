function solution(s) {
  let answer = 0;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }

  // for (let x of s) {
  //   if (x === "+") {
  //     stack.push(stack.pop() + stack.pop());
  //   } else if (x === "*") {
  //     stack.push(stack.pop() * stack.pop());
  //   } else if (x === "-") {
  //     let n1 = stack.pop();
  //     stack.push(stack.pop() - n1);
  //   } else if (x === "/") {
  //     n1 = stack.pop();
  //     stack.push(stack.pop() / n1);
  //   } else stack.push(Number(x));
  // }
  answer = stack[0];

  return answer;
}

let str = "352+*9-";
console.log(solution(str));

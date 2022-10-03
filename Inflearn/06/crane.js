function solution(arr1, arr2) {
  let answer = 0;
  let stack = [];
  arr2.forEach((pos) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i][pos - 1] !== 0) {
        let tmp = arr1[i][pos - 1];
        arr1[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  // let tmp = [];
  // for (let i = 0; i < arr1.length; i++) {
  //   let tmp2 = [];
  //   for (let j = 0; j < arr1[0].length; j++) {
  //     if (arr1[4 - j][i] !== 0) tmp2.push(arr1[4 - j][i]);
  //   }
  //   tmp.push(tmp2);
  // }

  // for (let x of arr2) {
  //   if (tmp[x - 1].length !== 0) stack.push(tmp[x - 1].pop());
  //   if (stack[stack.length - 1] === stack[stack.length - 2]) {
  //     answer += 2;
  //     stack.pop();
  //     stack.pop();
  //   }
  // }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

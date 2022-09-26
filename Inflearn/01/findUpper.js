const solution = (str) => {
  let answer = 0;
  for (let x of str) {
    if (x === x.toUpperCase()) answer++;
    // let num = x.charCodeAt();
    // if (num >= 65 && num <= 90) answer++;
  }
  //   let upstr = str.toUpperCase();
  //   for (let x of str) {
  //     for (let y of upstr) {
  //       if (x === y) answer++;
  //     }
  //   }
  return answer;
};
let str = "KoreaTimeGood";
console.log(solution(str));

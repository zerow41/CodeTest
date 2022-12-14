function solution(str) {
  let answer = "";
  let sh = new Map();

  for (let x of str) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sh) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  //   let student = "ABCDE";
  //   let max = Number.MIN_SAFE_INTEGER;
  //   for (let k of student) {
  //     max = Math.max(str.split(k).length - 1, max);
  //     if (str.split(k).length > max) answer = k;
  //   }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

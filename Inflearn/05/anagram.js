function solution(str1, str2) {
  let answer = "YES";
  let sh = new Map();

  for (let x of str1) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }
  for (let x of str2) {
    if (!sh.has(x) || sh.get(x) == 0) return "NO";
    sh.set(x, sh.get(x) - 1);
  }

  //   for (let x of str1) {
  //     if (sh.has(x)) sh.set(x, sh.get(x) + 1);
  //     else sh.set(x, 1);
  //   }
  //   for (let y of str2) {
  //     if (sh.has(y)) sh.set(y, sh.get(y) - 1);
  //     else return "NO";
  //   }
  //   for (let [k, v] of sh) {
  //     if (v !== 0) {
  //       answer = "NO";
  //       break;
  //     }
  //   }

  return answer;
}

let a = "abaCC";
let b = "Caaaeb";
console.log(solution(a, b));

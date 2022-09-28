solution = (str) => {
  let answer = "YES";
  let s = str.toLowerCase();
  let n = Math.floor(str.length / 2);
  for (let i = 0; i < n; i++) {
    if (s[i] !== s[str.length - 1 - i]) answer = "NO";
  }
  //   let rstr = str.toLowerCase().split("").reverse().join("");
  //   if (str.toLowerCase() !== rstr) answer = "NO";

  return answer;
};

let str = "label";
console.log(solution(str));

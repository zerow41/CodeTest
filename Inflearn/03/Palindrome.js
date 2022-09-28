solution = (str) => {
  let answer = "YES";
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  if (str !== str.split("").reverse().join("")) return "NO";

  // str = str.toLowerCase().match(/[a-z]/g);
  // if (str.join("") !== str.reverse().join("")) return "NO";
  return answer;
};

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

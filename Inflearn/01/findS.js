const solution = (str, s) => {
  let answer = 0;

  for (let x of str) {
    if (x === s) answer++;
  }
  //answer=str.split(s).length-1;

  // 중복 문자 개수 세기
  // let pos=str.indexOf('k')
  // while(pos!==-1) {
  //   answer++;
  //   pos=s.indexOf('k', pos+1);
  // }
  return answer;
};
let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

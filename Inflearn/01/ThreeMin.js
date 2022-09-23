const solution = (a, b, c) => {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  // if(a<b){
  //   if(a<c) answer=a;
  //   else answer=c;
  // } else {
  //   if(b<c) answer=b;
  //   else answer=c;
  // }

  return answer;
};
console.log(solution(2, 5, 1));

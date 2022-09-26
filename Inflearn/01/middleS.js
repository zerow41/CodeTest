const solution = (str) => {
  let answer;
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 == 1) answer = str.substr(mid, 1);
  else answer = str.substr(mid - 1, 2);

  //   let mid = Math.ceil(str.length / 2);
  //   if (str.length % 2 === 0) answer = str[mid - 1] + str[mid];
  //   else answer = str[mid - 1];

  return answer;
};
console.log(solution("study"));

const solution = (arr) => {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  // min 가장 큰 안정적인 수
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  // Math.min 최소값, Math.max 최댓값
  // 인자 배열 객체 x -> ...arr 사용 or .apply(null,arr)

  //   let answer = arr[0];
  //   for (let i = 1; i < 7; i++) {
  //     if (arr[i - 1] < answer) answer = arr[i - 1];
  //   }
  return answer;
};
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

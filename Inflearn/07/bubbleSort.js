function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  //   let answer = [];
  //   let n = arr.length;
  //   for (let i = 0; i < n; i++) {
  //     for (let j = 1; j < n; j++) {
  //       if (arr[j - 1] > arr[j]) {
  //         [arr[j], (arr[j - 1] = arr[j - 1]), arr[j]];
  //       }
  //     }
  //   }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

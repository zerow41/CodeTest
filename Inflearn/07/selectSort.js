function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  //   let answer = [];
  //   let n = arr.length;

  //   for (let j = 0; j < n; j++) {
  //     let min = Number.MAX_SAFE_INTEGER;
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i] < min) {
  //         min = arr[i];
  //       }
  //     }
  //     answer.push(min);
  //     arr.splice(arr.indexOf(min), 1);
  //   }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

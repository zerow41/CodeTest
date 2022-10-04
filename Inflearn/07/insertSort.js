function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  // let answer = [];
  // let n = arr.length;

  // for (let i = 1; i < n; i++) {
  //   let piv = arr[i];
  //   for (let j = i - 1; j >= 0 && arr[j] > piv; j--) {
  //     arr[j + 1] = arr[j];
  //     arr[j] = piv;
  //   }
  // }
  // answer = arr;
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

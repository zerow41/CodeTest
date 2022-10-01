solution = (n, k, card) => {
  let answer;
  let tmp = new Set(); // 중복 제거 자료구조
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];

  //   let sum = [];
  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //       for (let k = 0; k < n; k++) {
  //         if (i !== j && i !== k && j !== k) {
  //           if (!sum.includes(arr[i] + arr[j] + arr[k]))
  //             sum.push(arr[i] + arr[j] + arr[k]);
  //         }
  //       }
  //     }
  //   }
  //   sum.sort((a, b) => {
  //     if (a > b) return -1;
  //     if (a === b) return 0;
  //     if (a < b) return 1;
  //   });
  //   answer = sum[k - 1];
  return answer;
};

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

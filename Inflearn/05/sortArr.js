solution = (arr1, arr2) => {
  // sort nlogn, two-pointer n+m
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0;
  let p2 = 0;
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  //   for (let x of arr1) answer.push(x);
  //   for (let y of arr2) answer.push(y);

  //   answer.sort((x, y) => {
  //     if (x > y) return 1;
  //     if (x === y) return 0;
  //     if (x < y) return -1;
  //   });

  return answer;
};

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

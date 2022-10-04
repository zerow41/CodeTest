function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
  //   let answer;
  //   arr.sort((a, b) => a - b);
  //   let st = 0,
  //     ed = arr.length - 1,
  //     mid = Math.floor((st + ed) / 2);
  //   while (ed - st >= 0) {
  //     if (arr[mid] === target) return mid;
  //     else if (arr[mid] <= target) st = mid + 1;
  //     else ed = mid - 1;
  //     mid = Math.floor((st + ed) / 2);
  //   }
  //   answer = mid + 1;
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

solution = (arr) => {
  let answer = [];

  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  //   for (let x of arr) {
  //     let n = x;
  //     n = Number(n.toString().split("").reverse().join(""));
  //     if (n === 2 || n === 3) answer.push(n);
  //     for (let i = 3; i < n; n += 2) {
  //       if (n % i !== 0) answer.push(n);
  //     }
  //   }

  return answer;
};

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

function sumofNumbers(n) {
  if (n === 0) {
    return 0;
  }
  return n + sumofNumbers(n - 1);
}

let n = 5;

console.log("sum of n numbers is", sumofNumbers(n));

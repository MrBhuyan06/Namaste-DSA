/**
 *
 * @param {Sum of All} n
 * @returns
 */

function sumofNumbers(n) {
  if (n == 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n + sumofNumbers(n - 1);
}

let n = 1;

console.log("sum of n numbers is", sumofNumbers(n));

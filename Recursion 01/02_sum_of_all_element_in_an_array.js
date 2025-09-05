/**
 *
 *
 * Here we are basically doing like
 * [2,4,5,7] + fn(3)
 * [2,4,5] + fn(2)
 * [2,4] + fn(1)
 * [2] + fn(0)
 * now we keep on adding
 */

function sumOfElementInArray(n) {
  if (n == 0) {
    return arr[0];
  }
  return arr[n] + sumOfElementInArray(n - 1);
}

let arr = [2, 4, 5, 7, 8];

console.log(
  "sum of all array element is ",
  sumOfElementInArray(arr.length - 1)
);

// 2. second Appro

function toCalculateSum(n) {
  if (n.length == 1) {
    return n[0];
  }
  return n[0] + toCalculateSum(n.slice(1, n.length));
}
console.log("Second Approach", toCalculateSum([2, 4, 5, 7, 8]));

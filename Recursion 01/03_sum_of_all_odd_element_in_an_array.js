let ArrayElement = [5, 4, 2, 3, 0, 7, 9];

function sumofAllOddElement(n) {
  const isOdd = ArrayElement[n] % 2 != 0;

  if (n == 0) {
    return isOdd ? ArrayElement[0] : 0;
  }
  return (isOdd ? ArrayElement[n] : 0) + sumofAllOddElement(n - 1);
}
console.log(
  "sum of all odd Numbers in an array",
  sumofAllOddElement(ArrayElement.length - 1),
);

function sumofAllOddNum(arr) {
  if (arr.length == 1 && arr[0] % 2 != 0) {
    return arr[0];
  }
  if (arr.length == 1 && arr[0] % 2 == 0) {
    return 0;
  }

  return arr[0] % 2 == 0
    ? 0 + sumofAllOddNum(arr.slice(1, arr.length))
    : arr[0] + sumofAllOddNum(arr.slice(1, arr.length));
}

console.log(sumofAllOddNum([0, 0]));

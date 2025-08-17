let ArrayElement = [5, 4, 2, 3, 0, 7,9];

function sumofAllOddElement(n) {
  const isOdd = ArrayElement[n] % 2 != 0;

  if (n == 0) {
    return isOdd ? ArrayElement[0] : 0;
  }
  return isOdd
    ? ArrayElement[n] + sumofAllOddElement(n - 1)
    : 0 + sumofAllOddElement(n - 1);
}
console.log(
  "sum of all odd Numbers in an array",
  sumofAllOddElement(ArrayElement.length - 1)
);

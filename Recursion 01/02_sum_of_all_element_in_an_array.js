function sumOfElement(sumArray) {
  if (sumArray.length == 1) {
    return sumArray[0];
  }
  return sumArray[0] + sumOfElement(sumArray.slice(1, sumArray.length));
}

let numsArray = [5, 3, 4, 1, 2, 0];

console.log("sum of Element in an Array Element is ", sumOfElement(numsArray));

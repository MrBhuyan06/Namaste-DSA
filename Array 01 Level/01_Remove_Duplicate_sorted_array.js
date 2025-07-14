// Remove Duplicates from Sorted Array

let removeDuplicates = (number) => {
  let index = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] > number[index]) {
      index = index + 1;
      number[index] = number[i];
    }
  }
  return index + 1;
};

let inputArrray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(
  "The lenght of an array element after removing is ",
  removeDuplicates(inputArrray)
);

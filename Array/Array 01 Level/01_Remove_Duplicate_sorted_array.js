// Remove Duplicates from Sorted Array
// 1 -> not greater
// 1 -> not greater
// 2->

let removeDuplicates = (number) => {
  let pointer = 0;

  for (let i = 0; i < number.length; i++) {
    if (arr[i] != arr[pointer]) {
      pointer++;
      number[pointer] = number[i];
    }
  }
  return number.slice(0, pointer + 1);
};

let arr = [1, 1, 2, 3, 3, 4, 4];
console.log("Remove the duplicate in an given Array", removeDuplicates(arr));

//Remove The Duplicate element using filter

function removeDuplicateFilter(arr) {
  return arr
    .filter((val, index) => arr.indexOf(val) == index)
    .sort((a, b) => a - b);
}
console.log("Filter Using Loop ", removeDuplicateFilter([9, 1, 8, 3, 3, 1, 8]));

function removeDupliacteNotEqual(arr) {
  if (arr.length == 0) {
    return 0;
  }

  let pointer = 0; // index for tracking unique elements

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[pointer]) {
      pointer++;
      arr[pointer] = arr[i];
    }
  }
  return pointer + 1;
}

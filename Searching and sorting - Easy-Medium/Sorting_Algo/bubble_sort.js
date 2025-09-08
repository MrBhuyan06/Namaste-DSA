// in Bubble sort on each iteration the biggest value pop to the last

function bubbleSort(arr) {
  let iterationLength = arr.length;
  // this loop is for iteration which is n-1
  for (let i = 0; i < iterationLength - 1; i++) {
    let isSwapped = false;
    //inner loop  is for comparision
    for (let j = 0; j < iterationLength - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //here we need to swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

//Time Complexsity 0n2
//space 0(1)

let arr = [5, 4, 9, 15, 7, 1, 0];

console.log("Bubble Sort", bubbleSort(arr));

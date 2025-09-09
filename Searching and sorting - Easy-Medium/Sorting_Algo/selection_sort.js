//Here we selected the initicial element as sorted one and compare with the all the element for the innner loop
// for the inner loop
let arr = [4, 5, 1, 3, 9];
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp =arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
let result = selectionSort(arr);
console.log("Selection Sort ", result);

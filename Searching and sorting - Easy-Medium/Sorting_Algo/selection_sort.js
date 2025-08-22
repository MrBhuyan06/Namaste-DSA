/**
 * ! How Does it will Work it will work Like
 *
 *
 *
 */

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // swap only do when min != i

    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let arr = [7, 1, 3, 2, 5, 6];

console.log("Selection Sort ------> ", selectionSort(arr));

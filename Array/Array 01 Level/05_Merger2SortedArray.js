/**
 * 
 * 
 * 
 * Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3
       nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined 
elements coming from nums1.
 * 
 * 
 * 
 * 
 * 
 * 
 */

//1.Brute Froce

// function mergeSortArray(nums1, nums2, m, n) {
//   let p1 = 0;
//   let p2 = 0;

//   let numsCopy1 = nums1.slice(0, m);

//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n || (p1 < m && numsCopy1[p1] < nums2[p2])) {
//       nums1[i] = numsCopy1[p1];
//       p1++;
//     } else {
//       nums1[i] = nums2[p2];
//       p2++;
//     }
//   }
// }
// let nums2 = [1, 2, 3];
// let nums1 = [2, 5, 6];

// mergeSortArray(nums1, nums2, 3, 3);

// console.log("Test 03 ", nums1);

function bruteFroce(nums1, nums2, m, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  return nums1.sort((a, b) => a - b);
}
// let nums2 = [1, 2, 3];
// let nums1 = [2, 5, 6];

// console.log("Merge Sort ", bruteFroce(nums1, nums2, 3, 3));

function bruteFroceTwo(nums1, nums2, m, n) {
  let p1 = 0;
  let p2 = 0;
  let num1Copy = nums1.slice(0, nums1.length);
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (num1Copy[p1] < nums2[p2] && p1 < m)) {
      nums1[i] = num1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}
// let nums2 = [1, 2, 3];
// let nums1 = [2, 5, 6];

// console.log("Merge Sort ", bruteFroceTwo(nums1, nums2, 3, 3));

function bruteFroceThree(nums1, nums2, m, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  // let num1Copy = nums1.slice(0, nums1.length);
  for (let i = n + m - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (nums1[p1] > nums2[p2] && p1 >= 0) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}
let nums2 = [1, 2, 3];
let nums1 = [2, 5, 6];

console.log("Merge Sort ", bruteFroceThree(nums1, nums2, 3, 3));

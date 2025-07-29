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

// function mergeSorted(num1,num2,m,n){

//     for(let i=0; i<num2.length;i++){
//         num1[m+i]=num2[i]
//     }
//     num1.sort((a,b) => a-b)

// }

//2.Approach
function mergeSortedArray(nums1, num2, m, n) {
  let nums1Copy = nums1.slice(0, m);

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 == n || (p1 < m && nums1Copy[p1] < num2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = num2[p2];
      p2++;
    }
  }
}

//3.Optimal Approach
// Where we will not copy the array we need to fill the num1 array form the last

function mergeTwoSortedArray(num1, num2, m, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0 && num1[p1] > num2[p2]) {
      num1[i] = num1[p1];
      p1--;
    } else {
      num1[i] = num2[p2];
      p2--;
    }
  }
}

let num1 = [1, 2, 3];
let num2 = [2, 5, 6];

mergeTwoSortedArray(num1, num2, 3, 3);
console.log("After Sorted", num1);

/**
 * iven an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

Note: You must do this in-place without making a copy of the array.

Examples
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
Input: nums = [0]
Output: [0]
Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 – 1
 * 
 * 
 * 
 * 
 */

function movingZeros(nums) {
  let p1 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[p1] = nums[i];
      p1++;
    }
  }
  for (let i = p1; i < nums.length; i++) {
    nums[i] = 0;
  }
}

let nums = [0, 1, 0, 3, 12];

movingZeros(nums);
console.log("After Moving Zero From the Array ", nums);

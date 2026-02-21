/**
 * 
 * Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
 */

let removeElement = function (nums, val) {
  let pointer = 0; // this is track for the non value index
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return nums.slice(0, pointer);
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

console.log("Length After Remove Element ", removeElement(nums, val));



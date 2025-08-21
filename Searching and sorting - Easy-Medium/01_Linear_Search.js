function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  return -1;
}

let nums = [-1, 0, 3, 5, 9, 12];
console.log(linearSearch(nums, 91));

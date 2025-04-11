function remDups(nums) {
  let i = 0,
    j = 1;
  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
    j++;
  }
  return i + 1;
}
let arr = [1, 1, 2, 2, 2, 3, 3];
console.log(remDups(arr));

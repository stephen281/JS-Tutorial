const nums = [1, 2, 4, 7, 7, 5];

function getSLargest(nums) {
  let largest = nums[0];
  let sLargest = -1;
  for (i in nums) {
    if (nums[i] > largest) {
      sLargest = largest;
      largest = nums[i];
    } else {
      if (nums[i] > sLargest && nums[i] != largest) {
        sLargest = nums[i];
      }
    }
  }
  return sLargest;
}

console.log(getSLargest(nums));

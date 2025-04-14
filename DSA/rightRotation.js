function rotate(nums, k) {
  // step 1
  let temp = [];
  let check_num = [...nums];
  temp.length = k;
  let n = nums.length;
  for (let i = n - k; i < n; i++) {
    temp[i - (n - k)] = nums[i];
  }

  // step 2
  for (let i = 0; i < n - k; i++) {
    check_num[k + i] = nums[i];
  }
  // step 3
  for (let i = 0; i < k; i++) {
    check_num[i] = temp[i];
  }

  nums = [...check_num];
  console.log(nums);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);

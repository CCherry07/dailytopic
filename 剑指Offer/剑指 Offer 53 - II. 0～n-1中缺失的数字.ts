let missingNumber = function (nums) {
  let left = 0, right = nums.length - 1;
  // 二分查找 [0, 1, 2] 
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === mid) left = mid + 1; // 数组是单调递增的，如果中间的没问题，那么左侧也没问题
    else right = mid - 1;
  }
  return left; // 如果全都没问题，最后left = nums.length
};

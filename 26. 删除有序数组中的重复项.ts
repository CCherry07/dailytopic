function removeDuplicates(nums: number[]): number {
  const len = nums.length
  let slow = 0
  let fast = 0

  while (fast < len) {
    if (nums[slow] !== nums[fast]) {
      slow += 1
      nums[slow] = nums[fast];
    }
    fast += 1
  }
  return slow + 1
};


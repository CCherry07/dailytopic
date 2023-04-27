function removeDuplicates(nums: number[]): number {
  const len = nums.length
  let slow = 0
  let fast = 0

  while (fast < len) {
    if (nums[slow] !== nums[fast]) { // 摒弃重复元素
      slow += 1
      nums[slow] = nums[fast]; // slow 指针只有在遇到不同的元素时才往前走
    }
    fast += 1 // fast 指针一直往前走
  }
  return slow + 1
};


function findRepeatNumber(nums: number[]): number {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i]
    } else {
      set.add(nums[i])
    }
  }
  return 0
};

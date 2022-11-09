function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    const l = nums.indexOf(nums[i], i + 1)
    if (l !== -1 && Math.abs(i - l) <= k) {
      return true
    }
  }
  return false
};


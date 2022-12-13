function minSubArrayLen(target: number, nums: number[]): number {
  let start = 0, end = 0, res = 0, len = nums.length + 1
  while (end < nums.length) {
    res += nums[end++]
    while (res >= target) {
      len = len < end - start ? len : end - start
      res -= nums[start++]
    }
  }
  return len > nums.length ? 0 : len
};

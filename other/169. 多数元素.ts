function majorityElement(nums: number[]): number | undefined {
  const numo: Record<number, number> = {}
  const mid = Math.floor(nums.length / 2)
  if (mid === 0) return nums[0]
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] in numo)) {
      numo[nums[i]] += 1
      if (numo[nums[i]] > mid) return nums[i]
    } else {
      numo[nums[i]] = 1
    }
  }
};

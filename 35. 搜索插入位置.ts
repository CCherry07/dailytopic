function searchInsert(nums: number[], target: number): number {
  let targetIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return (targetIdx = i)
    if (target > nums[i] && target <= nums[i + 1] || nums[i + 1] === undefined) return (targetIdx = i + 1)
  }
  return targetIdx
};

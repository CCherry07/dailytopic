function sortedSquares(nums: number[]): number[] {
  return nums.map(num => num * num).sort((a, b) => a - b)
};
function sortedSquares2(nums: number[]): number[] {
  const result: number[] = []
  let left = 0, right = nums.length - 1
  let current = right
  while (left <= right) {
    const r1 = nums[left] * nums[left]
    const r2 = nums[right] * nums[right]
    if (r1 > r2) {
      result[current] = r1
      left++
    } else {
      result[current] = r2
      right--
    }
    current--
  }
  return result
};

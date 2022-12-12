function sortedSquares(nums: number[]): number[] {
  return nums.map(num => num * num).sort((a, b) => a - b)
};

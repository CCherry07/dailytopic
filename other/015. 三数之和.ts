function threeSum(nums: number[]): number[][] {
  if (nums == null || nums.length < 3) return [];
  const res: number[][] = []
  const arr = nums.sort((a, b) => a - b)
  const r = arr.length - 1
  for (let i = 0; i < r - 1 && arr[i] <= 0; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue
    let left = i + 1
    let right = r
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right]
      if (sum === 0) {
        res.push([arr[i], arr[left], arr[right]])
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) left++
        while (left < right && arr[right] === arr[right + 1]) right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return res
};

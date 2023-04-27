function removeElement(nums: number[], val: number): number {
  let slow = 0, fast = 0
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow += 1
    }
    fast += 1
  }
  return slow
};

const tnums = [0, 1, 2, 2, 3, 0, 4, 2]
console.log(removeElement(tnums, 2));

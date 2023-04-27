function singleNumber(nums: number[]): number {
  let target = 0
  nums.forEach(num=>{
      target ^= num
  })
  return target
};

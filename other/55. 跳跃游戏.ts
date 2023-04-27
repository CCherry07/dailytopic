function canJump(nums: number[]): boolean {
  let cover = 0
  for(let i = 0;i <= cover;i++){
      cover = Math.max(cover , i + nums[i])
      if(cover >= nums.length-1) return true
  }
  return false
};

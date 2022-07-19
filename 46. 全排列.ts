function backTrack(list:number[][] ,temp:number[], nums: number[]){
  if(nums.length === temp.length) return list.push([...temp])
  for(let i = 0 ; i < nums.length ; i++){
      if(temp.includes(nums[i]))continue
      temp.push(nums[i])
      backTrack(list , temp , nums)
      temp.pop()
  }
}

function permute(nums: number[]): number[][] {
  const list:number[][] = []
  backTrack(list , [] , nums)
  return list
};

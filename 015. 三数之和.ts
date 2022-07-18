function threeSum(nums: number[]): number[][] {
  if(nums == null || nums.length < 3) return [];
  let resArr:number[][]=[]
  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length-2;i++){
    if(i>0 && nums[i]==nums[i-1]) continue;
    let left = i+1;
    let right = nums.length-1;
    while(left<right){
      let sum = nums[i]+nums[left]+nums[right];
      if(sum==0){
        resArr.push([nums[i],nums[left],nums[right]])
        left++;
        right--;
        while(left<right && nums[left]==nums[left-1]) left++;
        while(left<right && nums[right]==nums[right+1]) right--;
      }else if(sum<0){
        left++;
      }else{
        right--;
      }
    }
  }
  return resArr
};

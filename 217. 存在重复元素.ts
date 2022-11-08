function containsDuplicate(nums: number[]): boolean {
    let flog = false
    for(let i=0 ; i<nums.length ; i++){
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i]) && nums.lastIndexOf(nums[i]) !== -1){
            flog = true
            return flog
        }
    }
    return flog
};

function containsDuplicate1(nums: number[]): boolean {
    return new Set(nums).size !== nums.length
};

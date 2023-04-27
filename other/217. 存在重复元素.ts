function containsDuplicate(nums: number[]): boolean {
    for(let i=0 ; i<nums.length ; i++){
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
            return true
        }
    }
    return false
};

function containsDuplicate1(nums: number[]): boolean {
    return new Set(nums).size !== nums.length
};

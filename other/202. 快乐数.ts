function isHappy(n: number): boolean {
  let s: number[] = []
  function find(n: number): any {
    const nums = n.toString()
    let res = 0
    for (let i = 0; i < nums.length; i++) {
      res = Number(nums[i]) * Number(nums[i])
    }
    if (res === 1) return true
    if (s.indexOf(res) !== -1) return false
    s.push(res)
    return find(res)
  }
  return find(n)
};

console.log(isHappy(19));


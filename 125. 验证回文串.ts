function isPalindrome(s: string): any {
  const strArr = s.toLowerCase().match(/[a-z0-9]/g)
  const left = strArr?.join("")
  const right = strArr?.reverse().join("")
  return left === right
};



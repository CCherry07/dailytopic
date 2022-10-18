function plusOne(digits: number[]): number[] {
  let isAdd = true
  const len = digits.length - 1
  for (let i = len; i >= 0; i--) {
    if (isAdd) {
      digits[i] = digits[i] + 1
      if (digits[i] === 10) {
        isAdd = true
        digits[i] = 0
      } else {
        isAdd = false
      }
    }
  }
  if (isAdd) digits.unshift(1)
  return digits
};

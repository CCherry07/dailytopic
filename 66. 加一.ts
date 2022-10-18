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
    } else {
      break
    }
  }
  if (isAdd) digits.unshift(1)
  return digits
};


// 2

function plusOne2(digits: number[]): number[] {
  const len = digits.length - 1
  for (let i = len; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] != 0) return digits
  }
  digits.unshift(1)
  return digits
};
